$(function(){
    statesFn();
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
});
//消息切换
function messageFn(el){
	$(".mes_title li").find("span").removeClass("active");
	$(el).addClass('active');
	if($(el).text() == "全部"){
        $(".delete").show();
	}else if($(el).text() == "已立项"){
        $(".delete").hide();
	}else{
        $(".delete").show();
	}	
}
function statesFn(){
    $(".state").each(function(index){
    	if($(".state").eq(index).text() == "已审核"){
    		$(this).css("color","#999");
    	}else if($(".state").eq(index).text() == "未完善"){
    		$(this).css("color","#666");
    	}else{
    		$(this).css("color","#333");
    	}
    });
}
function deleteFn(el){
	var text = $(el).parent().parent().find(".state").text();
	if(text == "待审核" || text == "已审核"){
        $(".del_text").text("该状态下不能删除该项内容");
		$(".del_risk").text("提示");
		$(".del_box").show();
		$(".sure_btn").click(function(){
		 	$(".del_box").hide();
		});
	}else{
		$(".del_text").text("您确定要删除该项内容");
		$(".del_risk").text("删除");
		$(".del_box").show();
		$(".sure_btn").click(function(){
		 	$(el).parent().parent().remove();
		 	$(".del_box").hide();
		});
	}
	$(".del_title img").click(function(){
		$(".del_box").hide();
	});
	$(".can_btn").click(function(){
		$(".del_box").hide();
	});
}