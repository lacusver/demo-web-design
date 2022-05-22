// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: 55.753627, lng: 37.621431 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//         position: uluru,
//         map: map,
//     });
// }

/*
Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.multi-car .carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $('.multi-car .carousel-item').eq(i).appendTo('.multi-car.carousel-inner');
            }
            else {
                $('.multi-car .carousel-item').eq(0).appendTo('.multi-car.carousel-inner');
            }
        }
    }
});


$(document).ready(function () {
    var $form = $('form');
    $form.submit(function () {
        $.post($(this).attr('action'), $(this).serialize(), function (response) {
        }, 'json');
        $('#myForm')[0].reset();
        return false;
    });
});

$(document).ready(function () {
    var speed = 1000;

    // check for hash and if div exist... scroll to div
    var hash = window.location.hash;
    if ($(hash).length) scrollToID(hash, speed);

    // scroll to div on nav click
    $('.scroll').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        if ($(id).length) scrollToID(id, speed);
    });
})

function scrollToID(id, speed) {
    var offSet = 70;
    var obj = $(id).offset();
    var targetOffset = obj.top - offSet;
    $('html,body').animate({ scrollTop: targetOffset }, speed);
}

