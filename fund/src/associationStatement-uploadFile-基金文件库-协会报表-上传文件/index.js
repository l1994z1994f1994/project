$(function(){
    //提交审批
	$(".edit").click(function(){
		$(".appor_box").show();
	});
	$(".appor_title img").click(function(){
		$(".appor_box").hide();
	});
	$(".can_appor").click(function(){
		$(".appor_box").hide();
	});
	$(".sure_appor").click(function(){
		$(".appor_box").hide();
	});
});
function deleteFn(el){
	$(el).parent().remove();
	$(".file_img").remove();
}


