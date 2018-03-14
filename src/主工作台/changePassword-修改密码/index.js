$(function(){
	$(".save").click(function(){
		var text = $("#new_word").val();
		var cont = $("#sure_pass").val();
		if(text != cont){
			$("#sure_pass").css("border","1px solid #ec3b3b");
			$(".error_text").show();
		}else{
			$("#sure_pass").css("border","1px solid #ccc");
			$(".error_text").hide();
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