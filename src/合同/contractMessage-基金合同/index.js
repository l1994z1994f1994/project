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
