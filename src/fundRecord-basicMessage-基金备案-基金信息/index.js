$(function(){
    $("textarea").attr("disabled","disabled");
    $("select").attr("disabled","disabled");
    $("input").attr("disabled","disabled");
    $(".edit").click(function(){
        $(".add_date").show();
        $(".input_date").show().val($(".input_date").prev().text()).prev().hide();
        $(this).hide();
        $(this).next().next().show();
        $(this).next().show();
        $("textarea").attr("disabled",false);
        $("select").attr("disabled",false);
        $("input").attr("disabled",false);
    });
    $(".canc").click(function(){
        $("textarea").attr("disabled","disabled");
        $("select").attr("disabled","disabled");
        $(".add_date").hide();
        $(".input_date").hide().prev().show();
        $(this).hide();
        $(this).prev().hide();
        $(this).prev().prev().show();
    });
    $(".appro").click(function(){
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
    $(".record_title").each(function(index){
    	$(".record_title").eq(index).hover(function(){
            $(this).addClass("shadow_box");
    	},function(){
            $(this).removeClass("shadow_box");
    	});
    });
    $(".sure_btn").click(function(){
    	$(".del_box").hide();
    });
    $(".close_img").click(function(){
    	$(".del_box").hide();
    });
});
function listFn(el){
	$(".role_name").removeClass("regime");
	$(el).addClass("regime");
}
function breakFn(el){
	var flag = $(el).is(":checked");
	if(flag){
		var text = $(el).parent().prev().text();
		console.log(text);
		if(text == "是否存在保本情形："){
			$(".del_text").text("私募基金管理人、私募基金销售机构不得向投资者承诺投资本金不受损失，请核实本产品是否合规！");
		}else{
			$(".del_text").text("私募基金管理人、私募基金销售机构不得向投资者承诺最低收益，请核实本产品是否合规！");
		}
        $(".del_box").show();
	}
}
