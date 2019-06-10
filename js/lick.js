$('.lickLeft').click(function () {
    $('.lick ul').stop().animate({ left: 0 }, 500, 'linear');
    $('.lickRight').removeClass('lickRight-end').prev().addClass('lickLeft-end');
});
$('.lickRight').click(function () {
    $('.lick ul').stop().animate({ left: -$('.lick ul').width() / 2 }, 500, 'linear');
    $('.lickLeft').removeClass('lickLeft-end').next().addClass('lickRight-end');
});
