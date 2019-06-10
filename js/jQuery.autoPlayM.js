jQuery.fn.autoPlayM = function () {
    var num = 0;
    var left, timer;
    var ul = this.find('ul');
    var lis = this.find('li');
    var points = this.find('i');
    var right = this.find('.right');
    var left = this.find('.left');
    var width = lis.width();

    function auto() {
        clearTimeout(timer);
        if (num == 0) {
            ul.css({
                marginLeft: 0
            });
        }
        num++;
        left = -width * num;
        ul.stop(true,true).animate({
            marginLeft: left
        }, 300);
        if (num == lis.length - 1) {
            num = 0;
        }
        points.eq(num).addClass('active').siblings().removeClass('active');
    }

    var timers = setInterval(auto, 5000);

    right.click(function() {
        auto();
    })

    left.click(function() {
        if (num == 0) {
            num = lis.length - 1;
            ul.css({
                marginLeft: -width * num 
            });
        }
        num--;
        left = -width * num;
        ul.stop(true,true).animate({
            marginLeft: left
        }, 300);
        points.eq(num).addClass('active').siblings().removeClass('active');

    })
    points.mouseenter(function () {
        var nth = $(this).index();
        num = nth;
        left = -width * num;
        ul.stop(true,true).animate({
            marginLeft: left
        }, 300);
        points.eq(num).addClass('active').siblings().removeClass('active');
    })
    this.mouseenter(function(){
        clearTimeout(timer)
        clearInterval(timers);
    })

    this.mouseleave(function() {
        timer = setTimeout(function() {
            timers = setInterval(auto, 5000)
        }, 300)
    })
}

