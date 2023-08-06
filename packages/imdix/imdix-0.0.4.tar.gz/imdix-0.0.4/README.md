# Imdix : Dynamic image file resizing tool

### This tool automatically resizes the image file according to your needs, Let's say you have an image file of size 2 MB and you need to reduce size to 300 KB, use `imdix`

### Install
```python
pip install --upgrade imdix 
```

### Usage
```bash
usage: dx [-h] --image IMAGE --size SIZE [--output OUTPUT] [--ext EXT]

Dynamic image file resizer

optional arguments:
  -h, --help            show this help message and exit
  --image IMAGE, -i IMAGE
                        Path to image file
  --size SIZE, -s SIZE  Target output size
  --output OUTPUT, -o OUTPUT
                        Output file name
  --ext EXT, -x EXT     Extension of output file
```

### Example
#### Let's reduce this car image
![by https://unsplash.com/@olav_tvedt @ https://unsplash.com/photos/6lSBynPRaAQ](images/car_500.jpg)

<p align="center">
    by <a href="https://unsplash.com/@olav_tvedt">Olav</a> @ <a href="https://unsplash.com/photos/6lSBynPRaAQ">Unsplash</a>
</p>

```bash
dx --image images/car_500.jpg --size 5000 # all output sized must be in KBs
```
Output
```bash
[ERROR] Target size(5000 KB) greater than file size(500 KB)
```
Yes, we're going to reduce a 500 KB file. Let's reduce it to 200 KB
```bash
dx --image image/car_500.jpg --size 200 --output car_200
```
output
```bash
[INFO] Resize complete...
[INFO] Filename: images/car_200.jpg, Size: 200
```
Output file
![output_200KB](images/car_200.jpg)
<p align="center">This image of size 200KB</p>
#### imdix is set to produce images of size: target +/- 2KB

#### You can also specify output filename and extension(although it doesn't make any difference)
