$(function(){
    $(".redeem").click(function(){
        $(".task_box").show();
        $(".task_btn").text("赎回");
        $(".task_box").find("input").val(""); 
    });
    $(".subscribe").click(function(){
        $(".task_box").show();
        $(".task_btn").text("申购");
        $(".task_box").find("input").val(""); 
    });
    $(".certt_task").click(function(){
        $(".task_box").hide();
        var flag = $(".money_box").find("input").eq(0).is(":checked");
        var text;
        if(flag){
            text = $(".money_box").find("input").eq(0).next().text();
        }else{
            text = $(".money_box").find("input").eq(1).next().text();
        }
        $("tbody").append('<tr><td>'+$(".task_btn").text()+'</td><td>'+$("select option:selected").text()+'</td><td>自然人</td><td>'+text+'</td><td>'+$(".task_cont").find("input").eq(2).val()+'</td><td>'+$(".task_cont").find("input").eq(3).val()+'</td><td>'+$(".task_cont").find("input").eq(1).val()+'</td><td>'+$(".task_cont").find("input").eq(4).val()+'</td><td>张三</td><td>2017-09-09</td><td><span class="delete" onclick="deleteFn(this)">删除</span></td></tr>');
    });
    $(".dess_task").click(function(){
        $(".task_box").hide();
    });
    $(".task_title img").click(function(){
        $(".task_box").hide();
    });

    $(".invest").click(function(){
        $(".table_boxB").show();
        $(".table_boxA").hide();
        $(this).addClass("cancel");
        $(".redeem").hide();
        $(".subscribe").hide();
    });
    $(".sur_btn").click(function(){
        $(".table_boxA").show();
        $(".table_boxB").hide();
        $(".invest").removeClass("cancel");
        $(".redeem").show();
        $(".subscribe").show();
    });
    $(".dele_btn").click(function(){
        $(".table_boxA").show();
        $(".table_boxB").hide();
        $(".invest").removeClass("cancel");
        $(".redeem").show();
        $(".subscribe").show();
    });

    $(".del_title").click(function(){
       $(".del_box").hide();
    });
    $(".can_btn").click(function(){
       $(".del_box").hide();
    });
});
function deleteFn(el){
  $(".del_box").show();
  $(".sure_btn").click(function(){
    $(el).parent().parent().remove();
  });
}

function inputFn(el){
    $(el).removeClass("td_text")
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
      var inputObj = $("<input type='text' onblur='onblurFn(this)' value='"+$(el).text()+"' />");
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
    $(el).parent().empty().html("请输入").addClass("td_text");
  }
}


