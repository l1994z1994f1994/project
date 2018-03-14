$(function(){
	$(".left_li").each(function(index){
		$(".left_li").eq(index).click(function(){
			$(".left_li").css("border","none");
			$(".fund").css("color","#333");
			$(".show_list").attr("src","../commons/image/gengduo.png");
			$(".work_img").each(function(index){
                $(".work_img").eq(index).attr("src","../commons/image/"+index+".png");
			});
			$(this).find(".fund").css("color","#0089f1");
			$(this).find(".show_list").attr("src","../commons/image/xiangyou02.png");
			$(this).find(".work_img").attr("src","../commons/image/0"+index+".png");
			$(this).css({
				"border-left":"3px solid #0089f1",
			});
		})
	});
	$(".fund_cla").each(function(index){
		$(".fund_cla").eq(index).click(function(){
			$(".fund_cla").css("color","#333");
			$(this).css("color","#0089f1")
		});
	});
	//个人信息
	$(".down_img").click(function(){
		stopPropagation();
		$(".top_mes").show();
		$(".san_img").show();
		$(".down_img").attr("src","../commons/image/youjiantou01.png");
	});
	$(document).click(function(){
		$(".top_mes").hide();
		$(".san_img").hide();
		$(".down_img").attr("src","../commons/image/xiala1.png");
	});
	//安全退出
	$(".nav_last").click(function(){
		$(".quit_box").show();
	});
	$(".des_btn").click(function(){
		$(".quit_box").hide();
	});
	$(".quit_title img").click(function(){
		$(".quit_box").hide();
	});
	$(".cert_btn").click(function(){
		$(".quit_box").hide();
	});
	//邀请用户
	$(".user_invite").click(function(){
		$(".invite_box").show();
	});
	$(".dess_btn").click(function(){
		$(".invite_box").hide();
	});
	$(".invite_title img").click(function(){
		$(".invite_box").hide();
	});
	$(".certt_btn").click(function(){
		$(".invite_box").hide();
	});
    //基金备案目录切换
	$(".record_title").each(function(index){
    	$(".record_title").eq(index).hover(function(){
            $(this).addClass("shadow_box");
    	},function(){
            $(this).removeClass("shadow_box");
    	});
    });
});
//获取事件
function getEvent(){
   if(window.event){return window.event;}
   func=getEvent.caller;
   while(func!=null){
       var arg0=func.arguments[0];
       if(arg0){
           if((arg0.constructor==Event || arg0.constructor ==MouseEvent
              || arg0.constructor==KeyboardEvent)
              ||(typeof(arg0)=="object" && arg0.preventDefault
              && arg0.stopPropagation)){
               return arg0;
           }
       }
       func=func.caller;
   }
   return null;
}
//阻止冒泡
function stopPropagation(){
  var e=getEvent();
  if(window.event){
      //e.returnValue=false;//阻止自身行为
      e.cancelBubble=true;//阻止冒泡
   }else if(e.preventDefault){
      //e.preventDefault();//阻止自身行为
      e.stopPropagation();//阻止冒泡
   }
}
function showList(el){
	    stopPropagation();
	if($(el).hasClass('change_img')){
        $(el).parent().next().slideUp();
		$(el).attr("src","../commons/image/gengduo.png");
		$(el).removeClass('change_img');
	}else{
		$(el).parent().next().slideDown();
		$(el).attr("src","../commons/image/xiangxia02.png");
		$(el).addClass('change_img');
	}
}
//重置按钮
var timer;
function focuFn(el){
	$(".search").css({
		"color":"#fff",
		"background":"#0089f1"
	});
	$(el).next().show();
	$(el).next().click(function(){
		$(el).val("");
		$(el).focus();
		clearInterval(timer);
	});
}
function blurFn(el){
	$(".search").css({
		"color":"#666",
		"background":"#eee"
	});
	timer = setTimeout(function(){
		$(el).next().hide();
	},200)
}

function listFn(el){
	$(".role_name").removeClass("regime");
	$(el).addClass("regime");
}