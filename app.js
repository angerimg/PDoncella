
$(document).ready(function () {

    //Empieza con las funcionalidades del slide show
    //codigo para calcular la imagen
    var currentImage = 1;
    var totalImages = 3;

    function decreaseImage() {
        /* Decrease currentImage by 1.
        * Resets to totalImages if smaller than 1
        */
        currentImage--;
        if (currentImage == 0) {
           
            currentImage = totalImages;
        }
    }

    //codigo para automatizar el slide
    window.setInterval(function () {
        //$('#previous').click();
        $('#im_' + currentImage).fadeOut("fast", function () {
            decreaseImage();
            $('#im_' + currentImage).fadeIn("fast");
        });
    }, 2500);
});