$(function(){
	$("input").attr("disabled","disabled");
	$("select").attr("disabled","disabled");
	$(".new_add").hide();
	$(".new_change").hide();
	$(".edit").hide();
	$(".upload_box").css("cursor","default");
	//修改记录
	//若修改记录无内容，整体隐藏，$(".ament_none").show();
	//若修改记录有内容，整体显示，$(".ament_none").hide();
	$(".ament_img").click(function(){
		if($(this).hasClass("change")){
			$(this).attr("src","../commons/image/ament-right.png").removeClass("change");
			$(".from_ament").hide();
		}else{
			$(this).attr("src","../commons/image/ament-down.png").addClass("change");
			$(".from_ament").show();
		}
	});
	// 修改投资者
	$(".ament_name").click(function(){
		$(".record").hide();
		$("input").attr("disabled",false);
		$("select").attr("disabled",false);
		$(".new_add").show();
		$(".new_change").show();
		$(".edit").show();
		$(".upload_box").css("cursor","pointer");
	});
	//添加投资人
    $(".edit").click(function(){
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
	//添加人员
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


	//新增评级
    $(".new_add").click(function(){
    	$(".rate_box").show();
    });
    $(".rate_title img").click(function(){
    	$(".rate_box").hide();
    });
    $(".can_rate").click(function(){
    	$(".rate_box").hide();
    });
    $(".sure_rate").click(function(){
    	$(".rate_box").hide();
    });
	$(".no_check").click(function(){
		$(".from_sure").hide();
	});
	$(".yes_check").click(function(){
		$(".from_sure").show();
	});
	$(".opload_elect").click(function(){
		$(".risk").show();
		$(".elect").hide();
	});
	$(".fill_elect").click(function(){
		$(".risk").hide();
		$(".elect").show();
	});
	//新增转换
	$(".new_change").click(function(){
    	$(".conver_box").show();
    });
    $(".conver_title img").click(function(){
    	$(".conver_box").hide();
    });
    $(".can_conver").click(function(){
    	$(".conver_box").hide();
    });
    $(".sure_conver").click(function(){
    	$(".conver_box").hide();
    });
	var flag = true;
	$(".major_per").click(function(){
		$(".mon_box").hide();
		$(".com_box").show();
		flag = true;
	});
	$(".major_son").click(function(){
		$(".mon_box").show();
		$(".com_box").hide();
		flag = false;
	});
	$(".no_checked").click(function(){
		if(flag){
            $(".gao_box").show();
            $(".fa_box").hide();
		}else{
            $(".gao_box").hide();
            $(".fa_box").show();
		}
	});
	$(".yes_checked").click(function(){
		if(flag){
            $(".gao_box").hide();
			$(".fa_box").show();
		}else{
			$(".gao_box").show();
            $(".fa_box").hide();
		}
	});
    $(".from_cont").click(function(){
		var flag = $(".check_box").find("input").eq(0).is(":checked");
		var flga = $(".check_box").find("input").eq(1).is(":checked");
		if(flag && flga){
            $(".common").text("专业投资者");
            $(".new_rate").hide();
		}else{
			$(".common").text("普通投资者");
			$(".new_rate").show();
		}
    });
	
});

function addChange(){
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
}


function resetFn(el){
	$(el).parent().remove();
}