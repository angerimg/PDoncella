
$(document).ready(function () {

    //Empieza con las funcionalidades del slide show
    //boton anterior
    $('#previous').on('click', function () {
        // Change to the previous image
        $('#im_' + currentImage).stop().fadeOut(1);
        decreaseImage();
        $('#im_' + currentImage).stop().fadeIn(1);
    });
    //boton siguiente 
    $('#next').on('click', function () {
        // Change to the next image
        $('#im_' + currentImage).stop().fadeOut(1);
        increaseImage();
        $('#im_' + currentImage).stop().fadeIn(1);
    });

    //codigo para calcular la imagen
    var currentImage = 1;
    var totalImages = 4;

    function increaseImage() {
        /* Increase currentImage by 1.
        * Resets to 1 if larger than totalImages
        */
        ++currentImage;
        if (currentImage > totalImages) {
            currentImage = 1;
        }
    }
    function decreaseImage() {
        /* Decrease currentImage by 1.
        * Resets to totalImages if smaller than 1
        */
        --currentImage;
        if (currentImage < 1) {
            currentImage = totalImages;
        }
    }

    //codigo para automatizar el slide
    window.setInterval(function() {
        $('#previous').click();
      }, 2500);
});