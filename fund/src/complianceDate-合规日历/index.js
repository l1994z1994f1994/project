$(function(){
	var myCalendar = new SimpleCalendar('#calendar');
    //日历
    $(".sc-actions").eq(3).remove();
    $(".sc-actions").eq(2).remove();
    var options = {
    	todaycolor: '#000'
    }
    $(".sc-item").eq(3).append("<img src='image/xingxing.png' class='have_img'>");
    $(".sc-item").eq(13).append("<img src='image/xingxing.png' class='have_img'>");
    $(".sc-item").eq(9).append("<img src='image/xingxing.png' class='have_img'>");
    $(".sc-item").eq(24).append("<img src='image/xingxing.png' class='have_img'>");
    $(".sc-item").eq(7).append("<img src='image/anxing.png' class='had_img'>");
    $(".sc-item").eq(17).append("<img src='image/anxing.png' class='had_img'>");
    $(".sc-item").eq(29).append("<img src='image/anxing.png' class='had_img'>");
    $(".write").click(function(){
    	$(".event_cont img").show();
    });
    //新增部门
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
	$(el).parent().next().remove();
	$(el).parent().remove();

	
}