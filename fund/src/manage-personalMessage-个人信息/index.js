$(function(){
	$(".edit").click(function(){
		var text = $(this).text();
		if(text == "编辑"){
			$(this).text("保存");
			$(".cancel").show();
			$(".immed_set").hide();
		    $(".immed_set").next().show();
		    $("em").show();
		}else{
			$(this).text("编辑");
			$(".cancel").hide();
			$(".immed_set").show();
		    $(".immed_set").next().hide();
		}
	});
	$(".cancel").click(function(){
		$(this).hide();
		$(".edit").text("编辑");
		$(".immed_set").show();
		$(".immed_set").next().hide();
		$("em").hide();
	});
	$(".immed_set").next().hide();
});