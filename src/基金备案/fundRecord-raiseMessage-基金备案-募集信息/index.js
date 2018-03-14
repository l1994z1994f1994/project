$(function(){
    $(".edit").click(function(){
        $(this).hide();
        $(".save").show();
        $(".canc").show();
        $(".add_organ").show();
        $("input").attr("disabled",false);
    });
    $(".canc").click(function(){
        $(this).hide();
        $(".save").hide();
        $(".edit").show();
        $(".add_organ").hide();
        $("input").attr("disabled",true);
    });
    $(".save").click(function(){
        $(this).hide();
        $(".canc").hide();
        $(".edit").show();
        $(".add_organ").hide();
        $("input").attr("disabled",true);
    });
    //提示
    $(".wen_img").hover(function(){
        $(".supervise").show();
    },function(){
        $(".supervise").hide();
    });

    
   $(".appro").click(function(){
        // parent.approveSuccess(); 
        $(this).hide();
        $(".edit").show();
        $(".from_con").hide();
        $("input").attr("disabled",false); 
    });
    //新增
    $(".add_organ").click(function(){
        $(".add_box").show();
    });
    $(".add_title img").click(function(){
        $(".add_box").hide();
    });
    $(".can_add").click(function(){
        $(".add_box").hide();
    });
    $(".sure_add").click(function(){
        $(".add_box").hide();
        $(".table_tbody").append('<tr><td>'+$(".add_grade").find("input").eq(0).val()+'</td><td>'+$(".add_grade").find("input").eq(1).val()+'</td><td>'+$(".add_grade").find("input").eq(2).val()+'</td><td><span class="preview">编辑</span><span class="delete" onclick="deleteTrFn(this)">删除</span></td></tr>')
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


function deleteTrFn(el){
    $(el).parent().parent().remove();
}

function threeFn(el){
    $(".acco_box").show();
}
function thrFn(el){
    $(".acco_box").hide();
}

function fourFn(el){
    $(".twelev_box").show();
}
function fouFn(el){
    $(".twelev_box").hide();
}

function fiveFn(el){
    $(".thirt_box").show();
}
function fivFn(el){
    $(".thirt_box").hide();
}

function sevenFn(el){
    $(".raise_show").hide();
}
function sevFn(el){
    $(".raise_show").show();
}
function eightFn(el){
    $(el).parent().next().show();
}
function eighFn(el){
    $(el).parent().next().hide();
}
//直销
function checkFn(el){
    var flag = $(el).is(":checked");
    if(flag){
        $(".trus_boxa").show();
        $(".trus_boxa .trus_tee").append('<input type="text" name="" placeholder="请输入托管人名称"><img src="../commons/image/delete.png" onclick="removeFn(this)" class="dele_img">');
    }else{
        $(".trus_boxa").hide();
    }
}
//代销
function checkedFn(el){
    var flag = $(el).is(":checked");
    if(flag){
        $(".trus_boxb").show();
        $(".trus_boxb .trus_tee").append('<input type="text" name="" placeholder="请输入托管人名称"><img src="../commons/image/delete.png" onclick="removeFn(this)" class="dele_img">');
    }else{
        $(".trus_boxb").hide();
    }
}
//添加机构名称
function addFn(el){
    if($(el).next().find("input").length >= 5){
        $(el).hide();
    }
    $(el).next().append('<input type="text" name="" placeholder="请输入托管人名称"><img src="../commons/image/delete.png" onclick="removeFn(this)" class="dele_img">');
};
function removeFn(el){
    if($(el).parent().find("input").length <= 6){
        $(el).parent().prev().show();
    }
    $(el).prev().remove();
    $(el).remove();
}
function cationFn(el){
    var flag = $(el).is(":checked");
    if(flag){
        $(".trus_appli").find("input").hide();
        $(".trus_appli").find(".dele_img").hide();
        $(".trus_man").hide();
    }else{
        $(".trus_appli").find("input").show();
        $(".trus_appli").find(".dele_img").show();
        $(".trus_man").show();
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