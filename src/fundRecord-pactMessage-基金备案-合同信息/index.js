$(function(){
    $("input").attr("disabled",true);
    $("textarea").attr("disabled",true);
    $(".edit").click(function(){
        $(".add_date").show();
        $(".input_date").show().val($(".input_date").prev().text()).prev().hide();
        $(this).hide();
        $(this).next().next().show();
        $(this).next().show();
        $("input").attr("disabled",false);
        $("textarea").attr("disabled",false);
        $(".from_con").show();
    });
    $(".canc").click(function(){
        $(".add_date").hide();
        $(".input_date").hide().prev().show();
        $(this).hide();
        $(this).prev().hide();
        $(this).prev().prev().show();
        $("input").attr("disabled",true);
        $("textarea").attr("disabled",true);
        $(".from_con").hide();
    });

    $(".appro").click(function(){
        parent.approveSuccess();  
    });

    $(".take_img").click(function(){
        $(".catalog").hide();
        $(".let_img").show();
        $(".catalog_box").css("width","100%");
    });
    $(".let_img").click(function(){
        $(".catalog").show();
        $(this).hide();
        $(".catalog_box").css("width","80%");
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
