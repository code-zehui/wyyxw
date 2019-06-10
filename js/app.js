//回顶部
// var toTop = document.querySelector('.toTop');
// toTop.onclick = function(){
//     document.body.scrollTop = 200 + 'px' ;
//     document.documentElement.scrollTop = 200 + 'px';
// }
$(' .toTop').click(function(){
    // document.body.scrollTop = 0 ;
    // document.documentElement.scrollTop = 0 ;  
    // animate(this,20) ;
    $('html,body').animate({scrollTop:0},800)
})

