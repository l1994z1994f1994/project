$(function(){
	//新建
	$(".new_add").click(function(){
		$("table tbody").append('<tr><td onclick="inputFn(this)">请输入</td><td onclick="inputFn(this)">请输入</td><td onclick="inputFn(this)">请输入</td><td><span class="delete" onclick="emptyFn(this)">清空</span></td></tr>')
	});
});
//清空
function emptyFn(el){
  $(el).parent().parent().find("input").parent().text("请输入");
	$(el).parent().parent().find("input").remove();
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
