$(document).ready(function () {
    // Super Slide
    $('#slides').superslides({
        animation: 'fade',
        play : 3000,
        pagination : false,
    });
    // Typed Js Plugin
    var typed = new Typed('.typed', {
        // Waits 1000ms after typing "First"
        strings: ['Web Development', 'Graphics Design','Digital Marketing'],
        smartBackspace: true,
        typeSpeed: 50,
        startDelay: 1000,
        loop : true,
        showCursor: false,
    });
    // Owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    // Easy Pie Chart
    $('.chart').easyPieChart({
        easing : 'easeInOut',
        barColor : '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size    : 152,
        onStep(from, to, percent){
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});