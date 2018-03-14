$(function(){
    $(".edit").click(function(){
        $(this).hide();
        $(".save").show();
        $(".canc").show();
        $(".add_counse").show();
        $(".add_organ").show();
        $("input").attr("disabled",false);
        $("textarea").attr("disabled",false);
    });
    $(".canc").click(function(){
        $(this).hide();
        $(".save").hide();
        $(".edit").show();
        $(".add_counse").hide();
        $(".add_organ").hide();
        $("input").attr("disabled",true);
        $("textarea").attr("disabled",true);
    });
    $(".save").click(function(){
        $(this).hide();
        $(".canc").hide();
        $(".edit").show();
        $(".add_counse").hide();
        $(".add_organ").hide();
        $("input").attr("disabled",true);
        $("textarea").attr("disabled",true);
    });

    $(".appro").click(function(){
        // parent.approveSuccess(); 
        $(this).hide();
        $(".edit").show();
        $(".from_con").hide();
        $("input").attr("disabled",false);
        $("textarea").attr("disabled",false);  
    });
    
    //新增
    $(".add_title img").click(function(){
        $(".add_box").hide();
    });
    $(".can_add").click(function(){
        $(".add_box").hide();
    });
    $(".new_title img").click(function(){
        $(".new_box").hide();
    });
    $(".can_new").click(function(){
        $(".new_box").hide();
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

    $(".wen_img").each(function(index){
        $(".wen_img").eq(index).hover(function(){
            $(".trust").eq(index).show();
        },function(){
            $(".trust").eq(index).hide();
        });
    });
});

//新增投资者
var num = 0;
var num_message;
var mn = 0;
var mn_message;
function addOrganFn(el){
    $(".add_box").show();
    $(".add_box").find("input").val("");
    $(".serve").removeAttr("checked");
    num = 0;
}
function addCounseFn(el){
    $(".new_box").show();
    $(".new_box").find("input").val("");
    $(".new_box").find("textarea").val("");
    $(".new_grade").find("select").eq(0).val(['0']).trigger('change');
    $(".new_grade").find("select").eq(1).val(['0']).trigger('change');
    mn = 0;
}

function previewFn(el){
    $(".add_box").show();
    num = 1;
    num_message = $(el).parent().parent();
    var register = num_message.find("td").eq(0).text();
    if(register == "是"){
        $(".add_grade").find("input").eq(0).attr("checked","checked");
        $(".add_grade").find("input").eq(1).removeAttr("checked");
        $(".num_a").show().find("input").val("");
    }else{
        $(".add_grade").find("input").eq(1).attr("checked","checked");
        $(".add_grade").find("input").eq(0).removeAttr("checked");
        $(".num_a").hide().find("input").val("");
    }
    $(".add_grade").find("input").eq(2).val(num_message.find("td").eq(1).text());
    $(".add_grade").find("input").eq(3).val(num_message.find("td").eq(2).text());
    $(".add_grade").find("input").eq(4).val(num_message.find("td").eq(3).text());
    var arr = num_message.find("td").eq(4).text().split();
    $(".serve").each(function(index){
        for(var i = 0; i < arr.length; i++){
            if($(".serve").eq(index).next().text() == arr[index]){
                $(".serve").eq(index).attr("checked","checked")
            }else{
                $(".serve").eq(index).removeAttr("checked")
            }
        };
    });
}
function previewTrFn(el){
    $(".new_box").show();
    mn = 1;
    mn_message = $(el).parent().parent();
    var optionA = $(".new_grade").find("select").eq(0).find("option");
    var one = 0;
    optionA.each(function(index){
        if(mn_message.find("td").eq(0).text() == optionA.eq(index).text()){
           one = index;
        }
    });
    var optionB = $(".new_grade").find("select").eq(1).find("option");
    var two = 0;
    optionB.each(function(index){
        if(mn_message.find("td").eq(1).text() == optionB.eq(index).text()){
           two = index;
        }
    });
    $(".new_grade").find("select").eq(0).val([one]).trigger('change');
    $(".new_grade").find("select").eq(1).val([two]).trigger('change');
    var regist = mn_message.find("td").eq(2).text();
    if(regist == "是"){
        $(".new_grade").find("input").eq(0).attr("checked","checked");
        $(".new_grade").find("input").eq(1).removeAttr("checked");
        $(".num_d").show().find("input").val("");
    }else{
        $(".new_grade").find("input").eq(1).attr("checked","checked");
        $(".new_grade").find("input").eq(0).removeAttr("checked");
        $(".num_d").hide().find("input").val("");
    }
    $(".new_grade").find("input").eq(2).val(mn_message.find("td").eq(3).text());
    $(".new_grade").find("input").eq(3).val(mn_message.find("td").eq(4).text());
    $(".new_grade").find("input").eq(4).val(mn_message.find("td").eq(5).text());
    $(".new_grade").find("input").eq(5).val(mn_message.find("td").eq(6).text());
    $(".new_grade").find("textarea").eq(0).val(mn_message.find("td").eq(7).text());
}
function surefFn(el){
    var flag = $(".add_grade").find("input").eq(0).is(":checked");
    if(flag){
        flag = "是"
    }else{
        flag = "否"
    }
    var arr = [];
    $(".serve").each(function(index){
        var check = $(".serve").eq(index).is(":checked");
        if(check){
            arr.push($(".serve").eq(index).next().text());
        }
    });
    if(num == 0){
        $(".table_tbod").append('<tr><td>'+flag+'</td><td>'+$(".add_grade").find("input").eq(2).val()+'</td><td>'+$(".add_grade").find("input").eq(3).val()+'</td><td>'+$(".add_grade").find("input").eq(4).val()+'</td><td>'+arr.toString()+'</td><td><span class="preview" onclick="previewFn(this)">编辑</span><span class="delete" onclick="deleteTrFn(this)">删除</span></td></tr>');
    }else{
         num_message.empty();
         num_message.html('<td>'+flag+'</td><td>'+$(".add_grade").find("input").eq(2).val()+'</td><td>'+$(".add_grade").find("input").eq(3).val()+'</td><td>'+$(".add_grade").find("input").eq(4).val()+'</td><td>'+arr.toString()+'</td><td><span class="preview" onclick="previewFn(this)">编辑</span><span class="delete" onclick="deleteTrFn(this)">删除</span></td>');
         num = 0;
    }
    $(".add_box").hide();
}
function suretFn(el){
    var flag = $(".new_grade").find("input").eq(0).is(":checked");
    if(flag){
        flag = "是"
    }else{
        flag = "否"
    }
    if(mn == 0){
        $(".tab_bod").append('<tr><td>'+$(".new_grade").find("select").eq(0).find("option:selected").text()+'</td><td>'+$(".new_grade").find("select").eq(1).find("option:selected").text()+'</td><td>'+flag+'</td><td>'+$(".new_grade").find("input").eq(2).val()+'</td><td>'+$(".new_grade").find("input").eq(3).val()+'</td><td>'+$(".new_grade").find("input").eq(4).val()+'</td><td>'+$(".new_grade").find("input").eq(5).val()+'</td><td>'+$(".new_grade").find("textarea").eq(0).val()+'</td><td><span class="preview" onclick="previewFn(this)">编辑</span><span class="delete" onclick="deleteTrFn(this)">删除</span></td></tr>');
    }else{
        mn_message.empty();
        mn_message.html('<td>'+$(".new_grade").find("select").eq(0).find("option:selected").text()+'</td><td>'+$(".new_grade").find("select").eq(1).find("option:selected").text()+'</td><td>'+flag+'</td><td>'+$(".new_grade").find("input").eq(2).val()+'</td><td>'+$(".new_grade").find("input").eq(3).val()+'</td><td>'+$(".new_grade").find("input").eq(4).val()+'</td><td>'+$(".new_grade").find("input").eq(5).val()+'</td><td>'+$(".new_grade").find("textarea").eq(0).val()+'</td><td><span class="preview" onclick="previewFn(this)">编辑</span><span class="delete" onclick="deleteTrFn(this)">删除</span></td>');
        mn = 0;
    }
    $(".new_box").hide();
}

//添加托管人
function addNameFn(el){
    if($(".trus_tee input").length >= 5){
        $(el).hide();
    }
    $(".trus_tee").append('<input type="text" name="" placeholder="请输入托管人名称"><img src="../commons/image/delete.png" onclick="removeFn(this)" class="dele_img">');
}
function removeFn(el){
    $(el).prev().remove();
    $(el).remove();
    if($(".trus_tee input").length < 6){
        $(".add_span").show();
    }
}

//添加
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

function sureFn(el){
    $(".trus_box").show();
    $(".trus_tee").append('<input type="text" name="" placeholder="请输入托管人名称"><img src="../commons/image/delete.png" onclick="removeFn(this)" class="dele_img">');
}
function cancelFn(el){
    $(".trus_box").hide();
}

function organNoFn(el){
    $(".add_organ").hide();
    $(".from_organ").hide();
}
function organFn(el){
    $(".add_organ").show();
    $(".from_organ").show();
}

function counseNoFn(el){
    $(".add_counse").hide();
}
function counseFn(el){
    $(".add_counse").show();
}

function checkFn(el){
    $(".num_a").show();
}
function checkedFn(el){
    $(".num_a").hide();
}

function checkboxFn(el){
    $(".num_d").show();
}
function checkboxedFn(el){
    $(".num_d").hide();
}

function deleteTrFn(el){
    $(el).parent().parent().remove();
}
