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
    var b = $('.price').text();
    $('.zj').text( a * b );


})

// 购物车 - 功能
$('.addy').click(function(){
    var a = $(this).siblings('.atext').val();
    if(a-- == 0){
        return false;
    }
    $(this).siblings('.atext').val(a);
    
    // 商品价格计算
    var b = $('.price').text();
    $('.zj').text( a * b );
})