require(["config"],function(){
	require(["jquery","template","fly","load"],function($,template){
		
		$(function(){
		//渲染购物车	
			
			
			
			
		//动态渲染购买的人还买了的商品模板
			$.getJSON("../mock/again_buy.json",function(data){
				const html = template("again_buy_temp",{list:data.res_body.list});
				//显示
				$("#clearfix").prepend(html);
			});
		//动态今日最受欢迎商品模板	
			$.getJSON("../mock/liker.json",function(data){
				const html = template("like_buy_temp",{list:data.res_body.list});
				//显示
				$("#clearfix_like").prepend(html);
			});
			
			
			//购买的人还买了-今日最受欢迎切换
			$("#agin").mouseenter(function(){
				$("#like").removeClass("curr");
				$("#agin").addClass("curr");
				$("#clearfix_like").css("display","none");
				$("#clearfix").css("display","block");
				
			})
			
			$("#like").mouseenter(function(){
				$("#agin").removeClass("curr");
				$("#like").addClass("curr");
				$("#clearfix").css("display","none");
				$("#clearfix_like").css("display","block");
				
			
			})
			
			//抛物线加购物车
			let amount=Number($("#car_amount").text());
			$("#HotBox").delegate(".j_AddCart","click",function(e){
				
				// 抛物线终点在文档中的坐标
					const end =$("#car_slide").offset();
					// 动态创建运动图片
					const flyer = $("<img src='../img/car.png' style='width:28px;'>");
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
			
			//数量加减
			$("#car_good").delegate(".jmadd","click",function(){
				var count =$(this).siblings(".jminputBg").val();
				count++;
				$(this).siblings(".jminputBg").val(count);
				
				var ttr = $(this).siblings(".jminputBg").val();
				var ttd = $(this).parents("tr").find(".dan").text();
				var ato = parseFloat(ttr*ttd).toFixed(2);
				$(this).parents("tr").find(".zong").text(ato);
			})
			$("#car_good").delegate(".jmminu","click",function(){
				var count =$(this).siblings(".jminputBg").val();
				count--;
				if(count<1)
				count=1;
				$(this).siblings(".jminputBg").val(count);
				
				var ttr = $(this).siblings(".jminputBg").val();
				var ttd = $(this).parents("tr").find(".dan").text();
				var ato = parseFloat(ttr*ttd).toFixed(2);
				$(this).parents("tr").find(".zong").text(ato);
			})
			//数量输入框失去焦点
			$("#car_good").delegate(".jminputBg","blur",function(){
				var amount =parseInt($(this).val());
				if(amount<1){
					$(this).val(1);
				}
				else{
					$(this).val(amount);
				}
				
				var cto = $(this).val();
				var danjia =$(this).parents("tr").find(".dan").text();
				var xiaoji =parseFloat(cto*danjia).toFixed(2);
				$(this).parents("tr").find(".zong").text(xiaoji);
			})
			//全选
			var point = $("#car_good").find("input:checkbox").get();
			$("#chkAll").on("click",function(){
					var status = $(this).prop("checked");
					for(var i in point){
						$(point[i]).prop("checked",status);
					}
				})
			
			$("#car_good").find("input:checkbox").click(function(){
				var sta1 = $(point[0]).prop("checked");
				var sta2 = $(point[1]).prop("checked");
				if(sta1===sta2){
					$("#chkAll").prop("checked",sta1)
				}
				
			})
			
			
			
			
			
		})
	});
})
