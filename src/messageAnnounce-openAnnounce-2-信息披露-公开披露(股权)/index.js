$(function(){
    //提交审批
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
    $(".add_up").click(function(){
        $(".rate_box").show();
    });
    $(".rate_title img").click(function(){
        $(".rate_box").hide();
    });
    $(".can_rate").click(function(){
        $(".rate_box").hide();
    });
    $(".sure_rate").click(function(){
        $(".rate_box").hide();

        $(".pre_table").append('<tr><td>'+$(".rate_box input").eq(0).val()+'</td><td>'+$(".rate_box input").eq(3).val()+'</td><td>'+$(".rate_box input").eq(4).val()+'</td><td>'+$(".rate_box select").eq(0).find("option:selected").text()+'</td><td>'+$(".rate_box input").eq(1).val()+'</td><td><span class="look">查看</span><span class="edit">编辑</span><span class="delete" onclick="deleteFn(this)">删除</span></td></tr>');
    });
    
});
function deleteFn(el){
    $(el).parent().parent().remove();
}


