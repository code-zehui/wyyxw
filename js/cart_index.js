$('.cGC_right').click(function () {
    if ($('.bd').hasClass('show')) {
        $('.bd').removeClass('show');
        $(this).children('i').removeClass('active');
    } else {
        $('.bd').addClass('show');
        $(this).children('i').addClass('active');
    }
});
$('.commonTab li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.couponListWrap>div').eq($(this).index()).css('display', 'block').siblings().css('display', 'none')
});
$('.couponListWrap .right').click(function () {
    $('.couponListWrap ul').animate({ left: -238 });
    $('.couponListWrap .left').css('display', 'block');
    $(this).css('display', 'none');
});
$('.couponListWrap .left').click(function () {
    $('.couponListWrap ul').animate({ left: 0 });
    $('.couponListWrap .right').css('display', 'block');
    $(this).css('display', 'none');
});
$('.rightPart a').click(function () {
    $(this).css('display', 'none');
    $('<img src="./img/cart/9d90045175b1a6fd984ef93a73ad2731.png">').appendTo($(this).parent());
    $('.emptyList').remove();
    var subtract = $(this).parent().prev().children('.name').text();
    var time = $(this).parent().prev().children('.validity').text()
    var v = `<div class="mainPart">
                <div class="leftPart fl">
                    <p class="name">${subtract}</p>
                    <p class="validity">${time}</p>
                </div>
            </div>
            <div class="applyTip">
                <span>购物车中的适用商品</span>
                <i></i>
            </div>`
    $('<li class="cartCoupon"></li>').html(v).appendTo($('.couponListWrap>div').eq(1));
});
$('.couponListWrap').on('mouseenter','.applyTip',function () {
    $('<div class="apply"></div>').html('<img src="./img/cart/d75762c186fbc6469a64a4b903cb5aab.png"><img src="./img/cart/4b82f3ca4a8f008b499e80cd11ac0402.png"><i></i>').appendTo($('.couponListWrap').eq(0));
    var l = $(this).offset().left;
    $('.apply').css('left', l);
    var t = $(this).offset().top - $(window).scrollTop() + 20;
    $('.apply').css('top', t);
});
$('.couponListWrap').on('mouseleave','.applyTip',function (){
    $('.apply').remove();
});