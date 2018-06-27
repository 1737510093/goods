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
		//动态渲染商品模板
		$.getJSON("mock/products.json",function(data){
			const html = template("product_list_temp",{list:data.res_body.list});
			//显示
			$(".product_tc").prepend(html);
		});
		//动态渲染楼层内分类标题
		$.getJSON("mock/hot_list_title.json",function(data){
			const html = template("hot_list_title_temp",{list:data.res_body.list});
			//显示
			$(".hot_tc_top_list").prepend(html);
		})
		//广告图
		$.getJSON("mock/hot_banner.json",function(data){
			const html = template("jxhd_temp",{list:data.res_body.list});
			//显示
			$(".jxhd").prepend(html);
		});
		//抛物线加购物车
		$("#product_tc_one").find($(".add_car")).on("click",function(e){
		
		// 抛物线终点在文档中的坐标
			const end =$(".slide_nav").find($(".car")).offset();
			// 动态创建运动图片
			const flyer = $("<img src='image/car.png' style='width:28px;'>");
			// 运动
			flyer.fly({
				start : {
					left : e.pageX - $(window).scrollLeft(),
					top : e.pageY - $(window).scrollTop()
				},
				end : {
					left : end.left - $(window).scrollLeft(),
					top : end.top - $(window).scrollTop()
				},
				onEnd : function(){ // 运动结束，销毁资源
				this.destroy();
			}
			});
			
		})
})
		



