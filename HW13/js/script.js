$(function()  {
    let link = $('.m-menu-link');
    let menu = $('.m-menu');
    link.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('m-menu_active');/* Act on the event */
    });

});

$(function()  {
    let link = $('.search-button');
    let close = $('.icon_close');
    let menu = $('.search-field');
    link.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('search-field_active');/* Act on the event */
        link.toggleClass('search-button_active');
    });
    close.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('search-field_active');
        link.toggleClass('search-button_active');
    });
});


$(function()  {
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
            $('.header-menu').addClass('menu-fix');
        }
        else {
            $('.header-menu').removeClass('menu-fix');
        }
    });

});

$(function() {

    $(".percentage-dark").easyPieChart({
        barColor: "#00a99d",
        trackColor: "rgba(250, 250, 250, 1)",
        scaleColor: false,
        lineCap: "round",
        rotate: -90,
        lineWidth: 4,
        size: 140
    });

    $(".percentage-dark").each(function(){
        var v = $(this).find('canvas').attr('width');
        $(this).parent().css('width',v);
        $(this).parent().find('span').css('line-height', v+'px');

    });
});