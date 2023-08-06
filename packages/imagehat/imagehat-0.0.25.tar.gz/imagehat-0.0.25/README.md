![PyPI - Status](https://img.shields.io/pypi/status/imagehat)
![PyPI - License](https://img.shields.io/pypi/l/imagehat)
![PyPI - Python Versions](https://img.shields.io/pypi/pyversions/imagehat)
![PyPI - Version](https://img.shields.io/pypi/v/imagehat)
![PyPI - Downloads](https://img.shields.io/pypi/dm/imagehat)

# Image HAT

![Image-HAT 3D](https://raw.githubusercontent.com/waschhauser/image-hat/master/images/image-hat.png)

## Installation

### Install dependencies
The python3-smbus package
```bash
$ sudo apt install python3-smbus
```

### Install using pip
```bash
$ sudo pip3 install -U imagehat
```

## Listing attributes and methods

```python
#!/usr/bin/env python3
from imagehat import ImageHat

hat = ImageHat(0x20) # 0x20 is the I2C bus address

hat.host             # get selected host
hat.host = 0         # unplug USB device
hat.host = 1         # assign USB device to host 1
hat.host = 2         # assign USB device to host 2

hat.host2_power      # get power state of host 2

hat.ext_in           # get state of external input

hat.ext_out          # get state of external output
hat.ext_out = 0      # turn off external output
hat.ext_out = 1      # turn on external output
```
