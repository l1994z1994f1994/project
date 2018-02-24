$(function(){
	$(".left_li").eq(0).find(".fund").css("color","#0089f1");
	$(".left_li").eq(0).find(".show_list").attr("src","../commons/image/xiangyou02.png");
	$(".left_li").eq(0).find(".work_img").attr("src","../commons/image/00.png");
	$(".left_li").eq(0).css({
		"border-left":"3px solid #0089f1",
	});
	$(".main_link").each(function(index){
		$(".main_link").eq(index).hover(function(){
			$(this).find("p").slideDown();
		},function(){
			$(this).find("p").slideUp();
		});
	});
	//任务弹框
	$(".new_task").click(function(){
		$(".task_box").show(); 
	});
	$(".certt_task").click(function(){
		$(".task_box").hide();
	});
    $(".dess_task").click(function(){
    	$(".task_box").hide();
    });
    $(".task_title img").click(function(){
    	$(".task_box").hide();
    });
    $(".upward span").click(function(){
    	$(".event_box").slideDown();
    	$(".downward").show();
    });
    $(".downward span").click(function(){
    	$(".event_box").slideUp();
    	$(".downward").hide();
    });
});