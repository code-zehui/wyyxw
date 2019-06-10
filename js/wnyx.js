// 轮播图
// 获取元素
// 代表整个轮播模块的可视区域模块
var bannerCenter = document.querySelector('#bannerCenter');
// 代表所有轮播项模块的容器
var content = document.querySelector('.content');
// 右侧按钮
var btnRight = document.querySelector('.btn-right');
// 左侧按钮
var btnLeft = document.querySelector('.btn-left');
// 一组小点点按钮
var lis = document.querySelectorAll('.controls li');
// 获取代表一组小点按钮的父元素
var controls = document.querySelector('.controls');
// 定义一个变量，表示索引，表示当前显示的是哪一项轮播图，默认从0开始
var index = 0;
// 获取可视区域宽度
var width = bannerCenter.offsetWidth;
// 功能1：点击右侧按钮实现下一项轮播
// 1. 给btnRight注册onclick
btnRight.onclick = function () {
  // 判断索引是否是0
  if (index == 0) {
    content.style.left = 0 + 'px';
  }
  // 把当前的对应的小点恢复默认样式
  lis[index].className = '';
  // 2. 更改索引
  index++;
  // 限制
  // 3. 计算目标值
  var v = index * -width;
  // 4. 把目标值设置给content的left-调用动画
  move(content, v, 50);
  // 判断
  if (index == 6) {
    index = 0;
  }
  // 5. 让对应的小点突出展示
  lis[index].className = 'active';
  // 此时这里可能会报错，因为索引没有限制，索引可能会越界
};

// 功能2：点击左侧按钮实现上一项轮播
// 1. 给btnLeft注册onclick
btnLeft.onclick = function () {
  // 更改索引更新之前的小点
  lis[index].className = '';
  // 2. 更新index
  index--;
  // 判断是否小于0，若小于0，说明要切换的索引为3的轮播项，先跳到补加的最后一项（和第一项长的一样），再运动到第3项
  if (index < 0) {
    content.style.left = 6 * -width + 'px';
    index = 5;
  }
  // 3. 计算目标值
  var v = index * -width;
  // 4. 调用动画，更改content元素的位置
  move(content, v, 50);
  lis[index].className = 'active';
};

// 功能3：点击小点实现轮播
// 1. 给小点分配编号
for (var i = 0; i < lis.length; i++) {
  lis[i].num = i;
}
// 2. 给ul注册事件，实现委托
controls.onclick = function (e) { 
  // 3. 获取最先触发的元素
  var t = e.target;
  // 4. 检测是否是li
  if (t.nodeName == 'LI') {
    // 更新索引之前的小点恢复默认
    lis[index].className = '';
    // 更新索引
    index = t.num;
    // 计算目标值
    var v = index * -width;
    // 调用动画更改content的left
    move(content, v, 50);
    // 更新之后的小点突出展示
    lis[index].className = 'active';
  }
};
// 功能4：自动轮播
var timer;
function autoPlay() {
    timer = setInterval(function () {
        btnRight.onclick();
    }, 2000)
}
autoPlay();
// 功能5：鼠标进入轮播区，停止自动轮播
bannerCenter.onmouseenter = function () {
    clearInterval(timer);
};

// 功能6：鼠标离开轮播区，重新启动自动轮播
bannerCenter.onmouseleave = function () {
    autoPlay();
};


// tab切换
$('.space_tab li').mouseenter(function(){
  $(this).addClass('active').siblings().removeClass('active');
  var num = $(this).index();
  $('.space_content_item').eq(num).css('display','block').siblings().css('display','none');
})

//回到顶部
var _top = $('.slider').offset().top;
$(window).scroll(function(){
  var v = $(window).scrollTop();
  if (v >= _top) {
    $('.back').show();
    $('.fixed-nav').css({ top: 60 });
    $('.nav').addClass('active');
  } else {
    // 隐藏回到顶部
    $('.back').hide();
    $('.fixed-nav').css({ top: 0 });
    $('.nav').removeClass('active');
  }
});
$('.back').click(function () {
  // 若不加动画时，可以使用$(window).scrollTop(数字)直接设置
  $(window).scrollTop(0);
});
// 严选空间
$('.space_content_photo').mouseenter(function(){
  $('.box').show();
});
$('.space_content_photo').mouseleave(function () {
  $('.box').hide();
});