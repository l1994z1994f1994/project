$(function(){
    $(".edit").click(function(){
        $(this).hide();
        $(this).next().next().show();
        $(this).next().show();
        $(".add_inves").show();
    });
    $(".canc").click(function(){
        $(this).hide();
        $(this).prev().hide();
        $(this).prev().prev().show();
        $(".add_inves").hide();
    });
    
    //新增投资者
    $(".add_title img").click(function(){
        $(".add_box").hide();
    });
    $(".can_add").click(function(){
        $(".add_box").hide();
    });
    $(".sure_add").click(function(){
        $(".add_box").hide();
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
//查看
function previewFn(el){
    
}
//新增投资者
function addinvesFn(el){
    $(".add_box").show();
}



