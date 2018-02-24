$(function(){
    $(".edit").click(function(){
        $(".add_date").show();
        $(".input_date").show().val($(".input_date").prev().text()).prev().hide();
        $(this).hide();
        $(this).next().next().show();
        $(this).next().show();
    });
    $(".canc").click(function(){
        $(".add_date").hide();
        $(".input_date").hide().prev().show();
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
    $(".handle_title img").click(function(){
        $(".handle_box").hide();
    });
    $(".des_hand").click(function(){
        $(".handle_box").hide();
    });
    $(".add_date").click(function(){
        $(".handle_box").show();
        $(this).prev().remove();
    });
    $(".cert_hand").click(function(){
        $(".handle_box").hide();
        var text = $(".right_ul").find("span").text();
        $(".add_date").before('<span>'+text+'</span>');
    });

    
});
function rightFn(el){
    if($(el).hasClass("change_img")){
        $(el).attr("src","image/right.png").removeClass("change_img");
        if($(el).parent().next().hasClass("branch_ul")){
            $(el).parent().next().hide();
        }
    }else{
        $(el).attr("src","image/down.png").addClass("change_img");
        if($(el).parent().next().hasClass("branch_ul")){
            $(el).parent().next().show();
        }
    }
}
function patchFn(el){
    if($(el).hasClass("change_img")){
        $(el).attr("src","image/no-patch.png").removeClass("change_img");
        deletFn(el);
    }else{
        $(el).attr("src","image/check.png").addClass("change_img");
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
   $(".clear_box").each(function(index){
       if(text == $(".clear_box").eq(index).find("span").text()){
          $(".clear_box").eq(index).find("img").attr("src","image/no-patch.png").removeClass("change_img");
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
        $(".right_ul").append('<li class="clearfix right_li"><span>'+text+'</span><img src="image/x-mark.png" class="right_img" onclick="markFn(this)"></li>');
    }
}




