# FWIe
> Enhancing the Fire Weather Index with atmospheric instability information


## Install

`pip install fwie`

## How to use

```python
import numpy as np
import scipy.io as sio
import matplotlib.pyplot as plt
from fwie.fwie import FWIe_calc

CHI = sio.loadmat('data/CHI_ERA5.mat')['CHI'][240]
FWI = sio.loadmat('data/FWI_ERA5.mat')['FWI'][240]
FWIe = FWIe_calc(FWI, CHI)
```

```python
fig, axes = plt.subplots(ncols=2, figsize=(10,5), dpi=150)
axes[0].imshow(FWI, vmin=0, vmax=70, cmap='RdYlGn_r')
axes[1].imshow(FWIe, vmin=0, vmax=70, cmap='RdYlGn_r')
fig.tight_layout()
```


![png](docs/images/output_4_0.png)


```python
fig, axes = plt.subplots(ncols=2, figsize=(10,5), dpi=150)
axes[0].imshow(CHI, vmin=0, vmax=13, cmap='jet')
axes[1].imshow(FWIe-FWI, vmin=-10, vmax=10, cmap='seismic')
fig.tight_layout()
```


![png](docs/images/output_5_0.png)

