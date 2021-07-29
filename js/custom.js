(function ($) {
    "use strict"

    //data bg image sec
    $("[data-bg-img]").each(function () {
        var bg = $(this).data("bg-img");
        $(this).css({
            "background": "no-repeat center/cover url(" + bg + ")",
        })
    })

    $("[data-bg-color]").each(function () {
        var bg_color = $(this).data("bg-color");
        $(this).css({
            "background-color": (bg_color)
        })
    })


    //top scroll
    var cre_top_scroll = $('.top-scroll');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            cre_top_scroll.addClass('show');
        } else {
            top-scroll.removeClass('show');
        }
    });
    cre_top_scroll.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

}(jQuery));