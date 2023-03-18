$('#btn').click(function(){
    // 全选/全不选(综合按钮)
    // let a = $(this).prop('checked');
    // console.log(a);
    
    // $('.che-shop').attr('checked',true);
    $('.che-shop').prop('checked',$(this).prop('checked'));
})


$('.che-shop').click(function(){
    if($('.che-shop:checked').length == $('.che-shop').length){
        $('#btn').prop('checked',true);
    }else{
        $('#btn').prop('checked',false);
    }
})