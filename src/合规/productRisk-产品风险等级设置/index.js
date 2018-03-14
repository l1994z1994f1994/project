$(function(){
    //恢复默认
    $(".default").click(function(){
        $(".default_box").show();
    });
    $(".sure_def").click(function(){
        $(".default_box").hide();
        window.location.reload();
    });
    $(".can_def").click(function(){
        $(".default_box").hide();
    });
    $(".default_title img").click(function(){
        $(".default_box").hide();
    });
    //新增
    $(".add").click(function(){
        var length = $(".risk_grade").length + 1;
        $("tbody").append('<tr><td>R'+length+'</td><td class="risk_grade"><input type="text" placeholder="请输入风险等级名称"></td><td class="com_invest"><textarea placeholder="请输入风险等级划分标准"></textarea></td><td><span class="sure" onclick="editFn(this)">保存</span><span class="delete" onclick="deleteFn(this)">删除</span></td></tr>');
    });
});
function editFn(el){
    if($(el).text() == "编辑"){
        $(el).text("保存");
        $(el).next().show();
        var dom = $(el).parent().parent().find(".risk_grade");
        dom.html('<input type="text" value="'+dom.text()+'">');
        var com = $(el).parent().parent().find(".com_invest");
        com.html('<textarea>'+com.text()+'</textarea>');
    }else{
        $(el).text("编辑");
        $(el).next().hide();
        var dom = $(el).parent().parent();
        dom.find(".risk_grade").html(dom.find("input").val());
        var com = $(el).parent().parent();
        com.find(".com_invest").html(com.find("textarea").val());
    }
}
function deleteFn(el){
    $(el).parent().parent().remove();
}
