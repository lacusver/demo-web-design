$(".card-btn").click(function () {
    document.getElementById("popup1").style.opacity = 1;
    document.getElementById("popup1").style.visibility = "visible";
});

function closeForm() {
    document.getElementById("popup1").style.opacity = 0;
    document.getElementById("popup1").style.visibility = "hidden";
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
        return false;
    });
});