$(function(){
	$(".role_name").eq(0).addClass("regime");
	$("input").attr("disabled","disabled");
	$("select").attr("disabled","disabled");
	$("textarea").attr("disabled","disabled");
	//修改记录
	$(".ament_img").click(function(){
		if($(this).hasClass("change")){
			$(this).attr("src","../commons/image/ament-right.png").removeClass("change");
			$(".from_ament").hide();
		}else{
			$(this).attr("src","../commons/image/ament-down.png").addClass("change");
			$(".from_ament").show();
		}
	});
	$(".edita").click(function(){
		$("input").attr("disabled",false);
		$("select").attr("disabled",false);
		$("textarea").attr("disabled",false);
		$(this).hide();
		$(this).next().show();
		$(this).next().next().show();
		$(".err_img").show();
		$(".record").hide();
		$(".from_con").show();
		$(".division").show();
	});
    $(".can").click(function(){
    	$(this).hide();
    	$(".save").hide();
    	$("input").attr("disabled","disabled");
		$("select").attr("disabled","disabled");
		$("textarea").attr("disabled","disabled");
		$(".edita").show();
		$(".err_img").hide();
		$(".record").show();
		$(".from_con").hide();
		$(".division").hide();
    });
    $(".save").click(function(){
    	// parent.approveSuccess();
    	$(".can").click();
    	$(".can").hide();
    });

	$(".orgin").each(function(index){
		$(".orgin").eq(index).hover(function(){
			$(this).next().show();
		},function(){
            $(this).next().hide();
		});
	});

	$(".handle_title img").click(function(){
	    $(".handle_box").hide();
	});
	$(".des_hand").click(function(){
	    $(".handle_box").hide();
	});
	$(".cert_hand").click(function(){
	    $(".handle_box").hide();
      $(".add_person").parent().find(".change_name").remove();
	    $(".right_li span").each(function(index){
	       var text = $(".right_li span").eq(index).text();
	       $(".add_person").before('<span class="change_name">'+text+'<img src="../commons/image/reset.png" style="width:14px;" onclick="resetFn(this)"></span>');
	    });
	});
});
var sole;
function addChange(el){
   if($(el).hasClass("add_person")){
      sole = 1;
   }else{
      sole = 0;
   }
   $(".handle_box").show();
}

function rightFn(el){
    if($(el).hasClass("change_img")){
        $(el).attr("src","../commons/image/right.png").removeClass("change_img");
        if($(el).parent().next().hasClass("branch_ul")){
            $(el).parent().next().hide();
        }
    }else{
        $(el).attr("src","../commons/image/down.png").addClass("change_img");
        if($(el).parent().next().hasClass("branch_ul")){
            $(el).parent().next().show();
        }
    }
}
function patchFn(el){
    if($(el).hasClass("change_img")){
        $(el).attr("src","../commons/image/no-patch.png").removeClass("change_img");
        deletFn(el);
    }else{
        $(el).attr("src","../commons/image/check.png").addClass("change_img");
        deleFn(el);
    }
}
function markFn(el){
    var text = $(el).prev().text();
    $(el).parent().remove();
    var arr = $(".clear_box span");
    arr.each(function(index){
        if(arr.eq(index).text() == text){
            arr.eq(index).next().attr("src","../commons/image/no-patch.png").removeClass("change_img");
        }
    });
    
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
   $(".clear_box").each(function(index){
       if(text == $(".clear_box").eq(index).find("span").text()){
          $(".clear_box").eq(index).find("img").attr("src","../commons/image/no-patch.png").removeClass("change_img");
       }
   });
}
function deleFn(el){
    if(sole == 1){
        var text = $(el).prev().text();
        var flag = false;
        $(".right_li span").each(function(index){
          if(text == $(".right_li span").eq(index).text()){
            flag = true;
          }
        });
        if(flag == false){
              $(".right_ul").append('<li class="clearfix right_li"><span>'+text+'</span><img src="../commons/image/x-mark.png" class="right_image" onclick="markFn(this)"></li>');
        }
    }else{
        $(".right_ul").empty();
        $(".branch_ul .right_img").attr("src","../commons/image/no-patch.png").removeClass("change_img");
        $(el).attr("src","../commons/image/check.png").addClass("change_img");
        var text = $(el).prev().text();
        $(".right_ul").append('<li class="clearfix right_li"><span>'+text+'</span><img src="../commons/image/x-mark.png" class="right_image" onclick="markFn(this)"></li>');
    }
}
function resetFn(el){
    $(el).parent().remove();
}
