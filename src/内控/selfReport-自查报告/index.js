$(function(){
	//年月
	$(".left_btn").click(function(){
		var text = $(".month").text();
		if(text == 1){
			$(".year").text($(".year").text() - 1);
			$(".month").text("12")
		}else{
			$(".month").text($(".month").text() - 1);
		}
	});
	$(".right_btn").click(function(){
		var text = $(".month").text();
		var cont = $(".year").text();
		if(text == 12){
			$(".year").text(Number(cont) + 1);
			$(".month").text("1")
		}else{
			$(".month").text(Number(text) + 1);
		}
	});
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
	//查看
	$(".preview").click(function(){
		$(".right_contA").hide();
		$(".right_contB").show();
	});
});