$(function(){
    $(".invernal_title img").click(function(){
        $(".invernal_box").hide();
    });
    $(".des_inver").click(function(){
        $(".invernal_box").hide();
    });
    $(".cert_inver").click(function(){
        $(".invernal_box").hide();
    });
    $(".invest").click(function(){
        $(".table_boxB").show();
        $(".table_boxA").hide();
        $(this).addClass("cancel");
    });
    $(".sur_btn").click(function(){
        $(".table_boxA").show();
        $(".table_boxB").hide();
        $(".invest").removeClass("cancel");
    });
    $(".dele_btn").click(function(){
        $(".table_boxA").show();
        $(".table_boxB").hide();
        $(".invest").removeClass("cancel");
    });
    

    //编辑表格
    $("td").click(function(event){
        //td中已经有了input,则不需要响应点击事件
        if($(this).children("input").length > 0){
            return false;
        }
        if($(this).children("span").length > 0){
            return false;
        }
        var tdObj = $(this);
        var preText = tdObj.html();
        //得到当前文本内容
        var inputObj = $("<input type='text' />");
        //创建一个文本框元素
        tdObj.html(""); //清空td中的所有元素
        inputObj.width(tdObj.width())
        //设置文本框宽度与td相同
        .height(tdObj.height())
        .css({border:"0px",fontSize:"14px",font:"微软雅黑",textIndent:"12px"})
        .val(preText)
        .appendTo(tdObj)
        //把创建的文本框插入到tdObj子节点的最后
        .trigger("focus")
        //用trigger方法触发事件
        .trigger("select");
        inputObj.keyup(function(event){
            if(13 == event.which){//用户按下回车
                var text = $(this).val();
                tdObj.html(text);
            }// else if(27 == event.which){//ESC键
            //  tdObj.html(preText);
            // }
        });
        //已进入编辑状态后，不再处理click事件
        inputObj.click(function(){
            return false;
        });
    });
});
function updateFn(el){
    $(".invernal_box").show();
    var cont = $(el).parent().parent().find("td").eq(0).text();
    $(".invernal_con").find("input").eq(1).val(cont);
    var text = $(el).parent().parent().find("td").eq(1).text();
    $(".invernal_con").find("input").eq(2).val(text);
    $(".cert_inver").click(function(){
        $(".invernal_box").hide();
        $(el).parent().parent().find("td").eq(0).text($(".invernal_con").find("input").eq(1).val());
        $(el).parent().parent().find("td").eq(1).text($(".invernal_con").find("input").eq(2).val());
    });
}


