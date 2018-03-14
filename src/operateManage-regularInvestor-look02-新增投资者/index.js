$(function(){
	$(".new_add").click(function(){
		$(".new_box").show();
	});
	$(".new_title img").click(function(){
        $(".new_box").hide();
    });
    $(".can_new").click(function(){
        $(".new_box").hide();
    });
    $(".sure_new").click(function(){
        $(".new_box").hide();
    });
	
});
function radioyesFn(el){
    var flag = $(el).find("input").eq(0).is(":checked");
    if(flag){
        $(".from_expla").show();
    }else{
        $(".from_expla").hide();
    }
}