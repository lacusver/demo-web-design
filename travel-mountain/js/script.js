$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
$(document).ready(function () {
    var scrollink = $('.scroll');

    scrollink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

});

$(".card-back-btn").click(function () {
    document.getElementById("popup1").style.opacity = 1;
    document.getElementById("popup1").style.visibility = "visible";
});

function closeForm() {
    document.getElementById("popup1").style.opacity = 0;
    document.getElementById("popup1").style.visibility = "hidden";
}
function addBG() {
    if (document.getElementById('mainNavbar').style.background == 'rgb(255, 255, 255)') {
        document.getElementById('mainNavbar').style.background = 'none';

    } else {
        document.getElementById('mainNavbar').style.background = 'rgb(255, 255, 255)';
    }
}
$(document).mouseup(function (e) {

    if (e.target.id == 'popup1') {
        document.getElementById("popup1").style.opacity = 0;
        document.getElementById("popup1").style.visibility = "hidden";
    }
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

$(document).ready(function () {
    var $form = $('form');
    $form.submit(function () {
        $.post($(this).attr('action'), $(this).serialize(), function (response) {
        }, 'json');
        $('#myForm')[0].reset();
        $('#myForm2')[0].reset();
        return false;
    });
});