$(function(){
    $(".edit").click(function(){
        $(this).hide();
        $(".save").show();
        $(".canc").show();
        $("input").attr("disabled",false);
        $("textarea").attr("disabled",false);
        $(".add").show();
    });
    $(".canc").click(function(){
        $("textarea").attr("disabled",true);
        $("input").attr("disabled",true);
        $(this).hide();
        $(".save").hide();
        $(".edit").show();
        $(".add").hide();
    });
    $(".save").click(function(){
        $(this).hide();
        $(".canc").hide();
        $(".edit").show();
        $("input").attr("disabled",true);
        $("textarea").attr("disabled",true);
        $(".add").hide();
    });
    $(".appro").click(function(){
        // parent.approveSuccess(); 
        $(this).hide();
        $(".edit").show();
        $(".from_con").hide();
        $("input").attr("disabled",false);
        $("textarea").attr("disabled",false); 
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
    //新增
    $(".add").click(function(){
        $(".invernal_box").show();
    });
    $(".invernal_title img").click(function(){
        $(".invernal_box").hide();
    });
    $(".des_inver").click(function(){
        $(".invernal_box").hide();
    });
    $(".cert_inver").click(function(){
        $(".invernal_box").hide();
        var length = $(".table_tbody tr").length + 1;
        $(".table_tbody").append('<tr><td>'+length+'</td><td>'+$(".invernal_con").find("input").eq(0).val()+'</td><td>'+$(".invernal_con").find(".share").val()+'</td><td>'+$(".invernal_con").find(".earning").val()+'</td><td>'+$(".invernal_con").find("textarea").val()+'</td><td><span class="delete" onclick="remove(this)">删除</span></td></tr>');
    });
    $(".hint_lan").each(function(index){
        $(".hint_lan").eq(index).hover(function(){
            $(this).prev().show();
        },function(){
            $(this).prev().hide();
        });
    });
});
function removeFn(el){
    $(el).parent().parent().remove();
    if($(".table_tbody").find("tr").length <= 0){
        $(".no_data").show();
    }
}
function checkFn(el){
    var text = $(el).next().text();
    if(text == "是"){
        $(".lever_box").show();
    }else{
        $(".lever_box").hide();
    }
}
//份额类别
function selectFn(el){
    var text = $(el).val();
    if(text == 4){
        $(".rest_box").show();
    }else{
        $(".rest_box").hide();
    }
}
//收益安排
function optionFn(el){
    var num = $(el).val();
    if(num == 1){
        $(".set_box").show();
    }else{
        $(".set_box").hide();
    }
    if(num == 4){
        $(".perfor_box").hide();
        $(".float_box").show();
        $(".invernal_con").css("height","430px");
    }
    if(num == 5){
        $(".float_box").hide();
        $(".perfor_box").show();
        $(".invernal_con").css("height","430px");
    }else{
        $(".perfor_box").hide();
        $(".invernal_con").css("height","400px");
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

