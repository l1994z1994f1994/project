$(function(){
	$(".edit").click(function(){
		var text = $(this).text();
		if(text == "编辑"){
			$(this).text("保存");
			$(".cancel").show();
			$(".immed_set").hide();
		    $(".immed_set").next().show();
		    $("em").show();
		    $(".from_conf").show();
		    $(".from_up").show();
		    $(".from_conf").prev().hide();
		    $(".from_cont input").attr("disabled",false);
		    $(".from_cont select").attr("disabled",false);
		}else{
			$(this).text("编辑");
			$(".cancel").hide();
			$(".immed_set").show();
		    $(".immed_set").next().hide();
		    $(".from_conf").hide();
		    $(".from_up").hide();
		    $(".from_conf").prev().show();
		    $(".from_cont input").attr("disabled",true);
		    $(".from_cont select").attr("disabled",true);
		}
	});
	$(".cancel").click(function(){
		$(this).hide();
		$(".edit").text("编辑");
		$(".immed_set").show();
		$(".immed_set").next().hide();
		$("em").hide();
		$(".from_conf").hide();
		$(".from_up").hide();
		$(".from_conf").prev().show();
		$(".from_cont input").attr("disabled",true);
		$(".from_cont select").attr("disabled",true);
	});
	$(".immed_set").next().hide();
	$(".from_conf").hide();
	$(".from_up").hide();
	// $(".from_cont input").attr("disabled",true).css("cursor","default");
	$(".from_cont input").attr("disabled",true);
	$(".from_cont select").attr("disabled",true);
});