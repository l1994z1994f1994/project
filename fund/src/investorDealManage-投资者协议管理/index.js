$(function(){
	//分页
	$(".page_left").click(function(){
		var text = $(".page_num").text();
		if(text > 1){
			$(".page_num").text(text - 1);
		}
	});
	$(".page_right").click(function(){
		var text = Number($(".page_num").text());
		var cont = Number($(".all_num").text());
		if(text < cont){
			$(".page_num").text(text + 1);
		}
	});
});


