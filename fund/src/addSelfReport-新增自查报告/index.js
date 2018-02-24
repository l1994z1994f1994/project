$(function(){
	//点击新增
	$(".cert_hint").click(function(){
		$(".hint_box").hide();
	});
	$(".hint_x").click(function(){
		$(".hint_box").hide();
	});
	
	//添加投资人
    $(".add_sys").click(function(){
        if($("input").val().trim().length > 0 ){
           $(".appor_box").show();
        }else{
           $(".hint_box").show();
        }
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
    /*$(".handle_title img").click(function(){
        $(".handle_box").hide();
    });
    $(".des_hand").click(function(){
        $(".handle_box").hide();
    });
    $(".cert_hand").click(function(){
        $(".handle_box").hide();
        $(".right_li span").each(function(index){
           var text = $(".right_li span").eq(index).text();
           $(".add_person").before('<span class="change_name">'+text+'<img src="../commons/image/reset.png" style="width:14px;" onclick="resetFn(this)"></span>');
        });
    });*/
    
});
function lengthFn(el){
	var length = $(el).text().length;
	if(length >= 500){
        keyAction(el);
        $(el).text($(el).text().substring(0,500));
	}
}
function keyAction(obj) {
	var textbox = $(obj);
	var sel = window.getSelection();
	var range = document.createRange();
	// range.selectNodeContents(textbox);
	range.collapse(false);
	sel.removeAllRanges();
	sel.addRange(range);
}






    /*var sole;
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
    $(".handle_title img").click(function(){
        $(".handle_box").hide();
    });
    $(".des_hand").click(function(){
        $(".handle_box").hide();
    });
    $(".cert_hand").click(function(){
        $(".handle_box").hide();
        $(".right_li span").each(function(index){
           var text = $(".right_li span").eq(index).text();
           $(".add_person").before('<span class="change_name">'+text+'<img src="../commons/image/reset.png" style="width:14px;" onclick="resetFn(this)"></span>');
        });
    });
    function resetFn(el){
        $(el).parent().remove();
    }*/