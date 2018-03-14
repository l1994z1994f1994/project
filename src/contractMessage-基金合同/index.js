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
});
//消息切换
function messageFn(el){
    $(".mes_title li").find("span").removeClass("active");
    $(el).addClass('active');
    if($(el).text() == "生效中"){
        $(".from_contA").show();
        // $(".from_contB").hide();
        // $(".from_contC").hide();
    }else if($(el).text() == "审批中"){
        // $(".from_contB").show();
        // $(".from_contA").hide();
        // $(".from_contC").hide();
    }else if($(el).text() == "已驳回"){
        // $(".from_contB").show();
        // $(".from_contA").hide();
        // $(".from_contC").hide();
    }else{
        // $(".from_contC").show();
        // $(".from_contB").hide();
        // $(".from_contA").hide();
    }
}