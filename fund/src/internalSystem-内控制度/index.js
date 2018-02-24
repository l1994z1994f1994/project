$(function(){
    //新增制度
    $(".add_sys").click(function(){
    	$(".right_contA").hide();
    	$(".right_contB").show();
    });
    //查看
    $(".preview").click(function(){
    	$(".right_contA").hide();
    	$(".right_contC").show();
    });
    //编辑
    $(".download").click(function(){
    	$(".right_contA").hide();
    	$(".right_contD").show();
    });
    //保存，取消
    $(".save").click(function(){
    	$(".right_contD").hide();
    	$(".right_contA").show();
    });
    $(".cancel").click(function(){
        $(".right_contD").hide();
        $(".right_contA").hide();
        $(".right_contC").show();
    });
    $(".submit_sys").click(function(){
    	$(".right_contC").hide();
    	$(".right_contD").show();  
    });
    $(".submit_syss").click(function(){
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

	//分页
	$(".page_left").click(function(){
		var text = $(".page_num").text();
		if(text > 1){
			$(".page_num").text(text - 1);
		}
	});
	$(".page_right").click(function(){
		var text = Number($(".page_num").text());
		var cont = Number($(".all_num").text());
		if(text < cont){
			$(".page_num").text(text + 1);
		}
	});

    $(".submit_del").click(function(){
        $(".appor_box").show();
    });
    //添加投资人
    $(".submit_syss").click(function(){
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
        $(".right_li span").each(function(index){
           var text = $(".right_li span").eq(index).text();
           $(".add_person").before('<span class="change_name">'+text+'<img src="../commons/image/reset.png" onclick="resetFn(this)" style="width:14px"></span>');
        });
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

function lengthFn(el){
    var length = $(el).val().length;
    if(length >= 500){
        keyAction(el);
        $(el).val($(el).val().substring(0,500));
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