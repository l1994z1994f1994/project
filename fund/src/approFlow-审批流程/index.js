$(function(){
	//审批
	$(".first_box").css("background","#0089f1");
	$(".second_box").css({
		"border":"2px solid #c2e1f8",
		"background":"#0089f1",
	});
	$(".second_box").find("span").css("color","#0089f1");
	$(".third_box").css("background","linear-gradient(to right, #0089f1 0, #fff 100%)");
	//立即审批
	$(".save").click(function(){
		$(".appor_box").show();
	});
	$(".appor_title img").click(function(){
		$(".appor_box").hide();
	});
	$(".can_appor").click(function(){
		$(".appor_box").hide();
	});
	$(".sure_appor").click(function(){
		$(".appor_box").hide();
	});
	//转审
	$(".change").click(function(){
		$(".appor_box").hide();
		$(".change_box").show();
	});
	$(".change_title img").click(function(){
		$(".change_box").hide();
	});
	$(".can_change").click(function(){
		$(".change_box").hide();
		$(".appor_box").show();
	});
	$(".sure_change").click(function(){
		$(".change_box").hide();
	});
	//添加转审人员
    $(".handle_title img").click(function(){
    	$(".handle_box").hide();
    });
    $(".des_hand").click(function(){
    	$(".handle_box").hide();
    });
    $(".cert_hand").click(function(){
    	$(".handle_box").hide();
    	$(".input_boxa").empty();
    	$(".right_li span").each(function(index){
    		var text = $(".right_li span").eq(index).text();
			$(".input_boxa").append('<span class="change_add change_name">'+text+'</span>');
		});
		$(".input_boxa").append('<span class="change_add" onclick="addChange()">+添加</span>');
    });
});
//添加转审人员
function addChange(){
	$(".handle_box").show();
}
function rightFn(el){
	if($(el).hasClass("change_img")){
		$(el).attr("src","image/right.png").removeClass("change_img");
		if($(el).parent().next().hasClass("branch_ul")){
			$(el).parent().next().hide();
		}
	}else{
		$(el).attr("src","image/down.png").addClass("change_img");
		if($(el).parent().next().hasClass("branch_ul")){
			$(el).parent().next().show();
		}
	}
}
function patchFn(el){
	if($(el).hasClass("change_img")){
		$(el).attr("src","image/no-patch.png").removeClass("change_img");
		deletFn(el);
	}else{
		$(el).attr("src","image/check.png").addClass("change_img");
		deleFn(el);
	}
}
function markFn(el){
	$(el).parent().remove();
	deleteFn(el);
}
function deletFn(el){
	var text = $(el).prev().text();
	$(".right_li span").each(function(index){
		if(text == $(".right_li span").eq(index).text()){
			$(".right_li").eq(index).remove();
		}
	});
}
function deleteFn(el){
   var text = $(el).prev().text();
   $(".clearfix").each(function(index){
   	   if(text == $(".clearfix").eq(index).find("span").text()){
   	   	  $(".clearfix").eq(index).find("img").attr("src","image/no-patch.png").removeClass("change_img");
   	   }
   });
}
function deleFn(el){
	var text = $(el).prev().text();
	var flag = false;
	$(".right_li span").each(function(index){
		if(text == $(".right_li span").eq(index).text()){
			flag = true;
		}
	});
	if(flag == false){
        $(".right_ul").append('<li class="clearfix right_li"><span>'+text+'</span><img src="image/x-mark.png" class="right_img" onclick="markFn(this)"></li>');
	}
}