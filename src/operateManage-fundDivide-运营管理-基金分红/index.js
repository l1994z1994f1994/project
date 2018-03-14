$(function(){
    $(".invest").click(function(){
        $(".task_box").show(); 
    });
    $(".certt_task").click(function(){
        $(".task_box").hide();
        var flag = $(".task_cont").find("input").eq(0).is(":checked");
        var text;
        if(flag){
            text = $(".task_cont").find("input").eq(0).next().text();
        }else{
            text = $(".task_cont").find("input").eq(1).next().text();
        }
        $("tbody").append('<tr><td>'+$("select option:selected").text()+'</td><td>'+text+'</td><td>'+$(".task_cont").find("input").eq(2).val()+'</td><td>'+$(".task_cont").find("input").eq(3).val()+'</td><td>21</td><td>张三</td><td>2017-09-09</td></tr>');
    });
    $(".dess_task").click(function(){
        $(".task_box").hide();
    });
    $(".task_title img").click(function(){
        $(".task_box").hide();
    });
    
});



