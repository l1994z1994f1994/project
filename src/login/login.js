$(function(){
	//记住密码
	var flag = true;
	$(".pass_box img").click(function(){
		if(flag){
			$(this).attr("src","image/wuduihao.png");
			flag = false;
		}else{
			$(this).attr("src","image/duihao.png");
			flag = true;
		}
	});
	//点击登录
	$(".sub_btn").click(function(){
		var text = $("input").eq(0).val();
		if(text.length == 0){
			$("input").eq(0).css("border","1px solid #ec3b3b");
			$(".word_error").eq(0).show();
		}else{
			$("input").eq(0).css("border","1px solid #999");
			$(".word_error").eq(0).hide();
		}
		var cont = $("input").eq(1).val();
		if(cont.length == 0){
			$("input").eq(1).css("border","1px solid #ec3b3b");
			$(".word_error").eq(1).show();
		}else{
			$("input").eq(1).css("border","1px solid #999");
			$(".word_error").eq(1).hide();
		}
	});
	$(".close_img").click(function(){
		$(".del_box").hide();
	});
	$(".sure_btn").click(function(){
		$(".del_box").hide();
	})
});
//重置按钮
var timer;
function focuFn(el){
	$(el).next().show();
	$(el).next().click(function(){
		$(el).val("");
		$(el).focus();
		clearInterval(timer);
	});
}
function blurFn(el){
	timer = setTimeout(function(){
		$(el).next().hide();
	},200)
}