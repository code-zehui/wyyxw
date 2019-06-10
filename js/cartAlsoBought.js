$('.showScene').mouseenter(function () {
    $(this).find('.imgScene').css('z-index', '0').end().css({ background:'#f4f0ea', 'box-shadow': '1px 1px 8px rgba(0,0,0,.2)'});
});
$('.showScene').mouseleave(function () {
    $(this).find('.imgScene').css('z-index', '-9999').end().css({background: '#fff', 'box-shadow':'none'});
});