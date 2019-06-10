jQuery.fn.countDown = function () {
    var t1 = new Date();
    t1.setHours(18);
    t1.setMinutes(00);
    t1.setSeconds(00);
    var t2 = t1.getTime()
    var that = this;
    function fn() {
        var tt = new Date().getTime();
        var ts = (t2 - tt) < 0 ? (t2 - tt) + 86400000 : (t2 - tt);

        var sec = parseInt(ts / 1000 % 60);
        var mit = parseInt(ts / 1000 / 60 % 60)
        var hou = parseInt(ts / 1000 / 60 / 60 % 60);
        sec = sec < 10 ? "0" + sec : sec;
        mit = mit < 10 ? "0" + mit : mit;
        hou = hou < 10 ? "0" + hou : hou;

        $(that).find(".h").text(hou);
        $(that).find(".m").text(mit);
        $(that).find(".s").text(sec);
    }
    fn();
    setInterval(fn , 1000)
}
