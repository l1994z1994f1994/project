$(function(){
	//提交审批
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
	//添加投资人
    $(".hand_title img").click(function(){
    	$(".hand_box").hide();
    });
    $(".hand_des").click(function(){
    	$(".hand_box").hide();
    });
    $(".hand_cert").click(function(){
    	$(".hand_box").hide();
    	$(".choose_person").empty();
    	$(".right_lii span").each(function(index){
    		var text = $(".right_lii span").eq(index).text();
			$(".choose_person").append('<span class="choose choose_name">'+text+'<img src="../commons/image/delete.png" class="dele_img" onclick="deleteImgFnn(this)"></span>');
		});
		$(".choose_person").append('<span class="choose" onclick="addPerson()">+选择投资人</span>');
    });
});
function addPerson(){
	$(".hand_box").show();
}
function patchFnn(el){
	if($(el).hasClass("change_img")){
		$(el).attr("src","image/no-patch.png").removeClass("change_img");
		deletFnn(el);
	}else{
		$(el).attr("src","image/check.png").addClass("change_img");
		deleFnn(el);
	}
}
function markFnn(el){
	$(el).parent().remove();
	deleteFnn(el);
}
function deletFnn(el){
	var text = $(el).prev().text();
	$(".right_lii span").each(function(index){
		if(text == $(".right_lii span").eq(index).text()){
			$(".right_lii").eq(index).remove();
		}
	});
}
function deleteFnn(el){
   var text = $(el).prev().text();
   $(".box_clear").each(function(index){
   	   if(text == $(".box_clear").eq(index).find("span").text()){
   	   	  $(".box_clear").eq(index).find("img").attr("src","image/no-patch.png").removeClass("change_img");
   	   }
   });
}
function deleFnn(el){
	var text = $(el).prev().text();
	var flag = false;
	$(".right_lii span").each(function(index){
		if(text == $(".right_lii span").eq(index).text()){
			flag = true;
		}
	});
	if(flag == false){
        $(".right_ull").append('<li class="clearfix right_lii"><span>'+text+'</span><img src="image/x-mark.png" class="right_img" onclick="markFnn(this)"></li>');
	}
}
function deleteImgFnn(el){
	$(el).parent().remove();
}



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