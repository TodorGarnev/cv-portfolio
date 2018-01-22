/*global jQuery, location*/

(function ($) {
    "use strict"; // Start of use strict
    console.log("resume.js is loaded")

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#sideNav'
    });

    /****** MY JAVASCRIPT ******/

    const loadPartial = _partialName => {
        $("#" + _partialName).load("templates/_" + _partialName + ".html", () => console.log(_partialName, "is loaded!"))
    }


    loadPartial("experience")
    loadPartial("education")
    loadPartial("skills")

    $("#about").load("templates/_about.html", () => {
        console.log("about is loaded!")
        $('head').append('<script src="js/modals.js"></script>')
    })

    $("#games").load("templates/_games.html", () => {
        console.log("games is loaded!")
        $('head').append('<script src="js/games.js"></script>')
    })


})(jQuery) // End of use strict
