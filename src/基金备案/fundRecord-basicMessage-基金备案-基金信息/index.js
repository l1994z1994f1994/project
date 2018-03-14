$(function(){
    $(".edit").click(function(){
        $(this).hide();
        $(".save").show();
        $(".canc").show();
        $("textarea").attr("disabled",false);
        $("select").attr("disabled",false);
        $("input").attr("disabled",false);
    });
    $(".canc").click(function(){
        $("textarea").attr("disabled",true);
        $("select").attr("disabled",true);
        $("input").attr("disabled",true);
        $(".input_date").val($(".input_date").val());
        $(this).hide();
        $(".save").hide();
        $(".edit").show();
    });
    $(".save").click(function(){
        $(".input_date").val($(".input_date").val());
        $(this).hide();
        $(".canc").hide();
        $(".edit").show();
        $("textarea").attr("disabled",true);
        $("select").attr("disabled",true);
        $("input").attr("disabled",true);
    });
    $(".appro").click(function(){
        $(this).hide();
        $(".edit").show();
        $(".from_con").hide();  
    });
    $(".record_title").each(function(index){
    	$(".record_title").eq(index).hover(function(){
            $(this).addClass("shadow_box");
    	},function(){
            $(this).removeClass("shadow_box");
    	});
    });
    $(".sure_btn").click(function(){
    	$(".del_box").hide();
    });
    $(".close_img").click(function(){
    	$(".del_box").hide();
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
function listFn(el){
	$(".role_name").removeClass("regime");
	$(el).addClass("regime");
}
function breakFn(el){
	var flag = $(el).is(":checked");
	if(flag){
		var text = $(el).parent().prev().text();
		if(text == "是否存在保本情形："){
			$(".del_text").text("私募基金管理人、私募基金销售机构不得向投资者承诺投资本金不受损失，请核实本产品是否合规！");
		}else{
			$(".del_text").text("私募基金管理人、私募基金销售机构不得向投资者承诺最低收益，请核实本产品是否合规！");
		}
        $(".del_box").show();
	}
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


function foreverFn(el){
    var flag = $(".forever input").is(":checked");
    if(flag){
        $(el).prev().val("9999-99-99");
    }else{
        $(el).prev().val("");
    }
}