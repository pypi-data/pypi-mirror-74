"""
Main SIMFLUX data processing pipeline.

In a nutshell:
- detect_rois() - Detect ROIs and store them in X_rois.npy. Also compute chi-square and create 'roi_indices' list
- estimate_sigma() - Fit detected rois using 2D Gaussian where sigma x,y are also fitted parameters
- estimate_patterns() - Use fitted positions and intensities to estimate excitation patterns. Store result in X-mod.pickle
- process() - Run SIMFLUX fitting on ROIs passed by chi-square test.
"""
import numpy as np
import matplotlib.pyplot as plt
import photonpy.utils.localizations as loc
from photonpy.simflux.spotlist import SpotList
import math
import os,pickle
from photonpy.cpp.context import Context
import sys
import time
import tqdm
from photonpy.cpp.estimator import Estimator
from photonpy.cpp.estim_queue import EstimQueue,EstimQueue_Results
from photonpy.cpp.roi_queue import ROIQueue
from photonpy.cpp.gaussian import Gaussian
import photonpy.cpp.spotdetect as spotdetect
from photonpy.cpp.simflux import SIMFLUX, SFSFEstimator
from scipy.interpolate import InterpolatedUnivariateSpline

import photonpy.utils.multipart_tiff as read_tiff
import photonpy.smlm.process_movie as process_movie
from photonpy.smlm.util import plot_traces

from photonpy.cpp.postprocess import PostProcessMethods

figsize=(9,7)

ModDType = SIMFLUX.modulationDType

#mpl.use('svg')

# Make sure the angles dont wrap around, so you can plot them and take mean
def unwrap_angle(ang):
    r = ang * 1
    ang0 = ang.flatten()[0]
    r[ang > ang0 + math.pi] -= 2 * math.pi
    r[ang < ang0 - math.pi] += 2 * math.pi
    return r


# Pattern angles wrap at 180 degrees
def unwrap_pattern_angle(ang):
    r = ang * 1
    ang0 = ang.flatten()[0]
    r[ang > ang0 + math.pi / 2] -= math.pi
    r[ang < ang0 - math.pi / 2] += math.pi
    return r


def print_phase_info(mod):
    for axis in [0, 1]:
        steps = np.diff(mod[axis::2, 3])
        steps[steps > np.pi] = -2 * np.pi + steps[steps > np.pi]
        print(f"axis {axis} steps: {-steps*180/np.pi}")



def result_dir(path):
    dir, fn = os.path.split(path)
    return dir + "/results/" + os.path.splitext(fn)[0] + "/"


        
def load_mod(tiffpath):
    with open(os.path.splitext(tiffpath)[0]+"_mod.pickle", "rb") as pf:
        mod = pickle.load(pf)['mod']
        assert(mod.dtype == ModDType)
        return mod
    
    


def print_mod(reportfn, mod, pattern_frames, pixelsize):
    k = mod['k']
    phase = mod['phase']
    depth = mod['depth']
    ri = mod['relint']
    
    for i in range(len(mod)):
        reportfn(f"Pattern {i}: kx={k[i,0]:.4f} ky={k[i,1]:.4f} Phase {phase[i]*180/np.pi:8.2f} Depth={depth[i]:5.2f} "+
               f"Power={ri[i]:5.3f} ")

    for ang in range(len(pattern_frames)):
        pat=pattern_frames[ang]
        d = np.mean(depth[pat])
        phases = phase[pat]
        shifts = (np.diff(phases[-1::-1]) % (2*np.pi)) * 180/np.pi
        shifts[shifts > 180] = 360 - shifts[shifts>180]
        
        with np.printoptions(precision=3, suppress=True):
            reportfn(f"Angle {ang} shifts: {shifts} (deg) (patterns: {pat}). Depth={d:.3f}")
    
    
def equal_cache_cfg(data_fn, cfg):
    """
    Returns true if the config file associated with data file data_fn contains the same value as cfg
    """ 
    cfg_fn = os.path.splitext(data_fn)[0]+"_cfg.pickle"
    if not os.path.exists(cfg_fn):
        return False
    with open(cfg_fn,"rb") as f:
        stored = pickle.load(f)
        
        try:
            # Note that we can't just do 'return stored == cfg'. 
            # If one of the values in a dictionary is a numpy array, 
            # we will get "The truth value of an array with more than one element is ambiguous. Use a.any() or a.all()"
            # See https://stackoverflow.com/questions/26420911/comparing-two-dictionaries-with-numpy-matrices-as-values
            np.testing.assert_equal(stored, cfg)
        except:
            return False

        return True
            
