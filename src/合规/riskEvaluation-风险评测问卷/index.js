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
	$(".del_text").text("确定将"+cont+"删除？");
	$(".del_risk").text("删除问卷");
	$(".del_box").show();
	$(".sure_btn").click(function(){
        var text = $(el).prev().text();
		if(text == "启用"){
			$(".del_box").hide();
			$(el).parent().parent().remove();
		}else{
			$(".del_text").text("请先将该问卷禁用才可删除");
			$(".del_box").show();
		}
	});

    
}
//禁用
function sueFn(el){
	var text = $(el).text();
	var cont = $(el).parent().parent().find(".risk_title").text();
	if(text == "启用"){
		$(".del_text").text("确认将"+cont+"启用？");
		$(".del_risk").text("启用问卷");
	}else{
        $(".del_text").text("确认将"+cont+"禁用？");
	    $(".del_risk").text("禁用问卷");
	}
	$(".del_box").show();
    $(".sure_btn").click(function(){
    	if(text == "启用"){
			var index = $("tbody tr").length;
			if(index < 3){
                $(el).text("禁用");
			    $(el).parent().parent().find(".use").text("启用中");
			}else{
				$(el).text("禁用");
			    $(el).parent().parent().find(".use").text("启用中");
			    var content = $(el).parent().parent().find(".question_naire").text();
                $(".question_naire").each(function(index){
                	if(index < 2){
                		if($(".question_naire").eq(index).text() == content){
                			$(".question_naire").eq(index).parent().find(".use").text("禁用中");
                			$(".question_naire").eq(index).parent().find(".useing").text("启用");
                		}
                	}
                });
			}
			$(el).parent().find(".edit").hide();
			$(".del_box").hide();
		}else{
			$(el).parent().find(".edit").show();
			var index = $("tbody tr").length;
			if(index < 3){
				$(".del_text").text("没有其他问卷可使用，该文件不可禁用！");
				$(".sure_btn").hide();
				$(".btn_sure").show();
				sureFn();
			}else{
				$(el).text("启用");
				$(el).parent().parent().find(".use").text("禁用中");
				$(".del_box").hide();
			}
		}
		stopFn();
    });
}
function sureFn(){
	$(".btn_sure").click(function(){
    	$(this).hide();
    	$(".sure_btn").show();
    	$(".del_box").hide();
    });
}

	