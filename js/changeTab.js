// 小图 m01.jpg m02.jpg...
// 中图 datu01.1.jpg datu01.2.jpg...
// 大图 datu0101.png datu0202.png
var xiaotu = document.querySelectorAll('#change_xiaotu img');
var zhongtutu = document.querySelector('#change_zhongtu');
var datu = document.querySelector('#change_datu');
xiaotu.forEach(function(item) {
    item.onmouseenter = function() {
        // 用正则表达式从字符串提取文件名
        // var reg = /.+\/m(\d{2}).+$/;
        // var name = reg.exec(this.src);
        // name = name ? name[1] : '01';
        // 利用字符串分割提取文件名
        var name = this.src.split('/').pop().split('.')[0].substring(1); // 02
        zhongtutu.src = '../img/details/xgh' + name + '.png';
        datu.src = '../img/details/datu'+ name + '' + name +'.png';
        index = parseInt(name) - 1;
        weiZhi();
    } 
    return false;
})



var xiaotu22 = document.querySelectorAll('.xiaoxiaotup li img');
// xiaotu.forEach()
// xiaoxiaotup.onclick = function() {
// }
/* <img src="./images/xgh01.png" alt=""></img> */
for(var i = 0; i < xiaotu22.length; i++) {
    xiaotu22[i].className = 'bbbbbb'
    xiaotu22[i].onmouseenter = function() {
        this.className = ''
        if(xiaotu22[i] ==3) {
            return false;
        }
        // split()字符串分割 
        // pop()删除数组中的最后一个元素并返回删除的元素
       var item = this.src.split('/').pop().split('.')[0].substring(2);
       zhongtutu.src = '../img/details/yf' + item + '.png';
       datu.src = '../img/details/big' + item + '.png';
       weiZhi();
       return false;
    }
}


