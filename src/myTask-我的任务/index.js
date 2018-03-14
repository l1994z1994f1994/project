$(function(){
	//标记完成
	$(".finish").each(function(index){
        $(".finish").eq(index).click(function(){
        	var that = $(this);
			$(".sign_box").show();
			$(".cert_sign").click(function(){
		    	$(".sign_box").hide();
		    	that.parent().parent().remove();
		    });
		});
	});
    $(".sign_x").click(function(){
    	$(".sign_box").hide();
    });
    $(".des_sign").click(function(){
    	$(".sign_box").hide();
    });
    
    //取消提醒
    $(".cancel").click(function(){
    	$(this).addClass("can_fin").css("cursor","default");
    });
    //任务弹框
	$(".mes_upload").click(function(){
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

    $(".close_x").click(function(){
    	$(".prev_box").hide();
    });
    var height = document.documentElement.clientHeight-80;
    $('.prev_cont').css("height",height).append("<iframe src='https://www.baidu.com/' width='100%' height=100%' style='border:none'></iframe>");
});
//消息切换
function messageFn(el){
	$(".mes_title li").find("span").removeClass("active");
	$(el).addClass('active');
	if($(el).text() == "任务提醒"){
		$(".from_contA").show();
		$(".from_contB").hide();
	}else{
		$(".from_contA").hide();
		$(".from_contB").show();
	}
}