$(document).ready(function () {
    $('#contact-form').validate({
        rules: {
            name: {
                minlength: 2,
                required: true
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                minlength: 2,
                required: true
            },
            message: {
                minlength: 2,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('success').addClass('error');
        },
        success: function (element) {
            element.text('OK!').addClass('valid').closest('.form-group').removeClass('error').addClass('success');
        },
        submitHandler: function (form) {
            sendPhp();
        }

    });

    var sendPhp = function sendPhp() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $("#contact-form").serialize()
        }).done(function () {
            window.scrollTo(0, 0);
            alert("Спасибо за заявку! Я обязательно в Вами свяжусь в ближайшее время!");
        });
        return false;
    };

    $('.navbar-collapse a').on('click', function (e) {
        $('.navbar-collapse').removeClass('in');
    });
});

//Аякс отправка форм


/*$(window).load(function () {
    /!* preloader*!/
    setTimeout(function () {
        $('body').addClass('loaded')
    }, 1000);
});*/

jQuery(window).load(function() {
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").fadeOut("slow");
});
