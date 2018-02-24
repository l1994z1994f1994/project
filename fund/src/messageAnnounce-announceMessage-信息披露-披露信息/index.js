$(function(){

    $(".edit").click(function(){
        $(".add_box").show();
        $(".new_box").hide();
        $(".add_role").hide();
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
function lookFn(el){
    $(".look_box").show();
    $(".new_box").hide();
    $(".add_role").hide();
}


