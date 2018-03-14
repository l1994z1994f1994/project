$(function(){
    //恢复默认
    $(".default").click(function(){
        $(".default_box").show();
    });
    $(".sure_def").click(function(){
        $(".default_box").hide();
        window.location.reload();
    });
    $(".can_def").click(function(){
        $(".default_box").hide();
    });
    $(".default_title img").click(function(){
        $(".default_box").hide();
    });
    //新增
    $(".add").click(function(){
    	var length = $(".risk_grade").length + 1;
        $("tbody").append('<tr><td>C'+length+'</td><td class="mold"><input type="text" placeholder="请输入"></td><td class="risk_grade"><input type="text">到<input type="text"></td><td class="com_invest"><p class="grade">大于等于：<input type="text"></p><p class="grade">小于等于：<input type="text"></p></td><td class="buy_r"><span class="check_box change_img"><input type="checkbox" onclick="checkFn(this)" checked="checked">R1</span><span class="check_box change_img"><input type="checkbox" onclick="checkFn(this)" checked="checked">R2</span><span class="check_box change_img"><input type="checkbox" onclick="checkFn(this)" checked="checked">R3</span><span class="check_box change_img"><input type="checkbox" onclick="checkFn(this)" checked="checked">R4</span><span class="check_box change_img"><input type="checkbox" onclick="checkFn(this)" checked="checked">R5</span></td><td><span class="edit" onclick="editFn(this)">保存</span><span class="delete" onclick="deleteFn(this)">删除</span></td></tr>');
    });
});
//消息切换
function messageFn(el){
	$(".mes_title li").find("span").removeClass("active");
	$(el).addClass('active');
	if($(el).text() == "自然人投资者风险等级"){
		$(".from_cont").show();
	}else{
		$(".from_cont").show();
	}
    window.location.reload();
}
//编辑
var read1,read2,read3,read4,read5;
function editFn(el){
    if($(el).text() == "编辑"){
        var mold = $(el).parent().parent().find(".mold");
         read1 = mold.text();
        $(el).text("保存");
        $(el).next().show(); 
        mold.html('<input type="text" value="'+mold.text()+'">');
        var dom = $(el).parent().parent().find(".risk_grade");
        read2 = dom.find(".num_one").text();
        read3 = dom.find(".num_two").text();
        dom.html('<input type="text" value="'+dom.find(".num_one").text()+'">到<input type="text" value="'+dom.find(".num_two").text()+'">');
        var com = $(el).parent().parent().find(".com_invest");
        read4 = com.find(".num_thr").text();
        read5 = com.find(".num_fou").text();
        com.html('<p class="grade">大于等于：<input type="text" value="'+com.find(".num_thr").text()+'"></p><p class="grade">小于等于：<input type="text" value="'+com.find(".num_fou").text()+'"></p>');
        var buy = $(el).parent().parent().find(".buy_r");
        buy.html('<span class="check_box change_img"><input type="checkbox" onclick="checkFn(this)" checked="checked">R1</span><span class="check_box change_img"><input type="checkbox" onclick="checkFn(this)" checked="checked">R2</span><span class="check_box change_img"><input type="checkbox" onclick="checkFn(this)" checked="checked">R3</span><span class="check_box change_img"><input type="checkbox" onclick="checkFn(this)" checked="checked">R4</span><span class="check_box change_img"><input type="checkbox" onclick="checkFn(this)" checked="checked">R5</span>');

    }else{
        $(el).text("编辑");
        $(el).next().hide();
        var arr = [];
        var mold = $(el).parent().parent().find(".mold");
        if($(".mold").find("input").val().trim().length > 0){
            var mold = $(el).parent().parent().find(".mold");
            mold.text(mold.find("input").val());
        }else{
            $(".mold").find("input").remove();
            $(".mold").text(read1);
        }
        var dom = $(el).parent().parent().find(".risk_grade");
        dom.html('<span class="num_one">'+dom.find("input").eq(0).val()+'</span>'+"到"+'<span class="num_two">'+dom.find("input").eq(1).val()+'</span>');
        if(dom.find(".num_one").text().trim().length < 1){
           dom.find(".num_one").text(read2);
        }
        if(dom.find(".num_two").text().trim().length < 1){
           dom.find(".num_two").text(read3);
        }
        var com = $(el).parent().parent().find(".com_invest");
        com.html('<span class="num_thr">'+com.find("input").eq(0).val()+'</span>'+"分≤X<"+'<span class="num_fou">'+com.find("input").eq(1).val()+'</span>'+"分");
        if(com.find(".num_thr").text().trim().length < 1){
           com.find(".num_thr").text(read4);
        }
        if(com.find(".num_fou").text().trim().length < 1){
           com.find(".num_fou").text(read5);
        }
        var buy = $(el).parent().parent().find(".check_box");
        buy.each(function(index){
            if(buy.eq(index).hasClass("change_img")){
                arr.push(buy.eq(index).text());
            }
        });
        if(arr.length < 1){
            $(el).parent().parent().find(".buy_r").html("无");
        }else{
            $(el).parent().parent().find(".buy_r").html(arr.toString());
        } 
    }
}
function checkFn(el){
	var result = $(el).is(":checked");
	if(result){
		$(el).parent().addClass("change_img");
	}else{
		$(el).parent().removeClass("change_img");
	}
}
function deleteFn(el){
    $(el).parent().parent().remove();
}
