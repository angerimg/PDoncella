
$(document).ready(function () {
    //slideshow
    var currentImage = 1;
    var totalImages = 3;
    function decreaseImage() {
        /* Decrease currentImage by 1.
        * Resets to totalImages if smaller than 1*/
        currentImage--;
        if (currentImage == 0) currentImage = totalImages;
    }

    //auto slide
    window.setInterval(function () {
        $('#im_' + currentImage).fadeOut("fast", function () {
            decreaseImage();
            $('#im_' + currentImage).fadeIn("fast");
        });
    }, 2500);
});
