$('.banner').autoPlay();
$('.np_body').autoPlayM();
$('.ws_auto').autoPlay();
$('.auto1').autoPlay();
$('.auto2').autoPlay();
$('.auto3').autoPlay();
$('.auto4').autoPlay();
$('.auto5').autoPlay();
$('.auto6').autoPlay();
$('.auto7').autoPlay();
$('.auto8').autoPlay();
$(".time").countDown();


// 图片转换效果
var src;
$('.img_change').parent().mouseenter(function () {
    var img = $(this).children('.img_change').children('img');
    src = img.attr('src');
    var n = src.lastIndexOf('.') + 1;
    var h_src = src.slice(0, n) + 'jpg';
    img.attr({
        src: h_src
    });
    $(this).css({
        background: '#f4f0ea',
        boxShadow: '1px 1px 8px rgba(0,0,0,.2)'
    })
    $(this).find('.act').hide();
})
$('.img_change').parent().mouseleave(function () {
    $(this).children('.img_change').children('img').attr({
        src: src
    });
    $(this).css({
        background: '#fff',
        boxShadow: 'none'
    })
    $(this).find('.act').show();
})

//人气推荐切换
$('span .tab_t').click(function () {
    var num = $(this).parent().index() - 1;
    console.log(num);
    $(this).addClass('active').parent().siblings().children().removeClass('active');
    $('.rec_body .tab_b').eq(num).show().siblings().hide();
})
//大家都在说轮播
    var nn = 0;
    var left, timer;
    var width = $('.every li').width() + 12;
    var ul = $('.every ul');
    var lis =  $('.every li');
    var right = $('.every .right');
    var left = $('.every .left');

    function auto() {
        clearTimeout(timer);
        if (nn == 0) {
            ul.css({
                marginLeft: 0
            });
        }
        nn++;
        left = -width * nn;
        ul.stop(true, true).animate({
            marginLeft: left
        }, 500);
        if (nn == lis.length - 3) {
            nn = 0;
        }
    }

    var timers = setInterval(auto, 3000);

    right.click(function () {
        auto();
    })

    left.click(function () {
        if (nn == 0) {
            nn = lis.length-3;
            ul.css({
                marginLeft: -width * nn
            });
        }
        nn--;
        left = -width * nn;
        ul.stop(true, true).animate({
            marginLeft: left
        }, 300);

    })
    $('.every .w').mouseenter(function () {
        clearTimeout(timer)
        clearInterval(timers);
    })

    $('.every .w').mouseleave(function () {
        timer = setTimeout(function () {
            timers = setInterval(auto, 3000)
        }, 500)
    })

    // 滚动条事件
    isTab();
    function isTabShow() {
        if(window.scrollY >= 576) {
            $('.left_tab').css({position: 'fixed',top: 50})
            $('.right_tab').css({position: 'fixed',top: 50})
            $('.to_top').css({display:'block',borderTop: "1px solid #ddd"});
        }else if(window.scrollY < 576) {
            $('.left_tab').css({position: 'absolute',top: 650})
            $('.right_tab').css({position: 'absolute',top: 650})
            $('.to_top').css('display','none');
            
        }  
    }
    isTabShow();

    function isTab() {
        if(window.scrollY > 128) {
            $('.s_hide').hide();
            $('.s_show').show();
            $(".tab .tabItem").css({padding :"0 18px"})
            $('.tab').css({ marginTop: 10})
            $('.tab').parent().siblings().hide();
            $('.tab').parent().parent().css({position: 'fixed',top: 0, zIndex: 999,background: "#fff", borderBottom: "1px solid #ddd",width:"100%"})
        }else if(window.scrollY <= 128) {
            $(".tab .tabItem").css({padding :"0 24px"}).first().css({paddingLeft :0});
            $('.s_hide').show();
            $('.s_show').hide();
            $('.tab').css({ marginTop: 27})
            $('.tab').parent().siblings().show();
            $('.tab').parent().parent().css({position: 'static',top: 0, zIndex: 999,background: "#fff", borderBottom: "1px solid #ddd",width:"100%"})
        }
    }

    $(window).scroll(function(){
        isTabShow();
        isTab();
        items();
    })

    //返回顶部
    $('.to_top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 800)
    })

    //电梯导航
    var t = $(".products")[0].offsetTop - 244;
    var w = $('.pros').outerHeight() + 60;
    var ns, tt;

    $(".left_tab").find("dd").click(function(){
        ns = $(this).index() - 2;
        $(this).find("span").css({color:"#bb3343",fontWeight:700});
        $(this).siblings().find("span").css({color:"#333",fontWeight:400});
        tt = t + w * ns;
        $('html,body').animate({
            scrollTop: tt
        }, 800)
    })
    
    $(".left_tab").find("dd").mouseenter(function(){
        $(this).find("span").css({color:"#bb3343",fontWeight:700});
        $(this).siblings().find("span").css({color:"#333",fontWeight:400});
    })
    $(".left_tab").find("dd").mouseleave(function(){
        $(".left_tab dd").find("span").css({color:"#333",fontWeight:400});
        $(".left_tab dd").eq(ns).find("span").css({color:"#bb3343",fontWeight:700});
    })


    function items() {
        var ws = window.scrollY;
        ns = parseInt( (ws - t) / w) + 1;
        if(ws >= t) {
            $(".left_tab dd").find("span").css({color:"#333",fontWeight:400});
            $(".left_tab dd").eq(ns).find("span").css({color:"#bb3343",fontWeight:700});
        }
        else if(ws < t) {
            $(".left_tab dd").find("span").css({color:"#333",fontWeight:400});
            $(".left_tab dd").eq(0).find("span").css({color:"#bb3343",fontWeight:700});
        }
    }
    items();




