#jquery.lazysizebg 1.x

Copyright (c) 2016 Philip Brown Licensed under the MIT license ([http://opensource.org/licenses/mit-license.php](http://opensource.org/licenses/mit-license.php))

jquery.lazysizebg allows the user to specify different size background images for small, medium, and large screens and loaded after the page is loaded.

If you must have hero images on your pages and want to optimize for smaller screens, this is a quick, low profile tool for accomplishing this.

Note:  This isn't coded to work on resizing.  It could, but the idea is to load the image needed for the medium.  If you are testing, resize first before reloading.

##Usage
Include the js file within your page:
```html
<script src="jquery.js"></script>
<script src="jquery.lazysizebg.min.js"></script>
```
Added the 
```html
<div class="lazyloadme"
	data-lzbg-sm="sm-bg-img.jpg"
    data-lzbg-md="md-bg-img.jpg"
    data-lzbg-lg="lg-bg-img.jpg"
></div>
```

Add this JS
```javascript
$('.lazyloadme').lazysizebg();
```

The md-min and lg-min sizes can be changed.
Change Defaults:
```javascript
$.fn.lazysizebg.defaults.mdMin = 768;
$.fn.lazysizebg.defaults.lgMin = 992;
```

Or change for the instance:
```javascript
$('.lazyloadme').lazysizebg({
	mdMin: 768,
    lgMin: 992
});
```

A Default image can be added allowing the user to only change the images needed.
```html
<div class="lazyloadme"
	data-lzbg-sm="sm-bg-img.jpg"
    data-lzbg="img.jpg"
></div>
```
By setting `data-lzbg`, you are adding a default image to be used for md and lg.