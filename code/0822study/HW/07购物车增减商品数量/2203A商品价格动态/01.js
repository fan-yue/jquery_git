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
})

// input 变值
$('.val').change(function(){
    // 获取个数
    let a = $(this).val();
    
    // 获取价格
    let b = $(this).parent().siblings('.price').children().text();
    
    // 算总价
    let c = $(this).parent().siblings('.sum').children().text( a * b);
})
