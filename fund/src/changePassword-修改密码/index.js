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
	$(".save").click(function(){
		var text = $("#new_word").val();
		var cont = $("#sure_pass").val();
		if(text != cont){
			$("#sure_pass").css("border","1px solid #ec3b3b");
			$(".error_text").show();
		}
	});
});
function changeImg(el){
	if($(el).hasClass("change_img")){
		$(el).attr("src","image/biyanjing.png").parent().find("input").attr("type","password");
		$(el).removeClass("change_img");
	}else{
		$(el).attr("src","image/zhengyan.png").parent().find("input").attr("type","text");
		$(el).addClass("change_img");
	}
}