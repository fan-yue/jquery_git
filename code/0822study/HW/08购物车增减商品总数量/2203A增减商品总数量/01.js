$('#btn').click(function(){
    // 全选/全不选(综合按钮)
    // let a = $(this).prop('checked');
    // console.log(a);
    
    // $('.che-shop').attr('checked',true);
    $('.che-shop').prop('checked',$(this).prop('checked'));
})


// 检测选中状态
$('.che-shop').click(function(){
    if($('.che-shop:checked').length == $('.che-shop').length){
        $('#btn').prop('checked',true);
    }else{
        $('#btn').prop('checked',false);
    }
})

// + 购物车功能
$('.add').click(function(){
    // 获取第一次value值 为1.
    let a = $(this).siblings('.val').val();
    // 自增1
    a++;
    // 设置value为自增的值
    $(this).siblings('.val').val(a);
    // 单价的位置
    let b = $(this).parent().siblings('.price').children().text();

    // 总价
    let c = $(this).parent().siblings('.sum').children().text( a * b);

    // 算总和的函数
    getSum();
})

// - 购物车功能
$('.remove').click(function(){
    // 获取value值
    let a = $(this).siblings('.val').val();
    if(a-- == 1){
        return false;
    }
    // 自减
    $(this).siblings('.val').val(a);

    // 单价
    let b = $(this).parent().siblings('.price').children().text();

    // 总价
    let c = $(this).parent().siblings('.sum').children().text( a * b);

    // 算总和的函数
    getSum();
})

// input 变值
$('.val').change(function(){
    // 获取个数
    let a = $(this).val();
    
    // 获取价格
    let b = $(this).parent().siblings('.price').children().text();
    
    // 算总价
    let c = $(this).parent().siblings('.sum').children().text( a * b);

    // 调用函数
    getSum();
})


// 单个商品删除功能
$('.delA').click(function(){
    
    $(this).parent().parent().remove();
    // 调用函数
    getSum();
})

// 选中的商品删除功能
$('.delOp').click(function(){
    
    $('.che-shop:checked').parent().parent().remove();
    // 调用函数
    getSum();
})

// 清空购物车
$('.AllDel').click(function(){
    $('.detil-list').remove();
    // 调用函数
    getSum();
})

function getSum(){
    // 获取商品的个数
    let geshu = 0;
    $('.val').each(function(index,item){
        let a = parseInt($(item).val());     //数字1
        geshu += a; 
    })
    $('.geshu').text(geshu); 

    // 所有的总价
    let sumPrice = 0;
    // 总价
    $('.zonghe').each(function(index,item){
        // 每个商品的总价
        let shopSum = parseInt($(item).text());
        sumPrice += shopSum;
    })
    $('.sumPrice').text(sumPrice);
}
// 调用函数
getSum();