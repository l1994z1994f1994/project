$(function(){
    $("textarea").attr("disabled","disabled");
    $("select").attr("disabled","disabled");
    $(".edit").click(function(){
        $(this).hide();
        $(this).next().next().show();
        $(this).next().show();
        $("textarea").attr("disabled",false);
        $("select").attr("disabled",false);
    });
    $(".canc").click(function(){
        $("textarea").attr("disabled","disabled");
        $("select").attr("disabled","disabled");
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
    
});


