$(function(){
	//新增评级
    $(".new_add").click(function(){
        $(".rate_box").show();
    });
    $(".rate_title img").click(function(){
        $(".rate_box").hide();
    });
    $(".can_rate").click(function(){
        $(".rate_box").hide();
    });
    $(".sure_rate").click(function(){
        $(".rate_box").hide();
    });
    $(".no_check").click(function(){
        $(".from_sure").hide();
    });
    $(".yes_check").click(function(){
        $(".from_sure").show();
    });
    $(".opload_elect").click(function(){
        $(".risk").show();
        $(".elect").hide();
    });
    $(".fill_elect").click(function(){
        $(".risk").hide();
        $(".elect").show();
    });
    //新增转化
    $(".new_change").click(function(){
        $(".conver_box").show();
    });
    $(".conver_title img").click(function(){
        $(".conver_box").hide();
    });
    $(".can_conver").click(function(){
        $(".conver_box").hide();
    });
    $(".sure_conver").click(function(){
        $(".conver_box").hide();
    });
    var flag = true;
    $(".major_per").click(function(){
        $(".mon_box").hide();
        $(".com_box").show();
        flag = true;
    });
    $(".major_son").click(function(){
        $(".mon_box").show();
        $(".com_box").hide();
        flag = false;
    });
    $(".no_checked").click(function(){
        if(flag){
            $(".gao_box").hide();
        }else{
            $(".gao_box").hide();
        }
    });
    $(".yes_checked").click(function(){
        if(flag){
            $(".gao_box").show();
        }else{
             $(".gao_box").hide();
        }
    });

    $(".from_cont").click(function(){
        var flag = $(".check_box").find("input").eq(0).is(":checked");
        var flga = $(".check_box").find("input").eq(1).is(":checked");
        if(flag && flga){
            $(".common").text("专业投资者");
            $(".new_rate").hide();
        }else{
            $(".common").text("普通投资者");
            $(".new_rate").show();
        }

        /*var flagA = $(".check_box").find("input").eq(0).is(":checked");
        var flagB = $(".check_box").find("input").eq(1).is(":checked");
        var flagC = $(".check_box").find("input").eq(2).is(":checked");
        var flagD = $(".check_box").find("input").eq(3).is(":checked");
        if(flagA && flagB && flagC && flagD){
            $(".common").text("专业投资者");
            $(".new_rate").hide();
        }else{
            $(".common").text("普通投资者");
            $(".new_rate").show();
        }*/
    });

    $(".add_one").click(function(){
        $(".task_box").show(); 
    });
    $(".certt_task").click(function(){
        $(".task_box").hide();
    });
    $(".dess_task").click(function(){
        $(".task_box").hide();
    });
    $(".task_title img").click(function(){
        $(".task_box").hide();
    });

    $(".add_two").click(function(){
        $(".risk_box").show(); 
    });
    $(".certt_risk").click(function(){
        $(".risk_box").hide();
    });
    $(".dess_risk").click(function(){
        $(".risk_box").hide();
    });
    $(".risk_title img").click(function(){
        $(".risk_box").hide();
    });
	
});
function riskaFn(el){
    $(".risk_boxa").show();
}
function riskbFn(el){
    $(".risk_boxa").hide();
}
function riskcFn(el){
    $(".risk_boxb").show();
}
function riskdFn(el){
    $(".risk_boxb").hide();
}