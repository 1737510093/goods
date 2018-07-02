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
			//窗口滚动超过商品详情导航条时固定定位在顶部
			$(window).scroll(function(){
				const wintop = document.documentElement.scrollTop;
				const eletop = $(".attribute_over>.title").offset(top);
				if(wintop>=1050){
					$(".attribute_over>.title").css({"position":"fixed","top":"0"});
					$(".floor_attr").css({"position":"fixed","top":"37px","right":"26px"});
						$("a").removeClass("h_list_1");
						$("a").addClass("h_list_2");
					if(wintop>=1000 && wintop<1100){
						
						$("#attribute_title a:first-child").removeClass("h_list_2");
						$("#attribute_title a:first-child").addClass("h_list_1");
					}
					if(wintop>=1100 && wintop<13200){
						$("#attribute_title a:nth-of-type(2)").removeClass("h_list_2");
						$("#attribute_title a:nth-of-type(2)").addClass("h_list_1");
					}
					if(wintop>=13200 && wintop<14200){
						$("#attribute_title a:nth-of-type(3)").removeClass("h_list_2");
						$("#attribute_title a:nth-of-type(3)").addClass("h_list_1");
					}
					if(wintop>=14200){
						$("#attribute_title a:nth-of-type(4)").removeClass("h_list_2");
						$("#attribute_title a:nth-of-type(4)").addClass("h_list_1");
					}
					
				}
				else{
					$(".attribute_over>.title").css("position","static");
					$(".floor_attr").css({"position":"absolute","top":"37px","right":"0"});
				}
			})
			//点击商品详情标题改变样式
			$("#attribute_title").delegate("a","click",function(){
				$("a").removeClass("h_list_1");
				$("a").addClass("h_list_2");
				$(this).removeClass("h_list_2");
				$(this).addClass("h_list_1");
				
			})
			//
		})
	})
})


