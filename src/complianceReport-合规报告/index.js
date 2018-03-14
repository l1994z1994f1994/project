$(function(){
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
	});
    $(".can_btn").click(function(){
    	$(".del_box").hide();
    });
    $(".del_title img").click(function(){
    	$(".del_box").hide();
    });

	$(".page_num").each(function(index){
		$(".page_num").eq(index).click(function(){
			$(".page_num").css({
				"color":"#337ab7",
				"background":"#fff"
			});
			$(this).css({
				"color":"#fff",
				"background":"#0089f1"
			});
		});
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