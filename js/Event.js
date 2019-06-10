//滚到位置  显示侧边栏
var _top = $('.Event_Konten2').offset().top;
$(window).scroll(function(){
    var v = $(window).scrollTop();
    if (v >= _top) {
        $('.right_tab').show();
    }else{
        $('.right_tab').hide();
    }

});

$('.right_tab li').click(function(){
    var num = $(this).index();
    var v = $('.event').eq(num).offset().top;
  $('html,body').animate({ scrollTop: v });
});


// 滚到位置 显示回到顶部
var _top = $('.Event_Konten2-1').offset().top;
$(window).scroll(function(){
    var v = $(window).scrollTop();
    if (v >= _top) {
        $('.fixedtool .to_top').show();
    }else{
        $('.fixedtool .to_top').hide();
    }

});



// 侧边导航栏
$('.top').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 800)
})

//回到顶部
$('.to_top').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 800)
})