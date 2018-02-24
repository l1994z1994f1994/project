$(function(){
	$(".left_li").eq(0).find(".fund").css("color","#0089f1");
	$(".left_li").eq(0).find(".show_list").attr("src","../commons/image/xiangyou02.png");
	$(".left_li").eq(0).find(".work_img").attr("src","../commons/image/00.png");
	$(".left_li").eq(0).css({
		"border-left":"3px solid #0089f1",
	});
	//提交审批
	$(".save").click(function(){
		$(".appor_box").show();
	});
	$(".appor_title img").click(function(){
		$(".appor_box").hide();
	});
	$(".can_appor").click(function(){
		$(".appor_box").hide();
	});
	var timer;
	$(".sure_appor").click(function(){
		$(".appor_box").hide();
		$(".success").show();
		var num = 3;
        timer = setInterval(function(){
        	num--;
            if(num < 0){
            	$(".success").hide();
            }
        },1000)
	});
	$(".succ_btn").click(function(){
		$(".success").hide();
		clearInterval(timer)
	});
});