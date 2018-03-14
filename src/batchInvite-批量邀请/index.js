$(function(){
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
	    	// 	tdObj.html(preText);
	   		// }
	  	});
	  	//已进入编辑状态后，不再处理click事件
	  	inputObj.click(function(){
	   		return false;
	  	});
	});
	//新建
	$(".new_add").click(function(){
		$("table tbody").append('<tr><td></td><td></td><td></td><td><span class="delete" onclick="emptyFn(this)">清空</span></td></tr>')
	});
});
//清空
function emptyFn(el){
	$(el).parent().parent().remove();
}