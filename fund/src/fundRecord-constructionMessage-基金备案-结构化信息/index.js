$(function(){
    $("input").attr("disabled","disabled");
    $(".edit").click(function(){
        $(".add_date").show();
        $(".input_date").show().val($(".input_date").prev().text()).prev().hide();
        $(this).hide();
        $(this).next().next().show();
        $(this).next().show();
        $("input").attr("disabled",false);
    });
    $(".canc").click(function(){
        $("textarea").attr("disabled","disabled");
        $("select").attr("disabled","disabled");
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
        $(".table_tbody").append('<tr><td>'+length+'</td><td>'+$(".invernal_con").find("input").eq(0).val()+'</td><td>'+$(".invernal_con").find(".share").val()+'</td><td>'+$(".invernal_con").find(".earning").val()+'</td><td>'+$(".invernal_con").find("textarea").val()+'</td><td><span class="delete" onclick="deleteFn(this)">删除</span></td></tr>');
    });
    $(".hint_lan").each(function(index){
        $(".hint_lan").eq(index).hover(function(){
            $(this).prev().show();
        },function(){
            $(this).prev().hide();
        });
    });
});
function deleteFn(el){
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
        $(".invernal_con").css("height","480px");
    }else{
        if(num == 5){
            $(".float_box").hide();
            $(".perfor_box").show();
            $(".invernal_con").css("height","480px");
        }else{
            $(".perfor_box").hide();
            $(".invernal_con").css("height","450px");
        }
    }
}

