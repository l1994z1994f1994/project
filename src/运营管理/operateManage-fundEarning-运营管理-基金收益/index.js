$(function(){
    $("input").attr("disabled",true);
    
});
window.onresize = function(){
    document.getElementsByTagName("canvas")[0].style.width = document.getElementsByClassName("data_table")[0].offsetWidth + "px";
}

