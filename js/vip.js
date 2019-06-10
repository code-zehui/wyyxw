// 
$('.left').click(function(){
    $('.privilege ul').animate({left:0});
    $('.left').css('display','none')
    $('.right').css('display','block');
})
$('.right').click(function(){
    $('.privilege ul').animate({left:-415});
    $('.right').css('display','none');
    $('.left').css('display','block')
})

// logo部分JS
$('.RankMember').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
})
$('.SuperMember').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

// 品牌动态轮播图 
var i = 0;
var num;
$('.trends_left').click(function(){
    i--;
    if(i<=0){
        i=0;
    }
    num = 365 * i;
   $('.trends_bottom ul').animate({left:-num},500)
})

$('.trends_right').click(function(){
    i++;
    var lis = $('.trends_bottom li');
    if(i>=lis.length-3){
        i=lis.length-3;
    }
    num = 365 * i ;
    $('.trends_bottom ul').animate({left:-num},500)
})