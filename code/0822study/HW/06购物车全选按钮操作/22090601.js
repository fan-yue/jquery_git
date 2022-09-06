$('.btn').click(function(){
    // $(this).prop('checked');
    $('.che-shop').prop('checked',$(this).prop('checked'));
})

$('.che-shop').click(function(){
    if($('.che-shop:checked').length == $('.che-shop').length){
        $('.btn').prop('checked',true);
    }else{
        $('.btn').prop('checked',false);
    }
})

// 购物车 +　功能
$('.addj').click(function(){
    var a = $(this).siblings('.atext').val();
    a++;
    $(this).siblings('.atext').val(a);
    // 商品价格计算
    var price = $(this).parent().parent().siblings('.pr').find('.price').text();

    $(this).parent().parent().siblings('.priceSum').find('.zj').text( price * a);

    
    
})

// 购物车 - 功能
$('.addy').click(function(){
    var a = $(this).siblings('.atext').val();
    if(a-- == 0){
        return false;
    }
    $(this).siblings('.atext').val(a);
    
    // 商品价格计算
    var price = $(this).parent().parent().siblings('.pr').find('.price').text();

    $(this).parent().parent().siblings('.priceSum').find('.zj').text( price * a);
})  

$('.atext').change(function(){  
    // 商品改变的个数
    var a = $(this).val();
    // 商品价格
    var price = $(this).parents().siblings('.pr').find('.price').text();

    // 总价
    $(this).parents().siblings('.priceSum').find('.zj').text( a * price);
})