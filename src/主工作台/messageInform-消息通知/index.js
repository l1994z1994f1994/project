$(function(){
	//是否显示蓝点
	$(".circle").each(function(index){
        if(index < 5){
        	$(".circle").eq(index).show();
        }else{
            $(".circle").eq(index).hide();
            $(".circle").eq(index).parent().css("color","#999").siblings().css("color","#999");
        }
	});
	//未读信息
	function noRead(){
		var num = 0;
		$(".circle").each(function(index){
            var flag = $(".circle").eq(index).is(":hidden");
            if(!flag){
            	num++;
            }
		});
		if(num == 0){
        	$(".show_num").hide();
        }else{
        	$(".show_num").text(num).show();
        }
	}
	noRead();
	//全选
	var flag = true;
	$(".checked_box").click(function(){
		if(flag){
			$(this).css("background","url(image/checkbox.png) no-repeat center/100%");
			$(".check_box").css("background","url(image/checkbox.png) no-repeat center/100%");
			flag = false;
		}else{
			$(this).css("background","url(image/checked.png) no-repeat center/100%");
			$(".check_box").css("background","url(image/checked.png) no-repeat center/100%");
			flag = true;
		}
	})

	//删除
	$(".dele_btn").click(function(){
		$(".del_box").show(); 
	});
	$(".sure_btn").click(function(){
		$(".del_box").hide();
		$(".check_box").each(function(index){
        	if($(".check_box").eq(index).hasClass("change_img")){
        		$("tbody tr").eq(index).remove();
        	}
        });
        noRead();
	});
    $(".can_btn").click(function(){
    	$(".del_box").hide();
    });
    $(".del_title img").click(function(){
    	$(".del_box").hide();
    });
    //标为已读
    $(".func_read").click(function(){
    	$(".check_box").each(function(index){
        	if($(".check_box").eq(index).hasClass("change_img")){
        		$(this).css("background","url(image/checked.png) no-repeat center/100%");
        		$("tbody tr").eq(index).css("color","#999").find("img").hide();
        	}
        });
        noRead();
    });
    //全部已读
    $(".func_all").click(function(){
		$(".check_box").css("background","url(image/checked.png) no-repeat center/100%");
		$("tbody tr").css("color","#999").find("img").hide();
		noRead();
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
});
//消息切换
function messageFn(el){
	$(".mes_title li").find("span").removeClass("active");
	$(el).addClass('active');
	if($(el).text() == "未读消息"){
		$(".no_cont").show();
		$(".table_box").hide();
	}else{
		$(".no_cont").hide();
		$(".table_box").show();
	}
}
//多选
function checkBox(el){
	stopPropagation();
	if($(el).hasClass("change_img")){
		$(el).css("background","url(image/checked.png) no-repeat center/100%");
		$(el).removeClass("change_img");
	}else{
		$(el).css("background","url(image/checkbox.png) no-repeat center/100%");
		$(el).addClass('change_img');
	}
}
function tableFn(el){
	$(el).css("color","#999");
	$(el).find("img").hide();
}