$(function(){
	//验证账号
	$(".first_box").css("background","#0089f1");
	$(".second_box").css({
		"border":"2px solid #c2e1f8",
		"background":"#0089f1",
	});
	$(".second_box").find("span").css("color","#0089f1");
	$(".third_box").css("background","linear-gradient(to right, #0089f1 0, #fff 100%)");

	//验证码
	var timer;
	$(".auth_code").click(function(){
		var num = 60;
        timer = setInterval(function(){
            num--;
            if(num <= 0){
            	$(".auth_code").html("重新获取验证码信息");
                clearInterval(timer);
            }else{
            	$(".auth_code").html("<span class='count_down'>"+num+"</span>秒后重新发送");
            }
        },1000)
	});
    //阅读协议
	var flag = true;
	$(".read_deal").click(function(){
		if(flag){
			$(this).attr("src","image/wuduihao.png");
			flag = false;
		}else{
			$(this).attr("src","image/duihao.png");
			flag = true;
		}
	});
	var falg = true;
	$(".read_img").click(function(){
		if(falg){
			$(this).attr("src","image/wuduihao.png");
			falg = false;
            $(".next_btn").css({
				"color":"#999",
				"background":"#eee",
				"cursor":"not-allowed"
			}).attr("disabled",false);
		}else{
			$(this).attr("src","image/duihao.png");
			falg = true;
			$(".next_btn").css({
				"color":"#fff",
				"background":"#0089f1",
				"cursor":"pointer"
			}).attr("disabled",false);
		}
	});
	//密码设置
	$(".next_btn").click(function(){
		if(falg == false){
            return;
		}
		var text = $(".first input").eq(0).val();
		if(text.length == 0){
            $(".first input").eq(0).css("border","1px solid #ec3b3b");
            $(".first .error_box").eq(0).show();
            return;
		}else{
			$(".first input").eq(0).css("border","1px solid #999");
            $(".first .error_box").eq(0).hide();
		}
		var cont = $(".first input").eq(1).val();
		if(cont.length == 0){
			$(".first input").eq(1).css("border","1px solid #ec3b3b");
			$(".first .error_box").eq(1).show();
			return;
		}else{
			$(".first input").eq(1).css("border","1px solid #999");
			$(".first .error_box").eq(1).hide();
		}
		$(".first").hide();
		$(".second").show();
		$(".third_box").css("background","#0089f1");
		$(".fifth_box").css({
			"border":"2px solid #c2e1f8",
			"background":"#0089f1",
		});
		$(".fifth_box").find("span").css("color","#0089f1");
		$(".sixth_box").css("background","linear-gradient(to right, #0089f1 0, #fff 100%)");
	});
	
	$(".next_pass").click(function(){
		var text = $(".second .input_box").eq(0).val();
		var cont = $(".second .input_box").eq(1).val();
		if(text.length == 0){
            $(".second .error_box").eq(0).show();
            $(".second .hint_text").hide();
			$(".second .input_box").eq(0).css("border","1px solid #ec3b3b");
		    return;
		}else{
			$(".second .error_box").eq(0).hide();
            $(".second .hint_text").show();
			$(".second .input_box").eq(0).css("border","1px solid #999");
		}
		if(cont.length == 0){
            $(".second .error_box").eq(1).show();
            $(".second .error_text").eq(1).text("确认密码不能为空");
			$(".second .input_box").eq(1).css("border","1px solid #ec3b3b");
		    return;
		}else{
			if(text != cont){
				$(".second .error_box").show();
				$(".second .error_box").eq(0).hide();
				$(".second .input_box").eq(1).css("border","1px solid #ec3b3b");
				$(".second .error_text").eq(1).text("两次密码出入不一致");
			    return;
			}else{
				$(".second .error_box").hide();
				$(".second .input_box").eq(1).css("border","1px solid #999");
			}
		}
		
		//个人信息
		$(".second").hide();
		$(".third").show();
		$(".sixth_box").css("background","#0089f1");
		$(".eightth_box").css({
			"border":"2px solid #c2e1f8",
			"background":"#0089f1",
		});
		$(".eightth_box").find("span").css("color","#0089f1");
		$(".night_box").css("background","linear-gradient(to right, #0089f1 0, #fff 100%)");
		$(".third .error_box").hide();
	});
	//注册成功
	$(".next_reg").click(function(){
		var text = $(".third input").eq(0).val();
		if(text.length == 0){
            $(".third input").eq(0).css("border","1px solid #ec3b3b");
            $(".third .error_box").eq(0).show();
            return;
		}else{
			$(".third input").eq(0).css("border","1px solid #999");
            $(".third .error_box").eq(0).hide();
		}
		var cont = $(".third input").eq(1).val();
		if(cont.length == 0){
			$(".third input").eq(1).css("border","1px solid #ec3b3b");
			$(".third .error_box").eq(1).show();
			return;
		}else{
			$(".third input").eq(1).css("border","1px solid #999");
			$(".third .error_box").eq(1).hide();
		}
		var email = $(".third input").eq(2).val();
		if(email.length == 0){
			$(".third input").eq(2).css("border","1px solid #ec3b3b");
			$(".third .error_box").eq(2).show();
			return;
		}else{
			$(".third input").eq(2).css("border","1px solid #999");
			$(".third .error_box").eq(2).hide();
		}
		$(".third").hide();
		$(".fourth").show();
		$(".night_box").css("background","#0089f1");
		$(".eleventh_box").css({
			"border":"2px solid #c2e1f8",
			"background":"#0089f1",
		});
		$(".eleventh_box").find("span").css("color","#0089f1");
		$(".twelfth_box").css("background","#0089f1");
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
//重置按钮
var timer;
function focuFn(el){
	$(el).next().show();
	$(el).next().click(function(){
		$(el).val("");
		$(el).focus();
		clearInterval(timer);
	});
	$(".next_btn").css({
		"color":"#fff",
		"background":"#0089f1",
		"cursor":"pointer"
	}).attr("disabled",false);
}
function blurFn(el){
	timer = setTimeout(function(){
				$(el).next().hide();
			},200)
}


