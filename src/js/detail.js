require(["config"],function(){
	require(["jquery","template","fly","Area","Select","jqzoom","magnify","load"],function($,template,fly,Area,Select,jqzoom,magnify,load){
		
		$(function(){
			
			//抛物线加购物车
			let amount=Number($("#car_amount").text());
			$("#buy2").click(function(e){
				
				// 抛物线终点在文档中的坐标
					const end =$("#car_slide").offset();
					// 动态创建运动图片
					const flyer = $("<img src='../img/car.png' id='car_img'>");
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
			});
			
			//推荐精品模板渲染
			$.getJSON("../mock/again_buy.json",function(data){
				const html = template("tuijian_temp",{list:data.res_body.list});
				$(".colFrame ul").prepend(html);
			});
			
			//渲染商品详情图
			$.getJSON("../mock/detail.json",function(data){
				const html = template("detail_temp",{list:data.res_body.list});
				$("#all_delimg").prepend(html);
			});
		})
	})
})	

