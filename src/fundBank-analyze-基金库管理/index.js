$(function(){
	fundFn();
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
	$(document).click(function(){
		$(".tab_ul").hide();
		$(".preview").find("img").attr("src","image/08.png");
		$(".change_state").find("img").attr("src","image/08.png");
	});
	$(".del_title img").click(function(){
		$(".del_box").hide();
	});
	$(".can_btn").click(function(){
		$(".del_box").hide();
	});
});
//消息切换
function messageFn(el){
	$(".mes_title li").find("span").removeClass("active");
	$(el).addClass('active');
	if($(el).text() == "基金库"){
        $(".from_contA").show();
        $(".from_contB").hide();
	}else{
        $(".from_contA").hide();
        $(".from_contB").show();
	}	
}
function fundFn(){
    $(".fund_class").each(function(index){
        if($(".fund_class").eq(index).text() == "股权基金"){
            $(this).parent().find(".preview").remove();
        }
    });
    $(".course").each(function(index){
        if($(".course").eq(index).text() == "立项期"){
            $(this).parent().find(".delete").show();
        }else{
        	if($(".fund_class").eq(index).text() == "股权基金"){
        		$(this).parent().find(".delete").show();
        	}else{
        		$(this).parent().find(".delete").hide();
        	}
        }
    });
}
function deleteFn(el){
	$(el).parent().parent().remove();
}
function stateFn(el){
    stopPropagation();
    var text = $(el).text();
    $(".del_text").text("确认将该基金更改为"+text+"吗");
    $(".del_box").show();
    $(".sure_btn").click(function(){
    	$(el).parent().parent().parent().parent().find(".course").text(text);
    	$(".del_box").hide();
    	$(el).parent().hide();
    	$(el).parent().parent().find("img").attr("src","image/08.png");
    });
    
}
function statusFn(el){
	stopPropagation();
    $(el).find(".tab_ul").show();
    $(el).find("img").attr("src","image/07.png");
}

//走势图
function dateFn(el){
    $(".date_cont").css("color","#333");
    $(el).css("color","#25bc8a");
}
//状态切换
function statebgFn(el){
    $(".state_top li").removeClass("state_bg");
    $(el).addClass("state_bg");
}