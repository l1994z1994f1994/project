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
	//添加问题
	$(".add_ques").click(function(){
		var length = $(".question_num").length + 1;
        $(".tbody").append('<tr class="question_num"><td>题号'+length+'</td><td>单选</td><td><span class="preview" onclick="unfoldFn(this)">展开<img src="image/gengduo.png"></span><span class="delete" onclick="deleteFn(this)">删除</span><span class="save" onclick="saveFn(this)">保存</span><span class="canc" onclick="cancelFn(this)">取消</span></td></tr>');
        $(".tbody").append('<tr class="table_tr"><td colspan="3" class="cols_pan"><table class=" table_text"><tbody class="table_body"><tr><td style="width: 34%">问卷标题：<input type="text" name="" class="quest_con" maxlength="100"></td><td style="width: 33%">问题选项：<span class="add_option" onclick="addFn(this)">+添加内容</span></td><td></td></tr><tr><td>选项内容</td><td>选项分数</td><td>操作</td></tr><tr><td><input type="text" name="" placeholder="请输入内容" maxlength="100"></td><td><input type="text" name=""></td><td><span class="move_up" onclick="moveupFn(this)">上移</span><span class="move_down" onclick="movedownFn(this)">下移</span><span class="remove" onclick="deleteFn(this)">删除</span></td></tr></tbody></table></td></tr>');
	});
	$(".del_title img").click(function(){
		$(".del_box").hide();
	});
	$(".can_btn").click(function(){
		$(".del_box").hide();
	});
});
function unfoldFn(el){
	$(el).hide();
	$(el).next().hide();
	$(el).next().next().show();
	$(el).next().next().next().show();
	$(el).parent().parent().css("background","#F9FDFF").find("td").css("border-bottom","none");
	$(el).parent().parent().next().show();
}
function cancelFn(el){
	$(".del_risk").text("取消");
	$(".del_text").text("若取消该内容将不被保存，确认取消吗？");
	$(".del_box").show();
	$(".sure_btn").click(function(){
		$(".del_box").hide();
		$(el).hide();
		$(el).prev().hide();
		$(el).prev().prev().show();
		$(el).prev().prev().prev().show();
		$(el).parent().parent().next().hide();
		$(el).parent().parent().css("background","#fff").find("td").css("border-bottom","1px solid #e7e7e7");
	});
}
function deleteFn(el){
    $(".del_risk").text("删除");
	$(".del_text").text("确定删除该问题吗？");
	$(".del_box").show();
	$(".sure_btn").click(function(){
		$(".del_box").hide();
		$(el).parent().parent().remove();
	});
}
//添加选项
function addFn(el){
	$(el).parent().parent().parent().append('<tr><td><input type="text" name="" placeholder="请输入内容" maxlength="100"></td><td><input type="text" name="" placeholder="请输入选项分数"></td><td><span class="move_up" onclick="moveupFn(this)">上移</span><span class="move_down" onclick="movedownFn(this)">下移</span><span class="remove" onclick="resetFn(this)">删除</span></td></tr>');
}
//上移
function moveupFn(el){
	$(el).parent().parent().prev().before($(el).parent().parent());
}
function movedownFn(el){
	console.log(123);
	$(el).parent().parent().next().after($(el).parent().parent());
}

function resetFn(el){
    $(el).parent().parent().remove();
}

function saveFn(el){
    $(el).parent().parent().next().hide();
    $(el).hide();
    $(el).next().hide();
    $(el).prev().show();
    $(el).prev().prev().show();
}