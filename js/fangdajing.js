function Big(sel) {
    return document.querySelector(sel);
}
Big('.da').onmouseover = function(){
    Big('.xiaohuang').style.display = "block";
    Big('.youcetu').style.display = 'block'
}
Big('.da').onmouseout = function(){
    Big('.xiaohuang').style.display = "none";
    Big('.youcetu').style.display = 'none';
}
Big('.da').onmousemove = function(e) {
    var x = e.pageX - Big('.zuojpg').offsetLeft-Big('.xiaohuang').offsetWidth/2;
    var y = e.pageY - Big('.zuojpg').offsetTop-Big('.xiaohuang').offsetHeight/2 ;
    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;
    x = x > this.offsetWidth-Big('.xiaohuang').offsetWidth? this.offsetWidth-Big('.xiaohuang').offsetWidth:x;
    y = y > this.offsetHeight-Big('.xiaohuang').offsetHeight? this.offsetHeight-Big('.xiaohuang').offsetHeight:y;
    Big('.xiaohuang').style.left = x + 'px'
    Big('.xiaohuang').style.top = y + 'px'
    Big('.youcetu img').style.transform = 'translate('+ (-2 * x) +'px, '+ (-2*y) +'px)';
}

// 这个怎么啦？