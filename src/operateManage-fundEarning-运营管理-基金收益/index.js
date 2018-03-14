$(function(){
    // $("input").attr("disabled","disabled");
    $(".edit").click(function(){
        $(this).hide();
        $(this).next().next().show();
        $(this).next().show();
        // $("input").attr("disabled",false);
    });
    $(".canc").click(function(){
        // $("input").attr("disabled","disabled");
        $(this).hide();
        $(this).prev().hide();
        $(this).prev().prev().show();
    });
    $(".appro").click(function(){
        // $("input").attr("disabled","disabled");
        $(this).hide();
        $(this).next().hide();
        $(this).prev().show();
    });
    
});
window.onresize = function(){
    document.getElementsByTagName("canvas")[0].style.width = document.getElementsByClassName("data_table")[0].offsetWidth + "px";
}

