// 获取轮播遮罩
var lunbo = document.querySelector('.waibudezhengzhao')
// 获取整个轮播项
var list = document.querySelector('#list');
// 获取左侧按钮
var btnLeft = document.querySelector('#btnLeft');
// 获取右侧按钮
var btnRight = document.querySelector('#btnRight');
// 获取左侧图片点击显示按钮
var da = document.querySelector('.da');
// 获取X按钮
var clearXX = document.querySelector('#clearXX');
// 获取右侧回到顶部模块
var  cebianhe = document.querySelector('.cebianhe')
// 下标
var  index = 0;

// 给图片注册点击事件
da.onclick = function() {
   lunbo.style.display = 'block';
   cebianhe.style.display = 'none';
   return false;
}
// 给X按钮注册点击事件
clearXX.onclick = function() {
    lunbo.style.display = 'none';
    cebianhe.style.display = 'block';
    return false;
}
// 给设置位置
function weiZhi() {
    var v = index * -600;
    list.style.left = v + 'px';
    return false;
}
// 给右按钮注册点击事件
btnRight.onclick = function() {
    index++;
    if(index>4 ) {
        index =0;
    }
    weiZhi()
    return false;
}
btnLeft.onclick = function() {
    index--
    if(index < 0) {
        index = 4;
    }
    weiZhi();
    return false;

}



