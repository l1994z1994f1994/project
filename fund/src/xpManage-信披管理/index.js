$(function(){
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
	//删除弹框
    $(".can_btn").click(function(){
    	$(".del_box").hide();
    });
    $(".del_title img").click(function(){
    	$(".del_box").hide();
    });
    //查看
    $(".preview").each(function(index){
    	$(".preview").eq(index).click(function(){
    		$(".xp_guan").hide();
    		$(".xp_bian").hide();
    		$(".xp_qing").show();
    	});
    });
    //编辑
    $(".download").each(function(index){
    	$(".download").eq(index).click(function(){
    		$(".xp_guan").hide();
    		$(".xp_qing").hide();
    		$(".xp_bian").show();
    	});
    });
    //取消
    $(".cancel").click(function(){
    	$(".xp_guan").show();
		$(".xp_qing").hide();
		$(".xp_bian").hide();
    });
    //保存
    $(".save").click(function(){
    	$(".xp_guan").show();
		$(".xp_qing").hide();
		$(".xp_bian").hide();
    });
});
//删除
function deleteFn(el){
	$(".del_box").show();
	var that = $(el);
	$(".sure_btn").click(function(){
		$(".del_box").hide();
		that.parent().parent().remove();
	});
}

