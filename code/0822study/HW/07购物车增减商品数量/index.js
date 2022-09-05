$('.btn').click(function(){
    // 检测自己的状态
    var a = $(this).prop('checked');
    // 全选，无取消全选
    // $('.che-shop').prop('checked',true);
    // 全选，有取消全选
    $('.che-shop').prop('checked',$(this).prop('checked'));
})

// che-shop 单个选项的处理。
$(".che-shop").click(function(){
    /* 
    if(小的复选框个数 == 3){
        全选按钮应该是选中状态
    }else{
        全选按钮不被选中
    } 
    */
    if($('.che-shop:checked').length == 4){
        $('.btn').prop('checked',true);
    }else{
        $('.btn').prop('checked',false);
    }
})

// 扩展，上述3如何设置为一个活的

/* $(".che-shop").click(function(){
    if($('.che-shop:checked').length == $('.che-shop').length){
        $('.btn').prop('checked',true);
    }else{
        $('.btn').prop('checked',false);
    }
}) */


// 购物车加减功能
    // 购物车 + 功能
$('.addj').click(function(){
    var a = $(this).siblings('.atext').val();
    a++;
    $(this).siblings('.atext').val(a);
    // 商品价格计算 + 
    var price = $(this).parent().siblings('.pr').find('.price').text();

    $(this).parent().siblings('.sum').find('.priceSum').text(price * a);
})

    // 购物车 - 功能
$('.addy').click(function(){
    var a = $(this).siblings('.atext').val();
    if(a-- == 1){
        return false;
    }
    $(this).siblings('.atext').val(a);
    // 商品价格计算 -
    var price = $(this).parent().siblings('.pr').find('.price').text();

    $(this).parent().siblings('.sum').find('.priceSum').text(price * a);    
})



// 解决购物车商品数量 input框 更改，但是商品总价格不变
$('.atext').change(function(){
    // 思路：获取文本框的值 * 当前商品的价格 = 商品总价
    // 获取文本框里面的 value 值
    var n = $(this).val();
    // 当前商品的价格
    var price = $(this).parent().siblings('.pr').find('.price').text();
    
    $(this).parent().siblings('.sum').find('.priceSum').text( n * price);
})