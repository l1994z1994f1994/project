$(function(){
    $(".edit").click(function(){
        $(".add_date").show();
        $(".input_date").show().val($(".input_date").prev().text()).prev().hide();
        $(this).hide();
        $(this).next().next().show();
        $(this).next().show();
        $(".error_img").show();
        $(".file_upload").show();
    });
    $(".canc").click(function(){
        $(".add_date").hide();
        $(".input_date").hide().prev().show();
        $(this).hide();
        $(this).prev().hide();
        $(this).prev().prev().show();
        $(".error_img").hide();
        $(".file_upload").hide();
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
   
});

function removeFn(el){
    $(el).parent().remove();
}
