$(function(){
    $(".appro").click(function(){
        // parent.approveSuccess();  
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
function lookFn(el){
    $(".look_box").show();
    $(".new_box").hide();
    $(".add_role").hide();
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


function inputFn(el){
    //td中已经有了input,则不需要响应点击事件
      if($(el).children("input").length > 0){
        return false;
      }else{
        $(el).empty();
      }
      if($(el).children("span").length > 0){
        return false;
      }
      var tdObj = $(el);
      var preText = tdObj.html();
      //得到当前文本内容
      var inputObj = $("<input type='text' onblur='onblurFn(this)' />");
      //创建一个文本框元素
      tdObj.html(""); //清空td中的所有元素
      inputObj.val(preText)
      .appendTo(tdObj)
      //把创建的文本框插入到tdObj子节点的最后
      .trigger("focus")
      //用trigger方法触发事件
      .trigger("select");
      inputObj.keyup(function(event){
        if(13 == event.which){//用户按下回车
          var text = $(el).val();
          tdObj.html(text);
        }// else if(27 == event.which){//ESC键
        //  tdObj.html(preText);
        // }
      });
      //已进入编辑状态后，不再处理click事件
      inputObj.click(function(){
        return false;
      });
}

function onblurFn(el){
  if($(el).val().trim().length < 1){
    $(el).parent().empty().html("请输入");
  }
}


