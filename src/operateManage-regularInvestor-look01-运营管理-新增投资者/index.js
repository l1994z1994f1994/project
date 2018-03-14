$(function(){
	// $("input").attr("disabled","disabled");
	// $("select").attr("disabled","disabled");
	$(".add_look").click(function(){
		var text = $(this).find("span").text();
		if(text == "查看更多"){
			$(".table_tbody").append('<tr><td>张三</td><td>2017-09-09</td><td>李四</td><td>2017-09-09</td></tr><tr><td>张三</td><td>2017-09-09</td><td>李四</td><td>2017-09-09</td></tr>');
			$(this).find("span").text("查看全部");
		}else if(text == "查看全部"){
			$(".table_tbody").append('<tr><td>张三</td><td>2017-09-09</td><td>李四</td><td>2017-09-09</td></tr>');
			$(this).find("span").text("收起");
			$(this).find("img").attr("src","image/up.png");
		}else{
			$(".table_tbody").html('<tr><td>张三</td><td>2017-09-09</td><td>李四</td><td>2017-09-09</td></tr>');
			$(this).find("span").text("查看更多");
			$(this).find("img").attr("src","image/down.png");
		}
	});
	
});