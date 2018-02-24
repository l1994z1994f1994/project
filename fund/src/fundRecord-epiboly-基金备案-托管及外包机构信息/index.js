$(function(){
    $(".edit").click(function(){
        $(this).hide();
        $(this).next().next().show();
        $(this).next().show();
    });
    $(".canc").click(function(){
        $(this).hide();
        $(this).prev().hide();
        $(this).prev().prev().show();
    });

    $(".appro").click(function(){
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
    //新增
    $(".add_title img").click(function(){
        $(".add_box").hide();
    });
    $(".can_add").click(function(){
        $(".add_box").hide();
    });
    $(".sure_add").click(function(){
        $(".add_box").hide();
    });

    $(".new_title img").click(function(){
        $(".new_box").hide();
    });
    $(".can_new").click(function(){
        $(".new_box").hide();
    });
    $(".sure_new").click(function(){
        $(".new_box").hide();
    });

    $(".add_span").click(function(){
        $(".trus_tee").append('<input type="text" name="" placeholder="请输入托管人名称">');
    });
});

//新增投资者
function addOrganFn(el){
    $(".add_box").show();
}
function addCounseFn(el){
    $(".new_box").show();
}

//添加
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
        $(".right_img").attr("src","../commons/image/no-patch.png").removeClass("change_img");
        $(el).attr("src","../commons/image/check.png").addClass("change_img");
        deleFn(el);
    }
}
function markFn(el){
    $(el).parent().remove();
    deleteFn(el);
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
   $(".clear_li").each(function(index){
       if(text == $(".clear_li").eq(index).find("span").text()){
          $(".clear_li").eq(index).find("img").attr("src","../commons/image/no-patch.png").removeClass("change_img");
       }
   });
}
function deleFn(el){
    $(".right_ul").empty();
    var text = $(el).prev().text();
    var flag = false;
    $(".right_li span").each(function(index){
        if(text == $(".right_li span").eq(index).text()){
            flag = true;
        }
    });
    if(flag == false){
        $(".right_ul").append('<li class="clearfix right_li"><span>'+text+'</span><img src="../commons/image/x-mark.png" class="right_img" onclick="markFn(this)"></li>');
    }
}

function sureFn(el){
    $(".type_box").hide();
    $(".trus_box").show();
}
function cancelFn(el){
    $(".type_box").show();
    $(".trus_box").hide();
}

function organNoFn(el){
    $(".add_organ").hide();
}
function organFn(el){
    $(".add_organ").show();
}

function counseNoFn(el){
    $(".add_counse").hide();
}
function counseFn(el){
    $(".add_counse").show();
}

function checkFn(el){
    $(".num_a").show();
    $(".num_b").hide();
}
function checkedFn(el){
    $(".num_a").hide();
    $(".num_b").show();
}

function checkboxFn(el){
    $(".num_d").show();
    $(".num_c").hide();
}
function checkboxedFn(el){
    $(".num_d").hide();
    $(".num_c").show();
}

function deleteTrFn(el){
    $(el).parent().parent().remove();
}