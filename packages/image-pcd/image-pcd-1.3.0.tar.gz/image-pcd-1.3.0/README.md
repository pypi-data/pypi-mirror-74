# prominent-colors-detector
![PyPI - Downloads](https://img.shields.io/pypi/dm/image-pcd) <br/>
A engine which detects prominent colors from the image.

## Install Python Package
```
pip install image-pcd
```

## Usage

```python
from pcd import ImageProminentColor
from sklearn.cluster import KMeans

image_color = ImageProminentColor("<path to image file>")
prominent_colors = image_color.get_prominent_colors(KMeans, 3)
```
The above code-snippet gives you top 3 prominent colors in RGB form sorted in decreasing order of prominence from the image.

```python
image_color.get_image_plot("<Save image file path>")
image_color.get_color_plot("<Save image file path>")
```
The above code-snippet allows you to save the images of plots of the prominent color and image original colors in 3D-space with RGB components as axis.

## Samples (For top-3 Prominent Colors)
| Sample Image | Prominent Colors | Prominent Colors Plot | Image Colors Plot |
| ------------ | ---------------- | -------------------- | ---------------- |
| <kbd>![colorful](https://raw.githubusercontent.com/divy9881/prominent-colors-detector/master/images/colorful.jpg)</kbd> | <kbd>![#215d1d](https://via.placeholder.com/15/215d1d/000000?text=+)</kbd> `#215d1d` <br/> <kbd>![#97244a](https://via.placeholder.com/15/97244a/000000?text=+)</kbd> `#97244a` <br/> <kbd>![#1d8197](https://via.placeholder.com/15/1d8197/000000?text=+)</kbd> `#1d8197` | <kbd>![colorful_color](https://raw.githubusercontent.com/divy9881/prominent-colors-detector/master/images/colorful_color.png)</kbd> | <kbd>![colorful_image](https://raw.githubusercontent.com/divy9881/prominent-colors-detector/master/images/colorful_image.png)</kbd> |
| <kbd>![php](https://raw.githubusercontent.com/divy9881/prominent-colors-detector/master/images/php.png)</kbd> | <kbd>![#7579b0](https://via.placeholder.com/15/7579b0/000000?text=+)</kbd> `#7579b0` <br/> <kbd>![#fdfdfe](https://via.placeholder.com/15/fdfdfe/000000?text=+)</kbd> `#fdfdfe` <br/> <kbd>![#010101](https://via.placeholder.com/15/010101/000000?text=+)</kbd> `#010101` | <kbd>![php_color](https://raw.githubusercontent.com/divy9881/prominent-colors-detector/master/images/php_color.png)</kbd> | <kbd>![php_image](https://raw.githubusercontent.com/divy9881/prominent-colors-detector/master/images/php_image.png)</kbd> |
| <kbd>![nodejs](https://raw.githubusercontent.com/divy9881/prominent-colors-detector/master/images/nodejs.png)</kbd> | <kbd>![#fefefe](https://via.placeholder.com/15/fefefe/000000?text=+)</kbd>`#fefefe` <br/> <kbd>![#323232](https://via.placeholder.com/15/323232/000000?text=+)</kbd> `#323232` <br/> <kbd>![#67a15d](https://via.placeholder.com/15/67a15d/000000?text=+)</kbd> `#67a15d`  | <kbd>![nodejs_color](https://raw.githubusercontent.com/divy9881/prominent-colors-detector/master/images/nodejs_color.png)</kbd> | <kbd>![nodejs_image](https://raw.githubusercontent.com/divy9881/prominent-colors-detector/master/images/nodejs_image.png)</kbd> |