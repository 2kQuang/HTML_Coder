$(document).ready(function () {
    $(function () {
        $('.slideshow').owlCarousel({
            items: 1,
            loop:true,
            autoplay: true,
            smartspeed: "800",
            autoplayspeed: "800",
            autoplaytimeout: "5000",
            navText: ['<img src="./assets/images/pre.png">','<img src="./assets/images/next.png">'],
            nav: true,
            dots: true,
            touchDrag: true,
            mouseDrag: true,
            dotsData: true,
            navContainer: '.control-slideshow_nav',
            dotsContainer: '.control-slideshow_dots',
            animateOut: 'animate__fade'
        });
        $('.owl-brand').owlCarousel({
            items: 6,
            margin:30,
            loop:false,
            autoplay: true,
            smartspeed: "800",
            autoplayspeed: "800",
            autoplaytimeout: "5000",
            nav: false,
            dots: false,
            touchDrag: true,
            mouseDrag: true,
            dotsData: true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:3,
                },
                600:{
                    items:4,
                },
                860:{
                    items:5,
                },
                1024:{
                    items:5,
                },
            }
        });
    });
    $('.slideshow-name').textillate({
        in:{
            effect: 'animate__bounceIn'
        },
        out: {
            effect: 'animate__bounceOut'
        },
        loop: true
    });
    $('.slideshow-desc').textillate({
        in:{
            effect: 'animate__fadeInLeft'
        },
        out: {
            effect: 'animate__fadeInRight'
        },
        loop: true
    });
});