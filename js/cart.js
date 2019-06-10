// 全选按钮
$('.cart .tt input').click(function () {
    if ($(this).prop('checked')) {
        $('.cart .cart-item .item_1 input').prop('checked', true);
        $('.cart-total .chkBox input ').prop('checked', true);
    } else {
        $('.cart .cart-item .item_1 input').prop('checked', false);
        $('.cart-total .chkBox input ').prop('checked', false);
    }
    $('.cart-total .chkBox .quantity').text($('.cart .cart-item .item_1 input:checked').length);
    ManZhe();
    XiaDan();
    getToalPrice();
});
// 单个商品选中按钮
$('.cart .cart-item .item_1 input').click(function () {
    if ($('.cart .cart-item .item_1 input:checked').length == $('.cart .cart-item .item_1 input').length) {
        $('.cart .tt input').prop('checked', true);
        $('.cart-total .chkBox input ').prop('checked', true);

    } else {
        $('.cart .tt input').prop('checked', false);
        $('.cart-total .chkBox input ').prop('checked', false);
    }
    $('.cart-total .chkBox .quantity').text($('.cart .cart-item .item_1 input:checked').length);
    ManZhe();
    XiaDan();
    getToalPrice();
});
// 已选按钮
$('.cart-total .chkBox input ').click(function () {
    if ($(this).prop('checked')) {
        $('.cart .cart-item .item_1 input').prop('checked', true);
        $('.cart .tt input').prop('checked', true);
    } else {
        $('.cart .cart-item .item_1 input').prop('checked', false);
        $('.cart .tt input').prop('checked', false);
    }
    ManZhe();
    XiaDan();
    getToalPrice();
});
// 删除按钮
$('.cart .cart-item .item_6 .del').click(function () {
    $(this).parent().parent().remove();
    $('.cart-total .chkBox .quantity').text($('.cart .cart-item .item_1 input:checked').length);
    ManZhe();
    XiaDan();
    if ($('.cart .cart-item .item_1 input:checked').length == 0) {
        $('.cart .tt input').prop('checked', false);
        $('.cart-total .chkBox input ').prop('checked', false);
    }
    cartNull();
    getToalPrice();
});
// 批量删除按钮
$('.batchesDel').click(function () {
    $('.cart .cart-item .item_1 input:checked').parent().parent().remove();
    cartNull();
    getToalPrice();
});
// 添加数量按钮
$('.add').click(function () {
    var num = $(this).prev().val();
    num++;
    $(this).prev().val(num);
    if (num > 1) {
        $(this).prev().prev().removeClass('z-dis');
    }
    var price = $(this).prev().val() * $(this).parent().parent().prev().find('.aPrice').text();
    $(this).parent().parent().next().find('.price').text(price);
    ManZhe();
    getToalPrice();
});
// 删除数量按钮
$('.reduce').click(function () {
    var num = $(this).next().val();
    num--;
    if (num <= 1) {
        num = 1;
        $(this).addClass('z-dis');
    }
    $(this).next().val(num);
    var price = $(this).next().val() * $(this).parent().parent().prev().find('.aPrice').text();
    $(this).parent().parent().next().find('.price').text(price);
    ManZhe();
    getToalPrice();
});
// 商品类型
var isOk = true;
$('.skuAndServiceWrap').click(function () {
    if (isOk) {
        $(this).parent().next().show();
        isOk = false;
    } else {
        $(this).parent().next().hide();
        isOk = true;
    }
});
$('.cart .cart-item .item_2 .con .innerBox li').click(function () {
    $(this).addClass('tab-sel').siblings().removeClass('tab-sel').find('i').removeClass('sel');
    $(this).find('i').addClass('sel');
});
$('.cart .cart-item .item_2 .con a').click(function () {
    var v = $(this).prev().find('.tab-sel').text();
    $(this).parent().prev().find('.specText').text(v);
    $(this).parent().hide();
    isOk = true;
}); 
// 满折
function ManZhe() {
    var totalCount = getToalCount();
    if (totalCount == 0) {
        $('.cart_group:eq(1) .promotion-wrap .u-promotion-tag').next().html('再购<span class="threshold">&nbsp;2&nbsp;</span>件立享【满2件享8折】');
        $('.cart_group .promotion-wrap .promotionPrice').hide();
        $('.subtract_j').text('0.00');
    } else if (totalCount == 1) {
        $('.cart_group:eq(1) .promotion-wrap .u-promotion-tag').next().html('再购<span class="threshold">&nbsp;1&nbsp;</span>件立享【满2件享8折】');
        $('.cart_group .promotion-wrap .promotionPrice').hide();
        $('.subtract_j').text('0.00');
    } else if (totalCount > 1) {
        $('.cart_group:eq(1) .promotion-wrap .u-promotion-tag').next().text('已满足【每满2件，价格低的1件享7折，满折优惠上不封顶】');
        $('.cart_group .promotion-wrap .promotionPrice').show();
        $('.subtract_j').text('17.70');
    }
}
// 下单
function XiaDan() {
    if ($('.cart .cart-item .item_1 input:checked').length > 0) {
        $('.cart-total .info button').prop('disabled', false);
    } else {
        $('.cart-total .info button').prop('disabled', true);
    }
}
// 购物车为空
function cartNull() {
    if ($('.cart-item').length == 0) {
        $('.cart .cart_empty').show().siblings().hide();
    }
}
// 封装实现总数量
function getToalCount() {
    var trs = $('.cart .cart-item .item_1 input:checked').parent().parent();
    var totalCount = 0;
    for (var i = 0; i < trs.length; i++) {
        // 3. 获取当前这一行中的数量
        var count = trs
            .eq(i)  // 获取当前行
            .find('input[type=text]') // 获取当前行中的文本框
            .val(); // 取出文本框中内容
        // 累加到totalCount
        totalCount += parseInt(count);
    }
    return totalCount;
}
// 封装实现总价值
function getToalPrice() {
    var trs = $('.cart .cart-item .item_1 input:checked').parent().parent();
    var totalPrice = 0;
    for (var i = 0; i < trs.length; i++) {
        // 4. 获取当前这一行中的小计
        var xiaoji = trs
            .eq(i)   // 获取当前行
            .find('.price') // 找到所有td
            .text(); // 获取内容
        // 累加到totalPrie中
        totalPrice += parseFloat(xiaoji);
    }
    $('.cart-total .mgr140 .amount span:eq(1)').text(totalPrice);
    var threshold = 130 - totalPrice;
    if (totalPrice >= 130) {
        $('.cart_group .promotion-wrap span:eq(1)').text('已满足【满130元可超值换购】');
    } else (
        $('.cart_group .promotion-wrap span:eq(1)').html('再购<span class="threshold">&nbsp;' + threshold + '&nbsp;</span>元立享【满130元可超值换购】')
    )
    console.log($('.subtract_j').text());
    $('.priceNum').text($('.cart-total .mgr140 .amount span:eq(1)').text() - $('.subtract .subtract_j').text());
}
