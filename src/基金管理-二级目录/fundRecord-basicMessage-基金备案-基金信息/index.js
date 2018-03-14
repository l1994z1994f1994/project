$(function(){
    var titleArr = ["基金备案","投资管理","运营管理","信息披露","风险管理","协会报表"];
    $(".record_title").each(function(index){
    	$(".record_title").eq(index).hover(function(){
            $(this).addClass("shadow_box");
    	},function(){
            $(this).removeClass("shadow_box");
    	});
        $(".record_title").eq(index).click(function(){
            $(".module").text(titleArr[index] + ">");
            $(".role_ul").hide();
            $(".role_ul").eq(index).show();
            $(".account").text($(".role_ul").eq(index).find(".regime").text());
            $(".record_title").removeClass("shad_box");
            $(".record_title").eq(index).addClass("shad_box");
        });
    });
});
function listFn(el){
    $(".account").text($(el).text());
	$(el).parent().parent().find(".role_name").removeClass("regime");
	$(el).addClass("regime");
}
