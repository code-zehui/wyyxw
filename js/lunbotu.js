var btnr = document.querySelector('#btnr')
var btnl = document.querySelector('#btnl')
var fuhezi = document.querySelector('.fuhezide');
var lbt = document.querySelector('.lbt')
var lbts = document.querySelectorAll('.lbt li')
var spans = document.querySelectorAll('.uul span');
var uul = document.querySelector('.uul')
var fink = document.querySelector('.fink')
var  itemsa = 0;
var width = fuhezi.offsetWidth;
// 你的问题是那个ul吧按钮挡住了。以为你没有点到，所以没生效
// 你给ul的父盒子设置宽度的问题，然后overflow溢出的隐藏一下
// 你自己把页面的东西删了...
// 啥意思   我撤销了一下就好了啊！！！
btnr.onclick = function () {
  if (itemsa == 0) {
    lbt.style.left = 0 + 'px';
  }
  spans[itemsa].className = ''
  itemsa++;
  var v = itemsa * -width;
  move(lbt, v, 30)
  if (itemsa == 3) {
    itemsa = 0;
  }
  spans[itemsa].className = 'active'
  return false;
}
btnl.onclick = function () {
  spans[itemsa].className = ''
  itemsa--
  if (itemsa < 0) {
    lbt.style.left = 3 * -width + 'px';
    itemsa = 2;
  }
  var v = itemsa * -width;
  move(lbt, v, 30);
  spans[itemsa].className = 'active';
  return false;
}

for (var i = 0; i < spans.length; i++) {
  spans[i].num = i
}
uul.onclick = function (e) {
  var t = e.target;
  if (t.nodeName == 'SPAN') {
    spans[itemsa].className = ''
    itemsa = t.num;
    var v = itemsa * -width
    move(lbt, v, 30)
    spans[itemsa].className = 'active';
  }
  return false
}
var timer;
hero()
function hero() {
  timer =  window.setInterval(function () {
    if (itemsa == 0) {
      lbt.style.left = 0 + 'px';
    }
    spans[itemsa].className = ''
    itemsa++;
    var v = itemsa * -width;
    move(lbt, v, 30)
    if (itemsa == 3) {
      itemsa = 0;
    }
    spans[itemsa].className = 'active'
    return false;
  }, 2000)
}
fink.onmouseleave = function () {
  hero();
}
fink.onmouseenter = function () {
  clearInterval(timer)
}


