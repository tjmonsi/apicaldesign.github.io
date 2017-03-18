// INSPINIA Landing Page Custom scripts
$(document).ready(function () {

    // Highlight the top nav as scrolling
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    })

    // Page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 70
        }, 500);
        event.preventDefault();
    });



// Activate WOW.js plugin for animation on scrol
//
// // For demo purpose - animation css script
//     function animationHover(element, animation){
//         element = $(element);
//         element.hover(
//             function() {
//                 element.addClass('animated ' + animation);
//             },
//             function(){
//                 //wait for animation to finish before removing classes
//                 window.setTimeout( function(){
//                     element.removeClass('animated ' + animation);
//                 }, 2000);
//             });
//     }
});
