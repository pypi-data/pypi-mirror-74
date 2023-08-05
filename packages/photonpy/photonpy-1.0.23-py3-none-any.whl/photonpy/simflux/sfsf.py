
import numpy as np
import matplotlib.pyplot as plt
import photonpy.utils.localizations as loc
import pickle
from photonpy.cpp.context import Context
import time
import tqdm
from photonpy.cpp.estim_queue import EstimQueue
from photonpy.cpp.gaussian import Gaussian
import photonpy.cpp.spotdetect as spotdetect
from photonpy.cpp.simflux import SIMFLUX, SFSFEstimator

import photonpy.utils.multipart_tiff as read_tiff
import photonpy.smlm.process_movie as process_movie

from .simflux import SimfluxProcessor, equal_cache_cfg, save_cache_cfg


class SFSFProcessor (SimfluxProcessor):
    def __init__(self, src_fn, cfg):
        super().__init__(src_fn, cfg)
        
    def sfsf_create_estimator(self, useModulation, ctx) -> SFSFEstimator:
        psf = Gaussian(ctx).CreatePSF_XYIBg(self.roisize, self.sigma, True)
        sfe = SIMFLUX(ctx).CreateSFSFEstimator(psf, self.offsets, 
                                                    simfluxMode=useModulation)
        return sfe

    def sfsf_template_image(self,ctx):
        with self.sfsf_create_estimator(False,ctx) as sfe:
            p = sfe.ExpandIntensities([[self.roisize/2,self.roisize/2,1,0]])
            ev = sfe.ExpectedValue(p)
            return ev[0]

    def sfsf_view_rois(self, maxspots=1000):
        ri, pixels = process_movie.load_rois(self.rois_fn)
        
        n = min(maxspots, len(self.roi_indices))
        px = pixels[self.roi_indices[:n]]
            
        with Context(debugMode=self.debugMode) as ctx:
            with self.sfsf_create_estimator(useModulation=False,ctx=ctx) as sfe:
                ev = sfe.ExpectedValue(self.sfsf_qr.estim[self.roi_indices[:n]])

        import napari
        with napari.gui_qt():
            napari.view_image( np.concatenate([px, ev],-1))
            
        return px, ev
    
    def process(self, spotfilter, chisq_threshold):
        idx = 0
        last_done = 0
        
        self.load_mod()

        sel_indices = self.spotlist.get_filtered_spots(spotfilter, self.mod)

        print(flush=True)        
        with Context(debugMode=self.debugMode) as ctx:
            with self.sfsf_create_estimator(True,ctx) as sfe, tqdm.tqdm(total=len(sel_indices))  as pb:
                #sfe.SetLevMarParams(lambda_=-1, iterations=30)
                
                with EstimQueue(sfe, batchSize=1024, numStreams=3, 
                                maxQueueLenInBatches=5, keepSamples=False) as q:
                    
                    #all = np.arange(len(self.roi_indices))
                    for roipos, pixels, block_indices  in self.selected_roi_source(sel_indices):
                        #initial = self.sum_fit[block_indices]
        
                        initial = np.zeros((len(pixels),4))
                        initial[:,:2] = self.roisize/2
                        initial[:,2] = pixels.sum((1,2))
                        initial[:,3] = 0
                        
                        roi_mod = self.mod_per_spot(self.sum_results.get_frame_numbers()[block_indices])
                        #roi_mod = np.repeat([self.mod.view(np.float32)],len(pixels),0)
                        
                        q.Schedule(pixels, 
                                   ids=np.arange(len(pixels))+idx,
                                   initial=initial,
                                   constants=roi_mod,
                                   roipos=roipos[:,[1,2]])
                        idx += len(pixels)
                        
                        new_done = q.GetResultCount()
                        pb.update(new_done-last_done)
                        last_done = new_done
        
                    q.Flush()
                    while True:
                        new_done = q.GetResultCount()
                        pb.update(new_done-last_done)
                        last_done = new_done
                        
                        if last_done == len(sel_indices):
                            break
                        time.sleep(0.1)
                        
                    qr = q.GetResults()
                    qr.SortByID()

        area = [0,0,self.imgshape[1],self.imgshape[0]]

        self.sf_results = loc.from_estim(self.cfg, area, self.src_fn, 
                                 qr.estim, qr.CRLB(), qr.roipos, self.framenum[sel_indices])
        
        #self.sf_results = loc.from_psf_queue_results(qr, self.cfg, area, self.src_fn)
        fn = self.resultprefix+'sfsf_fits.hdf5'
        self.sf_results.save_picasso_hdf5(fn)

        threshold = self.roisize**2 * chisq_threshold
        ok_indices = np.where(qr.chisq<threshold)[0]
        self.sf_results.filter_indices(ok_indices)
        

    def detect_rois(self, offsets, ignore_cache=False, roi_batch_size=20000,numStreams=3,chisq_threshold=4):
        self.chisq_threshold = chisq_threshold
        
        if type(offsets) == str:
            with open(offsets, "rb") as f:
                _,self.offsets = pickle.load(f)
        else:
            self.offsets = offsets
                        
        # create a template to detect with
        self.cfg['dmpatOffsets'] = self.offsets
        
        bgimg = np.zeros(self.imgshape)
        
        with Context(debugMode=self.debugMode) as ctx:
            templateImage = self.sfsf_template_image(ctx)
            
            plt.figure()
            plt.imshow(templateImage)
            plt.title('Template image used for spot detection')
    
            sd = spotdetect.PSFCorrelationSpotDetector([templateImage], bgimg, self.threshold,
                                                       maxFilterSizeXY=self.cfg['sdXYFilterSize'],
                                                       bgFilterSize=self.cfg['sdBackgroundSigma'])
    
            if not equal_cache_cfg(self.rois_fn, self.cfg) or ignore_cache:
                process_movie.detect_spots(self.imgshape, sd, self._camera_calib(ctx), 
                                   read_tiff.tiff_read_file(self.src_fn, self.cfg['startframe'], self.maxframes), 
                                   1, self.rois_fn, batch_size = roi_batch_size, ctx=ctx)
                save_cache_cfg(self.rois_fn, self.cfg)
    
            self.numrois = sum([len(ri) for ri,px in self._load_rois_iterator()])
            print(f"Num ROIs: {self.numrois}", flush=True)
            
            rois_info = []
    
            idx = 0
            last_done = 0
            with self.sfsf_create_estimator(False,ctx) as sfe, tqdm.tqdm(total=self.numrois)  as pb:
                #sfe.SetLevMarParams(lambda_=-1, iterations=30)
                
                with EstimQueue(sfe, batchSize=1024, numStreams=numStreams, 
                                maxQueueLenInBatches=5, keepSamples=False) as q:
                    
                    for ri, pixels in self._load_rois_iterator():
                        initial = np.zeros((len(ri),4))
                        initial[:,:2] = self.roisize/2
                        initial[:,2] = pixels.sum((1,2))
                        initial[:,3] = 0
                        
                        sfe_initial = sfe.ExpandIntensities(initial)
                        
                        q.Schedule(pixels, ids=np.arange(len(ri))+idx,initial=sfe_initial)
                        idx += len(pixels)
                        
                        new_done = q.GetResultCount()
                        pb.update(new_done-last_done)
                        last_done = new_done
                        rois_info.append(ri)
    
                    q.Flush()
                    while True:
                        new_done = q.GetResultCount()
                        pb.update(new_done-last_done)
                        last_done = new_done
                        
                        if last_done == self.numrois:
                            break
                        time.sleep(0.1)
                        
                    qr = q.GetResults()
                    qr.SortByID()
                    
                    estim_crlb, IBg_crlb = sfe.SeparateIntensities(qr.CRLB())
                    estim, IBg = sfe.SeparateIntensities(qr.estim)
                    rois_info = np.concatenate(rois_info)
                
        self.sfsf_qr = qr
        self._store_IBg_fits(estim, np.concatenate([IBg,IBg_crlb],-1), qr.chisq, estim_crlb, rois_info)
