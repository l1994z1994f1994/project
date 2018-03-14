$(function(){
    //更多
    $(".download").hover(function(){
        $(this).find(".tab_ul").show();
    },function(){
        $(this).find(".tab_ul").hide();
    });
    //新增邀请
    $(".mes_upload").click(function(){
        $(".invite_box").show();
    });
    //部门调整
    $(".cert_sect").click(function(){
        $(".section_box").hide();
    });
    $(".des_sect").click(function(){
        $(".section_box").hide();
    });
    $(".section_title img").click(function(){
        $(".section_box").hide();
    });
    //设为离职
    $(".des_leave").click(function(){
        $(".leave_box").hide();
    });
    $(".leave_title img").click(function(){
        $(".leave_box").hide();
    });
});
//消息切换
function messageFn(el){
    $(".mes_title li").find("span").removeClass("active");
    $(el).addClass('active');
    if($(el).text() == "在职人员"){
        $(".from_contA").show();
        $(".from_contB").hide();
        $(".from_contC").hide();
        $(".batch_new").hide();
        $(".batch_invite").show();
    }else if($(el).text() == "离职人员"){
        $(".from_contB").show();
        $(".from_contA").hide();
        $(".from_contC").hide();
        $(".batch_new").show();
        $(".batch_invite").hide();
    }else{
        $(".from_contC").show();
        $(".from_contB").hide();
        $(".from_contA").hide();
        $(".batch_new").show();
        $(".batch_invite").hide();
    }
}
//部门调整
function sectionFn(el){
    $(".section_box").show();
}
//设为离职
function leaveFn(el){
    $('.leave_box').show();
    $(".cert_leave").click(function(){
        $(".leave_box").hide();
        $(el).parent().parent().parent().prev().prev().text("离职");
    });
}
//删除
function deleteFn(el){
    $(el).parent().parent().remove();
}