def save_cache_cfg(data_fn, cfg):
    cfg_fn = os.path.splitext(data_fn)[0]+"_cfg.pickle"
    with open(cfg_fn,"wb") as f:
        pickle.dump(cfg,f)
    
    
    
class SimfluxProcessor:
    """
    Simflux processing. 
    """
    def __init__(self, src_fn, cfg, debugMode=False):
        """
        chi-square threshold: Real threshold = chisq_threshold*roisize^2
        """
        self.pattern_frames = np.array(cfg['patternFrames'])
        self.src_fn = src_fn
        self.rois_fn = os.path.splitext(src_fn)[0] + "_rois.npy"
        self.debugMode = debugMode
        self.cfg = cfg
        self.imgshape = read_tiff.tiff_get_image_size(src_fn)
        self.sigma = cfg['sigma']
        if np.isscalar(self.sigma):
            self.sigma = [self.sigma, self.sigma]
        self.roisize = cfg['roisize']
        self.pixelsize = cfg['pixelsize']
        self.threshold = cfg['detectionThreshold']
        self.maxframes = cfg['maxframes'] if 'maxframes' in cfg else -1
        
        self.mod_fn = os.path.splitext(self.src_fn)[0]+"-mod.pickle"
        self.roi_indices=None
        
        self.IBg = None
        self.sum_fit = None
        
        dir, fn = os.path.split(src_fn)
        self.resultsdir = dir + "/results/" + os.path.splitext(fn)[0] + "/"
        os.makedirs(self.resultsdir, exist_ok=True)
        self.resultprefix = self.resultsdir
            
        self.reportfile = self.resultprefix + "report.txt"
        with open(self.reportfile,"w") as f:
            f.write("")
            
        self.g_undrifted=None
        self.sf_undrifted=None
        
    def _camera_calib(self, ctx):
        return process_movie.create_calib_obj(self.cfg['gain'], self.cfg['offset'],self.imgshape, ctx)

    def detect_rois(self, chisq_threshold=4, ignore_cache=False, roi_batch_size=20000, background_img=None):
        
        self.chisq_threshold = chisq_threshold

        spotDetector = spotdetect.SpotDetector(self.sigma, self.roisize, self.threshold, backgroundImage=background_img)
            
        if not equal_cache_cfg(self.rois_fn, self.cfg) or ignore_cache:
            with Context(debugMode=self.debugMode) as ctx:
                process_movie.detect_spots(self.imgshape, spotDetector, self._camera_calib(ctx), 
                                   read_tiff.tiff_read_file(self.src_fn, self.cfg['startframe'], self.maxframes), 
                                   self.pattern_frames.size, self.rois_fn, batch_size = roi_batch_size, ctx=ctx)
            save_cache_cfg(self.rois_fn, self.cfg)
            
        self.numrois = np.sum([len(ri) for ri,px in self._load_rois_iterator()])
        print(f"Num ROIs: {self.numrois}")
        
        self.gaussian_fitting()

    def close(self):
        ...

    def estimate_sigma(self, plot=True):
        estimates = []
        chisq = []
        
        with Context(debugMode=self.debugMode) as ctx, Gaussian(ctx).CreatePSF_XYIBgSigmaXY(self.roisize, [3,3], True) as psf:

            psf.SetLevMarParams(1e-15,40)
            for rois_info, pixels in self._load_rois_iterator():
                summed_patterns = pixels.sum(1)
                e, diag, traces = psf.Estimate(summed_patterns)
                chisq.append(psf.ChiSquare(e, summed_patterns))
                
                nant = np.where(np.sum(np.isnan(e),1)!=0)[0]
                
                if len(nant)>0:
                    print(e[nant])
                    plot_traces([traces[i] for i in nant], e[nant], psf, 2)
                    plot_traces([traces[i] for i in nant], e[nant], psf, 3)
                    raise ValueError('TODO: Fix nan results in 2D Gaussian + Sigma fit')
                                
                estimates.append(e)
         
        chisq = np.concatenate(chisq)
        estimates = np.concatenate(estimates)
        estimates = estimates[chisq<np.median(chisq)] # use the best half
        
        if plot:
            plt.figure()
            plt.hist(estimates [:,4], range=[1, 4],bins=50)
            plt.title('Sigma X')
        
            plt.figure()
            plt.hist(estimates [:,5], range=[1, 4],bins=50)
            plt.title('Sigma Y')
        
        best = np.median(estimates [:,[4,5]],0)
        print(f'Now using estimated sigma: {best}')
        
        self.cfg['sigma'] = best
        self.sigma = best
        return best
        
    def view_rois(self, indices=None, summed=False, fits=None):
        import napari
        
        ri, pixels = process_movie.load_rois(self.rois_fn)
        
        if self.roi_indices is not None:
            px = pixels[self.roi_indices]
        else:
            px = pixels

        if indices is not None:
            px = px[indices]
        
        if summed:
            px = px.sum(1)
        
        with napari.gui_qt():
            viewer = napari.view_image(px)

            if fits is not None:
                #points = np.array([[100, 100], [200, 200], [300, 100]])
                
                for data, kwargs in fits:
                    coords = np.zeros((len(data),3))
                    coords[:,0] = np.arange(len(data))
                    coords[:,[2,1]] = data[:,:2]
      
                    viewer.add_points(coords, size=0.1, **kwargs)
                
        return viewer
    
    def gaussian_fitting(self):
        """
        Make sure self.IBg and self.sum_fits are known
        """
        if self.IBg is not None and self.sum_fit is not None:
            return
        
        rois_info = []
        sum_fit = []
        ibg = []
        sum_crlb = []
        sum_chisq = []
        
        sigma = np.array(self.sigma)
        
        print('2D Gaussian fitting...',flush=True)
        
        with Context(debugMode=self.debugMode) as ctx:
            gaussfn = Gaussian(ctx)
            with gaussfn.CreatePSF_XYIBg(self.roisize, self.sigma, True) as psf, tqdm.tqdm(total=self.numrois) as pb:
                for ri, pixels in self._load_rois_iterator():
                    summed = pixels.sum(1)
                    e = psf.Estimate(summed)[0]
                    sum_crlb.append(psf.CRLB(e))
                    sum_chisq.append(psf.ChiSquare(e, summed))
                    
                    rois_info.append(ri)
                    
                    sh = pixels.shape # numspots, numpatterns, roisize, roisize
                    pixels_rs = pixels.reshape((sh[0]*sh[1],sh[2],sh[3]))
                    xy = np.repeat(e[:,[0,1]], sh[1], axis=0)
                    
                    ibg_, crlb_ = gaussfn.EstimateIBg(pixels_rs, sigma[None], xy,useCuda=True)
                    ic = np.zeros((len(e)*sh[1],4))
                    ic [:,[0,1]] = ibg_
                    ic [:,[2,3]] = crlb_
                    ibg.append(ic.reshape((sh[0],sh[1],4)))
                                    
                    sum_fit.append(e)
    
                    pb.update(len(pixels))
        print(flush=True)

        sum_fit = np.concatenate(sum_fit)
        IBg = np.concatenate(ibg)
        sum_chisq = np.concatenate(sum_chisq)
        sum_crlb = np.concatenate(sum_crlb)
        rois_info = np.concatenate(rois_info)

        self._store_IBg_fits(sum_fit, IBg, sum_chisq, sum_crlb, rois_info)

    def _store_IBg_fits(self, sum_fit, ibg, sum_chisq, sum_crlb, rois_info,fov=None):
        
        self.sum_fit = sum_fit
        self.IBg = ibg
        self.sum_chisq = sum_chisq
        self.sum_crlb = sum_crlb

        roipos = np.zeros((len(rois_info),3), dtype=np.int32)
        roipos[:,0] = 0
        roipos[:,1] = rois_info['y']
        roipos[:,2] = rois_info['x']
        self.roipos = roipos
        
        plt.figure()
        plt.hist(self.sum_chisq, bins=50, range=[0,4000])
        plt.title('Non-simflux fit chi-square')
        
        if self.chisq_threshold>0:
            threshold = self.roisize**2 * self.chisq_threshold
            ok = self.sum_chisq < threshold
            print(f"Accepted {np.sum(ok)}/{self.numrois} spots (chi-square threshold={threshold:.1f}")
        else:
            ok = np.ones(self.sum_chisq.shape, dtype=np.bool)

        self.roipos = self.roipos[ok]
        self.sum_fit = self.sum_fit[ok]
        self.IBg = self.IBg[ok]
        self.sum_chisq = self.sum_chisq[ok]
        self.sum_crlb = self.sum_crlb[ok]
        self.framenum = rois_info['id'][ok]
        
        self.roi_indices = np.where(ok)[0]
        
        area = [0,0,self.imgshape[1],self.imgshape[0]]
        self.sum_results = loc.from_estim(self.cfg, area, self.src_fn, 
                                 self.sum_fit, self.sum_crlb, self.roipos, self.framenum)
        
        fn = self.resultprefix+'g2d_fits.hdf5'
        self.sum_results.save_picasso_hdf5(fn)

        self.spotlist = SpotList(self.sum_results, self.selected_roi_source, pixelsize=self.cfg['pixelsize'], 
                            outdir=self.resultsdir, IBg=self.IBg[:,:,:2], IBg_crlb=self.IBg[:,:,2:])
        
        median_crlb_x = np.median(self.sum_results.get_crlb()[:,0])
        median_I = np.median(self.sum_results.get_xyI()[:,2])

        self.report(f"g2d mean I={median_I:.1f}. mean crlb x {median_crlb_x:.4f}")
        

    def estimate_patterns(self, num_angle_bins=1,
                          num_phase_bins=10, 
                          freq_minmax=[1.5, 3], 
                          fix_phase_shifts=None, 
                          fix_depths=None,
                          show_plots=True):
        
        nframes = len(self.sum_results.frames)
        fr = np.arange(nframes)
    
        with Context(debugMode=self.debugMode) as ctx:
            angles, pitch = self.spotlist.estimate_angle_and_pitch(
                self.pattern_frames, 
                frame_bins=np.array_split(fr, num_angle_bins), 
                ctx=ctx,
                freq_minmax=freq_minmax
            )
        
        num_patterns = self.pattern_frames.size
        mod = np.zeros((num_patterns),dtype=ModDType)

        print("Pitch and angle estimation: ")
        for k in range(len(self.pattern_frames)):
            angles[angles[:, k] > 0.6 * np.pi] -= np.pi  # 180 deg to around 0
            angles[:, k] = unwrap_pattern_angle(angles[:, k])
            angles_k = angles[:, k]
            pitch_k = pitch[:, k]
            self.report(f"Angle {k}: { np.rad2deg(np.mean(angles_k)) :7.5f} [deg]. Pitch: {np.mean(pitch_k)*self.pixelsize:10.5f} ({2*np.pi/np.mean(pitch_k):3.3f} [rad/pixel])")

            freq = 2 * np.pi / np.mean(pitch_k)
            kx = np.cos(np.mean(angles_k)) * freq
            ky = np.sin(np.mean(angles_k)) * freq
            mod['k'][self.pattern_frames[k], :2] = kx,ky
                        
        frame_bins = np.array_split(fr, num_phase_bins)
        frame_bins = [b for b in frame_bins if len(b)>0]
        
        method = 1
        phase, depth, power = self.spotlist.estimate_phase_and_depth(mod['k'], self.pattern_frames, frame_bins, method=method)
        phase_all, depth_all, power_all = self.spotlist.estimate_phase_and_depth(mod['k'], self.pattern_frames, [fr], method=method)

        # store interpolated phase for every frame
        frame_bin_t = [np.mean(b) for b in frame_bins]
        self.phase_interp = np.zeros((nframes,num_patterns))
        for k in range(num_patterns):
            phase[:,k] = unwrap_angle(phase[:, k])
            spl = InterpolatedUnivariateSpline(frame_bin_t, phase[:,k], k=2)
            self.phase_interp[:,k] = spl(fr)
            
        fig = plt.figure(figsize=figsize)
        styles = ['o', "x", "*", 'd']
        for ax, idx in enumerate(self.pattern_frames):
            for k in range(len(idx)):
                p=plt.plot(fr, self.phase_interp[:,idx[k]] * 180/np.pi,ls='-')
                plt.plot(frame_bin_t, phase[:,idx[k]] * 180 / np.pi,ls='', c=p[0].get_color(), marker=styles[ax%len(styles)], label=f"Phase {idx[k]} (axis {ax})")
        plt.legend()
        plt.title(f"Phases for {self.src_fn}")
        plt.xlabel("Frame number"); plt.ylabel("Phase [deg]")
        plt.grid()
        plt.tight_layout()
        fig.savefig(self.resultprefix + "phases.png")
        if not show_plots: plt.close(fig)

        fig = plt.figure(figsize=figsize)
        for ax, idx in enumerate(self.pattern_frames):
            for k in range(len(idx)):
                plt.plot(frame_bin_t, depth[:, idx[k]], styles[ax%len(styles)], ls='-', label=f"Depth {idx[k]} (axis {ax})")
        plt.legend()
        plt.title(f"Depths for {self.src_fn}")
        plt.xlabel("Frame number"); plt.ylabel("Modulation Depth")
        plt.grid()
        plt.tight_layout()
        fig.savefig(self.resultprefix + "depths.png")
        if not show_plots: plt.close(fig)

        fig = plt.figure(figsize=figsize)
        for ax, idx in enumerate(self.pattern_frames):
            for k in range(len(idx)):
                plt.plot(frame_bin_t, power[:, idx[k]], styles[ax%len(styles)], ls='-', label=f"Power {idx[k]} (axis {ax})")
        plt.legend()
        plt.title(f"Power for {self.src_fn}")
        plt.xlabel("Frame number"); plt.ylabel("Modulation Power")
        plt.grid()
        plt.tight_layout()
        fig.savefig(self.resultprefix + "power.png")
        if not show_plots: plt.close(fig)

        # Update mod
        phase_std = np.zeros(len(mod))
        for k in range(len(mod)):
            ph_k = unwrap_angle(phase[:, k])
            mod['phase'][k] = phase_all[0, k]
            mod['depth'][k] = depth_all[0, k]
            mod['relint'][k] = power_all[0, k]
            phase_std[k] = np.std(ph_k)

        s=np.sqrt(num_phase_bins)
        for k in range(len(mod)):
            self.report(f"Pattern {k}: Phase {mod[k]['phase']*180/np.pi:8.2f} (std={phase_std[k]/s*180/np.pi:6.2f}) "+
                   f"Depth={mod[k]['depth']:5.2f} (std={np.std(depth[:,k])/s:5.3f}) "+
                   f"Power={mod[k]['relint']:5.3f} (std={np.std(power[:,k])/s:5.5f}) ")

        #mod=self.spotlist.refine_pitch(mod, self.ctx, self.spotfilter, plot=True)[2]

        if fix_phase_shifts:
            self.report(f'Fixing phase shifts to {fix_phase_shifts}' )
            phase_shift_rad = fix_phase_shifts / 180 * np.pi
            for ax in self.pattern_frames:
                mod[ax]['phase'] = mod[ax[0]]['phase'] + np.arange(len(ax)) * phase_shift_rad

            with Context(debugMode=self.debugMode) as ctx:
                mod=self.spotlist.refine_pitch(mod, self.ctx, self.spotfilter, plot=True)[2]

        for angIndex in range(len(self.pattern_frames)):
            mod[self.pattern_frames[angIndex]]['relint'] = np.mean(mod[self.pattern_frames[angIndex]]['relint'])
            # Average modulation depth
            mod[self.pattern_frames[angIndex]]['depth'] = np.mean(mod[self.pattern_frames[angIndex]]['depth'])

        mod['relint'] /= np.sum(mod['relint'])

        if fix_depths:
            self.report(f'Fixing modulation depth to {fix_depths}' )
            mod['depth']=fix_depths

        self.report("Final modulation pattern parameters:")
        print_mod(self.report, mod, self.pattern_frames, self.pixelsize)
        
        self.mod = mod
        with open(self.mod_fn,"wb") as f:
            pickle.dump((mod,self.phase_interp),f)
        
        med_sum_I = np.median(self.IBg[:,:,0].sum(1))
        lowest_power = np.min(self.mod['relint'])
        depth = self.mod[np.argmin(self.mod['relint'])]['depth']
        median_intensity_at_zero = med_sum_I * lowest_power * (1-depth)
        self.report(f"Median summed intensity: {med_sum_I:.1f}. Median intensity at pattern zero: {median_intensity_at_zero:.1f}")
        


    def pattern_plots(self, spotfilter):
        self.load_mod()
        self.report(f"Generating pattern plots using spot filter: {spotfilter}. ")
        for k in range(len(self.mod)):
            png_file= f"{self.resultprefix}patternspots{k}.png"
            print(f"Generating {png_file}...")
            src_name = os.path.split(self.src_fn)[1]
            self.spotlist.draw_spots_in_pattern(png_file, self.mod, 
                                       k, tiffname=src_name, numpts= 2000, spotfilter=spotfilter)
            self.spotlist.draw_spots_in_pattern(f"{self.resultprefix}patternspots{k}.svg", self.mod, 
                                       k, tiffname=src_name, numpts= 2000, spotfilter=spotfilter)

        self.spotlist.draw_axis_intensity_spread(self.pattern_frames, self.mod, spotfilter)
        
        
    def draw_mod(self, showPlot=False):
        allmod = self.mod
        filename = self.resultprefix+'patterns.png'
        fig,axes = plt.subplots(1,2)
        fig.set_size_inches(*figsize)
        for axis in range(len(self.pattern_frames)):
            axisname = ['X', 'Y']
            ax = axes[axis]
            indices = self.pattern_frames[axis]
            freq = np.sqrt(np.sum(allmod[indices[0]]['k']**2))
            period = 2*np.pi/freq
            x = np.linspace(0, period, 200)
            sum = x*0
            for i in indices:
                mod = allmod[i]
                q = (1+mod['depth']*np.sin(x*freq-mod['phase']) )*mod['relint']
                ax.plot(x, q, label=f"Pattern {i}")
                sum += q
            ax.plot(x, sum, label=f'Summed {axisname[axis]} patterns')
            ax.legend()
            ax.set_title(f'{axisname[axis]} modulation')
            ax.set_xlabel('Pixels');ax.set_ylabel('Modulation intensity')
        fig.suptitle('Modulation patterns')
        if filename is not None: fig.savefig(filename)
        if not showPlot: plt.close(fig)
        return fig
        
        
    def set_mod(self, mod):
        self.mod = mod
        
    def plot_ffts(self):
        with Context(debugMode=self.debugMode) as ctx:
            self.spotlist.generate_projections(self.mod, 4,ctx)
            self.spotlist.plot_proj_fft()
        
    def load_mod(self):
        with open(self.mod_fn, "rb") as f:
            self.mod, self.phase_interp = pickle.load(f)
            
    def mod_per_spot(self, framenums):
        """
        Return modulation patterns with spline interpolated phases
        """ 
        mod_ = np.tile(self.mod,len(framenums))
        
        for k in range(len(self.mod)):
            mod_['phase'][k::len(self.mod)] = self.phase_interp[framenums][:,k]
        
        return np.reshape(mod_.view(np.float32), (len(framenums), 6*len(self.mod)))

    def process(self, spotfilter):
        self.load_mod()
                
        with Context(debugMode=self.debugMode) as ctx:
            moderrs = self.spotlist.compute_modulation_error(self.mod, spotfilter)
            self.report(f"RMS moderror: {np.sqrt(np.mean(moderrs**2)):.3f}")
        
            if len(self.pattern_frames)==2: # assume XY modulation
                self.draw_mod()
        
            #self.spotlist.bias_plot2D(self.mod, self.ctx, self.spotfilter, tag='')
        #        spotlist.plot_intensity_variations(mod, minfilter, pattern_frames)
        
            indices = self.spotlist.get_filtered_spots(spotfilter, self.mod)
            print(f"Running simflux fits...")
        
            # g2d_results are the same set of spots used for silm, for fair comparison
            mod_ = self.mod_per_spot(self.sum_results.get_frame_numbers())
            sf_results, g2d_results = self.spotlist.simflux_fit(mod_, ctx, indices)
            sf_results.label = 'SIMFLUX'
            g2d_results.label = 'SMLM'
            
            print(f'sf_results:[{len(sf_results.data)}]')
            print(f'g2d_results:[{len(g2d_results.data)}]')
            
            border = 2.1
            num_removed, filteredidx = sf_results.filter_inroi(border, border, self.roisize-border-1, self.roisize-border-1)
            self.report(f"Removing {num_removed} ({100*num_removed/len(self.IBg)}%) unconverged SIMFLUX fits")
            g2d_results.filter_indices(filteredidx)
            
            self.result_indices = indices[filteredidx]
        
            sf_results.save_picasso_hdf5(self.resultprefix+"simflux.hdf5")
            g2d_results.save_picasso_hdf5(self.resultprefix+"g2d-filtered.hdf5")
                    
            self.sf_results = sf_results
            self.g2d_results = g2d_results

    def link_locs(self):
        with Context(debugMode=self.debugMode) as ctx:
            crlb = self.g2d_results.get_crlb()
            maxdist = 1.5*np.sqrt(np.sum(np.mean(crlb[:,[0,1]],0)**2))
            self.report(f"Linking localizations (max dist: {maxdist:.2f} pixels)...")
            sf_linked = self.sf_results.link_locs(ctx,maxdist)
            g2d_linked = self.g2d_results.link_locs(ctx,maxdist)
            
            sf_linked.save_picasso_hdf5(self.resultprefix+"simflux-linked.hdf5")
            g2d_linked.save_picasso_hdf5(self.resultprefix+"g2d-filtered-linked.hdf5")
                    
        
    def selected_roi_source(self, indices):
        """
        Yields roipos,pixels,idx for the selected ROIs. 
        'indices' indexes into the set of ROIs selected earlier by gaussian_fitting(), stored in roi_indices
        idx is the set of indices in the block, indexing into sum_fit
        """
        roi_idx = self.roi_indices[indices]
        
        mask = np.zeros(self.numrois, dtype=np.bool)
        mask[roi_idx] = True
        
        idx = 0
        
        indexmap = np.zeros(self.numrois,dtype=np.int32)
        indexmap[self.roi_indices[indices]] = indices
                
        for rois_info, pixels in process_movie.load_rois_iterator(self.rois_fn):
            block_mask = mask[idx:idx+len(pixels)] 
            block_roi_indices = indexmap[idx:idx+len(pixels)][block_mask]
            idx += len(pixels)
            
            if np.sum(block_mask) > 0:
                roipos = np.zeros((len(rois_info),3), dtype=np.int32)
                roipos[:,0] = 0
                roipos[:,1] = rois_info['y']
                roipos[:,2] = rois_info['x']
                
                yield roipos[block_mask], pixels[block_mask], block_roi_indices
                
        
    def crlb_map(self, intensity=None, bg=None):
        """
        
        """
        self.load_mod()
        
        if intensity is None:
            intensity = np.median(self.sum_results.get_xyI()[:,2])
            
        if bg is None:
            bg = np.median(self.sum_results.get_bg())

        pitchx = 2*np.pi / np.max(np.abs(self.mod['k'][:,0]))
        pitchy = 2*np.pi / np.max(np.abs(self.mod['k'][:,1]))
                
        W = 100
        xr = np.linspace(self.roisize/2-pitchx/2,self.roisize/2+pitchx/2,W)
        yr = np.linspace(self.roisize/2-pitchy/2,self.roisize/2+pitchy/2,W)
        
        X,Y = np.meshgrid(xr,yr)
        
        coords = np.zeros((W*W,4))
        coords[:,0] = X.flatten()
        coords[:,1] = Y.flatten()
        coords[:,2] = intensity
        coords[:,3] = bg
        
        with Context(debugMode=self.debugMode) as ctx:
            with SIMFLUX(ctx).CreateEstimator_Gauss2D(self.sigma,len(self.mod),self.roisize,len(self.mod)) as psf:
                coords_ = coords*1
                coords_[:,3] /= len(self.mod)
                mod_ = np.repeat([self.mod.view(np.float32)], len(coords), 0)
                sf_crlb = psf.CRLB(coords_, constants=mod_)

            with Gaussian(ctx).CreatePSF_XYIBg(self.roisize, self.sigma, True) as psf:
                g2d_crlb = psf.CRLB(coords)
        
        IFmap = g2d_crlb/sf_crlb
        
        fig,ax = plt.subplots(2,1,sharey=True)
        im = ax[0].imshow(IFmap[:,0].reshape((W,W)))
        ax[0].set_title('Improvement Factor X')

        ax[1].imshow(IFmap[:,1].reshape((W,W)))
        ax[1].set_title('Improvement Factor Y')

        fig.colorbar(im, ax=ax)
        
        IF = np.mean(g2d_crlb/sf_crlb,0)
        print(f"SF CRLB: {np.mean(sf_crlb,0)}")
        
        print(f"Improvement factor X: {IF[0]:.3f}, Y: {IF[1]:.3f}")
        
    def modulation_error(self, spotfilter):
        self.load_mod()
        return self.spotlist.compute_modulation_error(self.mod)
        
    def drift_correct(self, framesperbin=1, drift_fn=None, sigmaMultiplier=1):
        if drift_fn is None:
            from photonpy.smlm.drift_estimate import maxlc

            names = ['SMLM', 'SIMFLUX']
            self.g_drift,self.sf_drift = [
                maxlc(ds.get_xyI(), 
                  ds.get_frame_numbers(),
                  ds.get_crlb(), framesperbin=framesperbin,
                  pixelsize=self.pixelsize, imgshape=self.imgshape, sigmaMultiplier=sigmaMultiplier,
                  dataname= names[i],
                  outputfn= self.resultprefix+names[i]+"-drift.png",
                  debugMode=self.debugMode)
                for i,ds in enumerate([self.sum_results, self.sf_results])
            ]
            header = 'X-full, Y-full, X-set1, Y-set1, X-set2, Y-set2, X-initial, Y-initial'
            np.savetxt(self.resultprefix+"g2d_drift.txt", self.g_drift,header=header)
            np.savetxt(self.resultprefix+"sf_drift.txt", self.sf_drift,header=header)
            
            postfix = f'dc-fbp{framesperbin}'
        else:
            print(f"Applying drift from {drift_fn}")
            self.g_drift = np.loadtxt(drift_fn)
            self.sf_drift=1*self.g_drift
            
            postfix='rcc'
                    
        from photonpy.smlm.picasso_hdf5 import save
        
        self.g_undrifted = self.sum_results.clone()
        self.g_undrifted.data[:, [loc.DataColumns.X, loc.DataColumns.Y]] -= self.g_drift[self.sum_results.get_frame_numbers()]

        self.sf_undrifted = self.sf_results.clone()
        self.sf_undrifted.data[:, [loc.DataColumns.X, loc.DataColumns.Y]] -= self.sf_drift[self.sf_results.get_frame_numbers()]
                
        save(self.resultprefix+f"g2d-{postfix}.hdf5", self.g_undrifted.get_xyIBg(), 
             self.sum_results.get_crlb(),
             self.sum_results.get_frame_numbers(),
             self.sum_results.imgshape, self.sigma[0], self.sigma[1])

        save(self.resultprefix+f"sf-{postfix}.hdf5", self.sf_undrifted.get_xyIBg(), 
             self.sf_results.get_crlb(),
             self.sf_results.get_frame_numbers(),
             self.sf_results.imgshape, self.sigma[0], self.sigma[1])

    def continuous_frc(self,maxdistance, freq=10):
                
        if self.g_undrifted is not None:
            g_data = self.g_undrifted
            sf_data = self.sf_undrifted
            print('Running continuous FRC on drift-corrected data')
        else:
            g_data = self.g2d_results
            sf_data = self.sf_results
        
        #maxdistance = 20 * np.mean(self.sum_results.get_crlb()[:,0])
        
        if np.isscalar(freq):
            freq = np.linspace(0,freq,200)
        sys.stdout.write(f'Computing continuous FRC for gaussian fits...')
        frc_g2d,val_g2d = self._cfrc(maxdistance,g_data.get_xy(),freq)
        print(f"{self.pixelsize/val_g2d:.1f} nm")
        sys.stdout.write(f'Computing continuous FRC for modulation enhanced fits...')
        frc_sf,val_sf = self._cfrc(maxdistance,sf_data.get_xy(),freq)
        print(f"{self.pixelsize/val_sf:.1f} nm")
        
        plt.figure()
        plt.plot(freq, frc_g2d, label=f'2D Gaussian (FRC={self.pixelsize/val_g2d:.1f} nm)')
        plt.plot(freq, frc_sf, label=f'Modulated (FRC={self.pixelsize/val_sf:.1f} nm)')
        plt.xlabel('Spatial Frequency (pixel^-1)')
        plt.ylabel('FRC')
        IF =  val_sf / val_g2d
        plt.title(f'Continuous FRC with localization pairs up to {maxdistance*self.pixelsize:.1f} nm distance. Improvement={IF:.2f}')
        plt.legend()
        plt.savefig(self.resultsdir+"continuous-frc.png")
        print(f"Improvement: {IF}")
        return IF
        
    def _cfrc(self, maxdist,xy,freq):
        with Context(debugMode=self.debugMode) as ctx:
            frc=PostProcessMethods(ctx).ContinuousFRC(xy, maxdist, freq, 0,0)
        
        c = np.where(frc<1/7)[0]
        v = freq[c[0]] if len(c)>0 else freq[0]
        return frc, v
        
    def _load_rois_iterator(self):
        return process_movie.load_rois_iterator(self.rois_fn)
    
    def report(self, msg):
        with open(self.reportfile,"a") as f:
            f.write(msg+"\n")
        print(msg)
        
    
    def __enter__(self):
        return self

    def __exit__(self, *args):
        self.close()



    
def view_napari(mov):
    import napari
    
    with napari.gui_qt():
        napari.view_image(mov)


def set_plot_fonts():
    import matplotlib as mpl
    new_rc_params = {
    #    "font.family": 'Times',
        "font.size": 15,
    #    "font.serif": [],
        "svg.fonttype": 'none'} #to store text as text, not as path
    mpl.rcParams.update(new_rc_params)
