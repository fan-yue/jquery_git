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

    getSum();
    
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

    getSum();
})  

$('.atext').change(function(){  
    // 商品改变的个数
    var a = $(this).val();
    // 商品价格
    var price = $(this).parents().siblings('.pr').find('.price').text();

    // 总价
    $(this).parents().siblings('.priceSum').find('.zj').text( a * price);
})






function getSum(){
    var count = 0;
    $('.atext').each(function(i,el){
        // count = count + $(el).val();
        count += parseInt($(el).val());
        
    })
    
    $('.list-sum').text(count);
    

    var money = 0;
    $('.zj').each(function(i,el){
        // money = money + parseInt($(el).text());
        money += parseInt($(el).text());
    })
    $('.prcie-list-sum').text(money);
}

getSum();

// 删除商品
$('.delA').click(function(){
    $(this).parent().parent().remove();
    getSum();
})
