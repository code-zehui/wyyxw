/*
  功能：实现盒子移动
  参数：
    box 表示要运动的盒子
    targetValue 目标值
    speed 速度
*/
function move(box, targetValue, speed) {
    // 清除定时器
    clearInterval(box.flag);
    // 开启一个定时器
    box.flag = setInterval(function () {
      // 获取盒子的原有的left的值
      var v = box.offsetLeft;
      // 判断是否到达目标
      if (v == targetValue) {
        // 停止定时器,保证下一次定时器不在执行
        clearInterval(box.flag);
        // 终止后续代码执行
        return;
      }
      // 更新位置
      if (Math.abs(targetValue - v) < speed) {
        box.style.left = targetValue + 'px';
      } else {
        if (v < targetValue) {
          v = v + speed;
        } else {
          v = v - speed;
        }
        // 更新样式
        box.style.left = v + 'px';
      }
  
    }, 10);
  }