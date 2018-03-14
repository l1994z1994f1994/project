$(function(){
	stopFn();
	$(".del_title img").click(function(){
		$(".del_box").hide();
	});
	$(".can_btn").click(function(){
		$(".del_box").hide();
	});
	//分页
	$(".page_left").click(function(){
		var text = $(".page_num").text();
		if(text > 1){
			$(".page_num").text(text - 1);
		}
	});
	$(".page_right").click(function(){
		var text = Number($(".page_num").text());
		var cont = Number($(".all_num").text());
		if(text < cont){
			$(".page_num").text(text + 1);
		}
	});
})
function stopFn(){
	$(".use").each(function(index){
		if($(".use").eq(index).text() == "禁用中"){
			$(".use").eq(index).css("color","#999");
		}else{
			$(".use").eq(index).css("color","#333");
		}
	})
	$(".useing").each(function(index){
		if($(".useing").eq(index).text() == "禁用"){
			$(".useing").eq(index).css("color","#ec3b3b");
		}else{
			$(".useing").eq(index).css("color","#0089f1");
		}
	})
}
//删除
function deleteFn(el){
	var cont = $(el).parent().parent().find(".risk_title").text();
	$(".del_text").text("确定将"+cont+"？");
	$(".del_risk").text("删除问卷");
	$(".del_box").show();
	$(".sure_btn").click(function(){
        var text = $(el).next().text();
		if(text == "启用"){
			$(".del_box").hide();
			$(el).parent().parent().remove();
		}else{
			$(".del_text").text("请先将该问卷禁用才可删除");
			$(".del_box").show();
			$(".sure_btn").click(function(){
				$(".del_box").hide();
			});
		}
	});
}
//禁用
var index = 0;
function sueFn(el){
	var cont = $(el).parent().parent().find(".risk_title").text();
	$(".del_text").text("确认将"+cont+"禁用？");
	$(".del_risk").text("禁用问卷");
	$(".del_box").show();
    $(".sure_btn").click(function(){
    	var text = $(el).text();
    	if(text == "启用"){
			$(el).text("禁用");
			$(el).parent().parent().find(".use").text("启用中");
		}else{
			if(index == 0){
				$(".del_text").text("没有其他问卷可使用，该文件不可禁用！");
				$(".sure_btn").click(function(){
					$(".del_box").hide();
				});
			}else{
				$(el).text("启用");
				$(el).parent().parent().find(".use").text("禁用中");
			}
		}
    });
	stopFn();
}