// 获取首页距离文档顶部的位置
var banner = $('.tab').offset().top;
// 获取页面卷曲的位置
$(window).scroll(function(){
    // isTab();
    var v = $(window).scrollTop();
    if(v >= banner-30) {
        $(body).css({paddingTop:100})
        // $('.cebianhe').css({top:60})
        // $('.bannerrrr').slideDown().show()
        // $('.baoguozhe').show()
        $('.nodeSix').show()
        $('.nodeFive').show()
        // $('.yingcang').hide()
        // $('.yingcangle').show();
        // $('.heheda').css({top:50})
        // $('.bannerrrr li a').css({left:20})
         $('.cebianhe').css({top:100})
        //  $('.detailsNav').hide()
         
    } else {
        $(body).css({paddingTop:0})
        // $('.bannerrrr').hide()
        // $('.baoguozhe').hide()
        $('.nodeSix').hide()
        $('.nodeFive').hide()
        // $('.yingcang').show();
        // $('.heheda').css({top:25})
        $('.cebianhe').css({top:220})
        // $('.detailsNav').show()
        
    }
}) 
// 点击回到顶部scrollTop
$('.nodeSix').click(function(){
    $('html,body').animate({scrollTop:0},1000,'linear')
})
