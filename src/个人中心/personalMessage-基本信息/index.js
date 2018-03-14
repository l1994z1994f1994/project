$(function(){
	$("input").attr("disabled",true);
	$(".edit").click(function(){
		var text = $(this).text();
		if(text == "编辑"){
			$(this).text("保存");
			$(".cancel").show();
			$(".immed_set").hide();
		    $(".immed_set").next().show();
		    $(".from_conf").show();
		    $("input").attr("disabled",false);
		    $(".self_img").append("<div></div>");
		    hoverFn();
		}else{
			$(this).text("编辑");
			$(".cancel").hide();
			$(".immed_set").hide();
		    $(".immed_set").next().show();
		    $(".from_conf").show();
		    $("input").attr("disabled",true);
		    $(".self_img").empty();
		}
	});
	$(".cancel").click(function(){
		$(this).hide();
		$(".edit").text("编辑");
		$(".immed_set").show();
		$(".immed_set").next().hide();
		$(".from_conf").hide();
		$("input").attr("disabled",true);
		$(".self_img").empty();
	});
	$(".immed_set").next().hide();
	$(".immed_set").click(function(){
		$(".immed_set").hide();
		$(".immed_set").next().show();
		$(".from_conf").show();
		$(".edit").text("保存");
		$(".cancel").show();
		$("input").attr("disabled",false);
		$(".self_img").append("<div></div>");
		hoverFn();
	});
});
function hoverFn(){
	$(".self_img").hover(function(){
		$(".self_img div").slideDown();
		$(this).click(function(){});
	},function(){
		$(".self_img div").slideUp();
	});
}