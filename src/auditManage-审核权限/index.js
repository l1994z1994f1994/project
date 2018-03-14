$(function(){
	$(".handle_title img").click(function(){
    	$(".handle_box").hide();
    });
    $(".des_hand").click(function(){
    	$(".handle_box").hide();
    });
});
function deleteImgFn(el){
	stopPropagation();
	$(el).parent().text('+添加').css("color","#0089f1").attr("onclick","addFn(this)");
}
function editFn(el){
	$(el).hide();
	$(el).parent().parent().find(".dele_img").show();
	$(el).next().show();
	$(el).next().next().show();	
}
function backFn(el){
	$(el).prev().hide();
	$(el).hide();
	$(el).prev().prev().show();
	$(el).parent().parent().find(".dele_img").hide();
	window.location.reload();
}
function successFn(el){
	$(el).next().hide();
	$(el).hide();
	$(el).prev().show();
	$(el).parent().parent().find(".dele_img").hide();
}
function addFn(el){
	$(".handle_box").show();
	$(".cert_hand").click(function(){
    	$(".handle_box").hide();
        $(el).html('张三<img src="image/delete.png" class="dele_img" onclick="deleteImgFn(this)">').css("color","#333");
    });
}
//添加审批人
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
