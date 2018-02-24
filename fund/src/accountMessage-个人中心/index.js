$(function(){
	$(".left_li").eq(0).find(".fund").css("color","#0089f1");
	$(".left_li").eq(0).find(".show_list").attr("src","../commons/image/xiangyou02.png");
	$(".left_li").eq(0).find(".work_img").attr("src","../commons/image/00.png");
	$(".left_li").eq(0).css({
		"border-left":"3px solid #0089f1",
	});
	$(".orgin").hover(function(){
        $(".orgin_mes").show();
	},function(){
        $(".orgin_mes").hide();
	});
	$(".http").hover(function(){
        $(".http_mes").show();
	},function(){
        $(".http_mes").hide();
	});
	
});