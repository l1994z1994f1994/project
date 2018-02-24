$(function(){
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