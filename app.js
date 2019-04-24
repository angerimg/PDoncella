
$(document).ready(function () {

    //Empieza con las funcionalidades del slide show
    //boton anterior
    $('#previous').on('click', function () {
        console.log('::Running');

        // Change to the previous image
        $('#im_' + currentImage).fadeOut("fast", function () {
            decreaseImage();
            $('#im_' + currentImage).fadeIn("fast");
        });


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
    var totalImages = 3;

    function increaseImage() {
        /* Increase currentImage by 1.
        * Resets to 1 if larger than totalImages
        */
        currentImage++;
        if (currentImage == totalImages + 1) {
            currentImage = 1;
        }
    }
    function decreaseImage() {
        /* Decrease currentImage by 1.
        * Resets to totalImages if smaller than 1
        */
        console.log('::Current image', currentImage);
        currentImage--;
        if (currentImage == 0) {
            console.log('::ENTROOO', currentImage);
            currentImage = totalImages;
        }
    }

    //codigo para automatizar el slide
    window.setInterval(function () {
        $('#previous').click();
    }, 2500);
});