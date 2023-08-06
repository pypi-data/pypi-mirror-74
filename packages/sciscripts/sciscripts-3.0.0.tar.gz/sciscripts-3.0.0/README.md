# SciScripts  
Scripts for controlling devices/running experiments/analyzing data  

## Dependencies
1) System:
    - Linux
    - Portaudio
    - sounddevice
    - Open-ephys analysis-tools [at github.com/open-ephys/analysis-tools]
2) Python:
    - numpy
    - scipy
    - pandas
    - matplotlib
    - pyserial
    - rpy
    - h5py
    - asdf

Also, some environment variables are expected to be set. You can add it to `~/.bashrc`, or `~/.profile`, or wherever your desktop environment searches for exported variables:
```bash
export DATAPATH=~/Data
export ANALYSISPATH=~/Analysis
```
changing the path to where you find appropriate.

