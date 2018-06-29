require(["config"],function(){
	require(["jquery","fly","unslider","load"],function($){
	

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
		
		
		//动态渲染商品模板1F
		$.getJSON("mock/product_1F.json",function(data){
			const html = template("product_list_temp_1",{list:data.res_body.list});
			//显示
			$("#product_tc_one").prepend(html);
		});
		//2F
		$.getJSON("mock/product_2F.json",function(data){
			const html = template("product_list_temp_2",{list:data.res_body.list});
			//显示
			$("#product_tc_two").prepend(html);
		});
		//3F
		$.getJSON("mock/product_3F.json",function(data){
			const html = template("product_list_temp_3",{list:data.res_body.list});
			//显示
			$("#product_tc_three").prepend(html);
		});
		//4F
		$.getJSON("mock/product_4F.json",function(data){
			const html = template("product_list_temp_4",{list:data.res_body.list});
			//显示
			$("#product_tc_four").prepend(html);
		});
		//5F
		$.getJSON("mock/product_5F.json",function(data){
			const html = template("product_list_temp_5",{list:data.res_body.list});
			//显示
			$("#product_tc_five").prepend(html);
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
		let amount=Number($("#car_amount").text());
		$("#all_product").delegate("#add_Car","click",function(e){
			
			// 抛物线终点在文档中的坐标
				const end =$("#car_slide").offset();
				// 动态创建运动图片
				const flyer = $("<img src='img/car.png' style='width:28px;'>");
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
				//购物车数量+1
				amount+=1;
				$("#car_amount").text(amount);
			})
		});
		
		//商品加入购物车
		
		
	});	
});


