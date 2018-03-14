$(function(){
	$(".download").hover(function(){
		$(this).find(".tab_ul").show();
	},function(){
		$(this).find(".tab_ul").hide();
	});
	$(".del_btn").click(function(){
		var text = $(this).text();
		if(text == "删除"){
			$(".del_box").show();
		}else{
			$(".edit_cont").hide();
			$(".mes_span").show();
			$(".edit_btn").text("编辑");
			$(this).text("删除");
		}
	});
	//删除
	$(".sure_btn").click(function(){
		$(".del_box").hide();
	});
    $(".can_btn").click(function(){
    	$(".del_box").hide();
    });
    $(".del_title img").click(function(){
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
	//新增部门
	$(".save").click(function(){
		$(".depart_box").show();
	});
	$(".depart_title img").click(function(){
		$(".depart_box").hide();
	});
	$(".can_depart").click(function(){
		$(".depart_box").hide();
	});
	$(".sure_depart").click(function(){
		$(".depart_box").hide();
	});
	//编辑
	$(".edit_btn").click(function(){
		var text = $(this).text();
		if(text == "编辑"){
			$(".edit_cont").show();
			$(".mes_span").hide();
			$(this).text("保存");
			$(".del_btn").text("取消");
		}else{
            $(".edit_cont").hide();
			$(".mes_span").show();
			$(this).text("编辑");
			$(".del_btn").text("删除");
		}
	});
	//部门调整
    $(".cert_sect").click(function(){
        $(".section_box").hide();
    });
    $(".des_sect").click(function(){
        $(".section_box").hide();
    });
    $(".section_title img").click(function(){
        $(".section_box").hide();
    });
    //设为离职
    $(".cert_leave").click(function(){
        $(".leave_box").hide();
    });
    $(".des_leave").click(function(){
        $(".leave_box").hide();
    });
    $(".leave_title img").click(function(){
        $(".leave_box").hide();
    });
});
function downFn(el){
	if($(el).hasClass("change_img")){
		$(el).attr("src","image/right.png").removeClass("change_img");
		if($(el).parent().next().hasClass("show_ul")){
			$(el).parent().next().hide();
		}
	}else{
		$(el).attr("src","image/down.png").addClass("change_img");
		if($(el).parent().next().hasClass("show_ul")){
			$(el).parent().next().show();
		}
	}
}
//部门调整
function sectionFn(el){
    $(".section_box").show();
}
//设为离职
function leaveFn(el){
    $('.leave_box').show();
}