//$(function(){
//			
//			$(".wrap li").hover(function(){
//				//鼠标进入的时候，其他li透明度为0.5
//				$(this).siblings().stop().fadeTo(400,0.5);
//			},function(){
//			//鼠标进入的时候，其他li透明度为0.5
//				$(this).siblings().stop().fadeTo(400,1);
//			});
//		});
		
$(function(){
			//1,鼠标经过左侧小li  //获取#left下li的元素  绑定一个鼠标经过mouseover（用的是隐式迭代给每个li都绑定）
//			$("div").hide();
			$("#left li").hover(function(){
				//2.得到当前小li的索引号
				var index = $(this).index();
				console.log(index);
				//3.让我们右侧的盒子相应索引号的图片显示出来
				$("#content div").eq(index).show();
				//4.让其余的图片隐藏
				$("#content div").eq(index).siblings().hide();
			});
			
		});