
jQuery.fn.autoPlay = function () {
    var num = 0;
    var timer;
    var lis = this.find('li');
    var points = this.find('i');
    var right = this.find('.right');
    var left = this.find('.left');

    function auto() {
        num += 1;
        num = num == lis.length ? 0 : num;
        lis.eq(num).fadeIn(300).siblings().fadeOut(300);
        points.eq(num).addClass('active').siblings().removeClass('active');
    }

    var timers = setInterval(auto, 2000);

    right.click(function () {
        clearTimeout(timer);
        auto();
    })

    left.click(function () {
        num -= 1;
        num = num == -1 ? lis.length - 1 : num;
        lis.eq(num).stop(true, true).fadeIn(300).siblings().stop(true, true).fadeOut(300);
        points.eq(num).addClass('active').siblings().removeClass('active');

    })
    points.mouseenter(function () {
        var nth = $(this).index();
        num = nth;
        lis.eq(num).stop(true, true).fadeIn(300).siblings().stop(true, true).fadeOut(300);
        points.eq(num).addClass('active').siblings().removeClass('active');
    })
    this.mouseenter(function () {
        clearTimeout(timer)
        clearInterval(timers);
    })

    this.mouseleave(function () {
        timer = setTimeout(function () {
            timers = setInterval(auto, 2000)
        }, 300)
    })
}