$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    $(".move-top").click(function () {
        $("html").animate({
            scrollTop: 0
        }, "slow");
    });


    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 200) {
            $('.move-top').fadeIn();
        } else {
            $('.move-top').fadeOut();
        }
    });

    // Video Play on button Click
    jQuery('._video-sec').on('click', function () {

        jQuery("#yVideo")[0].src += "?rel=0&autoplay=1";
        jQuery('#yVideo').css('opacity', '1');
        jQuery('.play-btn').css('visibility', 'hidden');
        jQuery('._video-title').css('visibility', 'hidden');

    });

    //Dropdown Menu
    $('.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
    });


    window.onscroll = function () {
        scrollFunction()
    };

    var navbar = document.getElementById("header");
    var sticky = navbar.offsetTop;

    function scrollFunction() {
        if (window.pageYOffset >= 40) {
            navbar.classList.add("header-top")
        } else {
            navbar.classList.remove("header-top");
        }
    }

});