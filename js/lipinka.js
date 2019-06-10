var shangpinfenlei=document.querySelector('.shangpinfenlei')
var listson=document.querySelector('.listson')
shangpinfenlei.onmouseenter=function(){
    listson.style.display='block';
    listson.className='listson';
    // alert('hh');
};
listson.onmouseleave=function(){
    listson.style.display='none';
   
    
};

window.onscoll=function(){
    if(this.scollTop()>shangpinfenlei.offsetTop()){
        shangpinfenlei.style.position=fixed; 
    }
}
//回到顶部按钮
// 获取员工福利到文档的距离
// var v = $('.treasure').offset().top;
// $(window).scroll(function() {
//     var tab = $(this).scrollTop();
//     if(v <=tab) {
//         $('.top1').show();
//     }else {
//         $('.top1').hide();
//     }
// });
// //点击按钮回到顶部
// $('.top1').click(function() {
//     $('body,html').animate({scrollTop:0},500);
// })
