
# mkwcs

*mkwcs* is a short and simple library I did to obtain astrometric solution for fits images. For the fits images (single HDU) it is assumed the East is at left and North is up, but there could be some arbitrary rotation on this configuration.

To install *mkwcs* is as simple as:
```
sudo pip install mkwcs
```

The library brings some scripts ready to use. For example, if you have an image, with the standard configuration (East left, North up) but with North direction rotated $\alpha$ counter-clockwise in the image, where you know that $0< \alpha < 20$, then you run:

```
mkwcs_with_angle_range  image.fits  0.5  120.354  -35.847  0 20 0.1
```
where, after the image name, the 3 next parameters are the pixel size, and coordinates of the image center (just approximately, in degrees), then the angle range ends and a $\delta \alpha$ increment to sample the range.

If the arbitrary rotation is known (let's say 12.1 degrees), you just run the other script:
```
mkwcs_with_angle  image.fits  0.5  120.354  -35.847  12.1 
```

If the field is poor in stars you can increase the limit magnitude (19 by default) for the catalog search cut, adding an extra parameter:

```
mkwcs_with_angle  image.fits  0.5  120.354  -35.847  12.1 20
```


There are other functionalities that can be used too. The scripts are:
*mkwcs_with_angle, mkwcs_with_angle_range* and *get_angle*;  and they self explain when run without arguments. Other functionalities can be obtained from the library as well.

Hope it is useful!
