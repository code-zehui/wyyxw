//顶部
var shangpinfenlei=document.querySelector('.shangpinfenlei');
var listson=document.querySelector('.listson');
shangpinfenlei.onmouseenter=function(){
    listson.style.display='block';
    listson.className='listson';
    
};
listson.onmouseleave=function(){
    listson.style.display='none';   
};

// banner部分
$('.circle a').mouseenter(function () {
    var num = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.banner li').eq(num).fadeIn().siblings().fadeOut();
});

// 精选热卖
var content = document.querySelector('.hot .hot-content');
var ul = document.querySelector('.hot-content ul');
var index = 0;
var width = content.offsetWidth;

$('.button .button2').click(function() {
    index++;
    $(this).css('cursor','default');
    if(index>2) {
        index =2;
        $(this).css('cursor','not-allowed');
    }
    var v = index * (-width);
    move(ul,v,1000);
    
    
});
$('.button .button1').click(function() {
    $(this).css('cursor','default');
    index--;
    if(index<0) {
        index=0;
        $(this).css('cursor','not-allowed');
    }
    var v = index * (-width);
    move(ul,v,1000);
});

//回到顶部按钮
// 获取员工福利到文档的距离
var v = $('.treasure').offset().top;
$(window).scroll(function() {
    var tab = $(this).scrollTop();
    if(v <=tab) {
        $('.top1').show();
    }else {
        $('.top1').hide();
    }
});
//点击按钮回到顶部
$('.top1').click(function() {
    $('body,html').animate({scrollTop:0},500);
})
