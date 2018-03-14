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

function inputFn(el){
    //td中已经有了input,则不需要响应点击事件
      if($(el).children("input").length > 0){
        return false;
      }else{
        $(el).empty();
      }
      if($(el).children("span").length > 0){
        return false;
      }
      var tdObj = $(el);
      var preText = tdObj.html();
      //得到当前文本内容
      var inputObj = $("<input type='text' onblur='onblurFn(this)' />");
      //创建一个文本框元素
      tdObj.html(""); //清空td中的所有元素
      inputObj.val(preText)
      .appendTo(tdObj)
      //把创建的文本框插入到tdObj子节点的最后
      .trigger("focus")
      //用trigger方法触发事件
      .trigger("select");
      inputObj.keyup(function(event){
        if(13 == event.which){//用户按下回车
          var text = $(el).val();
          tdObj.html(text);
        }// else if(27 == event.which){//ESC键
        //  tdObj.html(preText);
        // }
      });
      //已进入编辑状态后，不再处理click事件
      inputObj.click(function(){
        return false;
      });
}

function onblurFn(el){
  if($(el).val().trim().length < 1){
    $(el).parent().empty().html("请输入");
  }
}


