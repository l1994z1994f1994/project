$(function(){
	$(".left_li").eq(0).find(".fund").css("color","#0089f1");
	$(".left_li").eq(0).find(".show_list").attr("src","../commons/image/xiangyou02.png");
	$(".left_li").eq(0).find(".work_img").attr("src","../commons/image/00.png");
	$(".left_li").eq(0).css({
		"border-left":"3px solid #0089f1",
	});
	$(".self_img").hover(function(){
		$(".self_img div").slideDown();
		$(this).click(function(){});
	},function(){
		$(".self_img div").slideUp();
	});
	$(".self_img div").click(function(){});
	$(".edit").click(function(){
		var text = $(this).text();
		if(text == "编辑"){
			$(this).text("保存");
			$(".cancel").show();
			$(".immed_set").hide();
		    $(".immed_set").next().show();
		    $(".from_conf").show();
		}else{
			$(this).text("编辑");
			$(".cancel").hide();
			$(".immed_set").hide();
		    $(".immed_set").next().show();
		    $(".from_conf").show();
		}
	});
	$(".cancel").click(function(){
		$(this).hide();
		$(".edit").text("编辑");
		$(".immed_set").show();
		$(".immed_set").next().hide();
		$(".from_conf").hide();
	});
	$(".immed_set").next().hide();
	$(".immed_set").click(function(){
		$(".immed_set").hide();
		$(".immed_set").next().show();
		$(".from_conf").show();
	});
});