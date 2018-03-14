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
    if($(el).text() == "月度报表"){
        $(".from_contA").show();
        $(".monthly").text("生成月报");
        $(".confirm").text("每月结束之日起5个工作日内");
        // $(".from_contB").hide();
        // $(".from_contC").hide();
    }else if($(el).text() == "季度报表"){
        $(".monthly").text("生成季报");
        $(".confirm").text("每季度结束之日起10个工作日内");
        // $(".from_contB").show();
        // $(".from_contA").hide();
        // $(".from_contC").hide();
    }else if($(el).text() == "年度报表"){
        $(".monthly").text("生成年报");
        $(".confirm").text("每年度结束之日起20个工作日内");
        // $(".from_contB").show();
        // $(".from_contA").hide();
        // $(".from_contC").hide();
    }else{
        $(".monthly").text("生成财报");
        $(".confirm").text("每年度四月底之前");
        // $(".from_contC").show();
        // $(".from_contB").hide();
        // $(".from_contA").hide();
    }
}