require(["config"],function(){
	require(["load"],function(){});
	require(["jquery"],function(){});
	require(["unslider"],function(){});
	
	
})
//主页轮播图
$(function(){
		$(document).ready(function(e) {
		    var unslider04 = $('#b04').unslider({
		        dots: true
			    }),
			    data04 = unslider04.data('unslider');
			     
			    $('.unslider-arrow04').click(function() {
			        var fn = this.className.split(' ')[1];
			        data04[fn]();
			    });
		});
		
		//侧边栏影藏元素动态展示
		$(".slide_nav").children("div").hover(function(){
			$(this).children("div").slideToggle("fast");
		})
})
		



