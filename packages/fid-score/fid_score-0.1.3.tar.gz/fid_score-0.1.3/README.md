### Project Description

    Frechet Inception Distance (FID score)
#

### Install

    pip install fid-score
#

### Requirements

    pytorch >= 1.2.0

    torchvision >= 0.3.0
#

### Usage:
    from fid_score.fid_score import FiDScore
    
    fid = FidScore(paths, device, batch_size)
    
    score = fid.calculate_fid_score()
#

### Arguments
    fid = FidScore(paths, device, batch_size)
    
    paths = ['path of source image dir', 'path of target image dir']
    
    device = torch.device('cuda:0') or default: torch.device('cpu')
    
    batch_size = batch size
#

### References
    1. FID was introduced by Martin Heusel, Hubert Ramsauer, Thomas Unterthiner, Bernhard Nessler and Sepp Hochreiter in 
    "GANs Trained by a Two Time-Scale Update Rule Converge to a Local Nash Equilibrium"

    2. The original implementation is by the Institute of Bioinformatics, JKU Linz, licensed under the Apache License 2.0. 
    See https://github.com/bioinf-jku/TTUR.
#
