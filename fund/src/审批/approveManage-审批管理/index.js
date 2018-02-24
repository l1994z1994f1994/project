$(function(){
	//分页
    $(".page_left").each(function(index){
        $(".page_left").eq(index).click(function(){
            var text = $(".page_num").eq(index).text();
            if(text > 1){
                $(".page_num").eq(index).text(text - 1);
            }
        });
    });
    $(".page_right").each(function(index){
        $(".page_right").eq(index).click(function(){
            var text = Number($(".page_num").eq(index).text());
            var cont = Number($(".all_num").eq(index).text());
            if(text < cont){
                $(".page_num").eq(index).text(text + 1);
            }
        });
    });
	$(".apply_title input").each(function(index){
		$(".apply_title input").eq(index).hover(function(){
			$(this).attr("src","image/"+index+".png");
		},function(){
            $(this).attr("src","image/0"+index+".png");
            // $(".apply_title input").eq(0).attr("src","image/00.png");
		});
	});
	//右侧列表
	$(".all_appor").click(function(){
		if($(this).hasClass('all')){
	        $(this).attr("src","image/checked.png").next().removeClass("all");
	        $(".appor_ul li").find("img").attr("src","image/checked.png").removeClass("all");
	        $(".apply_ul li").find("img").attr("src","image/checked.png").removeClass("all");
	        $(".appor_ul li").find("span").removeClass("all");
	        $(".apply_ul li").find("span").removeClass("all");
	        $(this).removeClass("all");
		}else{
			$(this).attr("src","image/checkbox.png").next().addClass("all");
			$(".appor_ul li").find("img").attr("src","image/checkbox.png").addClass("all");
			$(".apply_ul li").find("img").attr("src","image/checkbox.png").addClass("all");
			$(".appor_ul li").find("span").addClass("all");
			$(".apply_ul li").find("span").addClass("all");
			$(this).addClass("all");
		}
	});
	$(".all_apply").click(function(){
		if($(this).hasClass('all')){
	        $(this).attr("src","image/checked.png").next().removeClass("all");
	        $(".appo_ul li").find("img").attr("src","image/checked.png").removeClass("all");
	        $(".apply_ul li").find("img").attr("src","image/checked.png").removeClass("all");
	        $(".appo_ul li").find("span").removeClass("all");
	        $(".apply_ul li").find("span").removeClass("all");
	        $(this).removeClass("all");
		}else{
			$(this).attr("src","image/checkbox.png").next().addClass("all");
			$(".appo_ul li").find("img").attr("src","image/checkbox.png").addClass("all");
			$(".apply_ul li").find("img").attr("src","image/checkbox.png").addClass("all");
			$(".appo_ul li").find("span").addClass("all");
			$(".apply_ul li").find("span").addClass("all");
			$(this).addClass("all");
		}
	});	

});

//消息切换
function messageFn(el){
	$(".mes_title li").find("span").removeClass("active");
	$(el).addClass('active');
	if($(el).text() == "待我审批"){
        $(".from_contA").show();
        $(".from_contB").hide();
        $(".from_contC").hide();
        $(".appor_li img").attr("src","image/checked.png");
        $(".appo_li img").attr("src","image/checked.png");
        $(".appor_li span").removeClass("all");
	    $(".appo_li span").removeClass("all");
	}else if($(el).text() == "我已审批"){
        $(".from_contB").show();
        $(".from_contA").hide();
        $(".from_contC").hide();
        $(".appor_li img").attr("src","image/checked.png");
        $(".appo_li img").attr("src","image/checked.png");
        $(".appor_li span").removeClass("all");
	    $(".appo_li span").removeClass("all");
	}else{
        $(".from_contC").show();
        $(".from_contB").hide();
        $(".from_contA").hide();
        $(".appor_li img").attr("src","image/checked.png");
        $(".appo_li img").attr("src","image/checked.png");
        $(".appor_li span").removeClass("all");
	    $(".appo_li span").removeClass("all");
	}
}
function apporFn(el){
	if($(el).hasClass('all')){
        $(el).attr("src","image/checked.png").next().removeClass("all");
        $(el).removeClass("all");
	}else{
		$(el).attr("src","image/checkbox.png").next().addClass("all");
		$(el).addClass("all");
	}
}
//更多
function downFn(el){
	if($(el).hasClass('all')){
        $(el).attr("src","image/down.png");
        $(el).removeClass("all");
        $(el).parent().parent().find(".apply_ul").hide();
	}else{
		$(el).attr("src","image/up.png");
		$(el).addClass("all");
		$(el).parent().parent().find(".apply_ul").show();
	}
}