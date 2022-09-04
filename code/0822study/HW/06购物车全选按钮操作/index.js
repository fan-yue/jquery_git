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
    if($('.che-shop:checked').length == 3){
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