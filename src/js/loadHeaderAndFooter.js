/*加载头部、尾部*/
define(["jquery"],function($){
	$(".header").load("/html/include/header.html");
	$(".footer").load("/html/include/footer.html");
	//搜索框聚焦
	$(function(){
		//搜索关键字
		$(".index_search").on("keyup",function(){
			const txt =$(this).val();
			const url = `https://suggest.taobao.com/sug?code=utf-8&q=${txt}&callback=?`;
			$.getJSON(url,function(data){
				let html ="";
				data.result.forEach(function(curr){
					html+=`<div>${curr[0]}</div>`
				})
				$(".show_search").show().html(html);
			});
		});
		//使用事件委派点击关键词更新到搜索框
		$(".show_search").delegate("div","click",function(){
			const txt = $(this).text();
			$(".index_search").val(txt);
			$(".show_search").hide();
		})
		
		//导航栏下拉列表
		$(".allMenu li").hover(function(){
			$(this).find($(".menu_list")).slideToggle("fast");
		})
	})
});