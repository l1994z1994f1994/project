$(function(){
    $(".edit").click(function(){
        $(this).hide();
        $(this).next().next().show();
        $(this).next().show();
    });
    $(".canc").click(function(){
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
    //新增
    $(".add_organ").click(function(){
        $(".add_box").show();
    });
    $(".add_title img").click(function(){
        $(".add_box").hide();
    });
    $(".can_add").click(function(){
        $(".add_box").hide();
    });
    $(".sure_add").click(function(){
        $(".add_box").hide();
        $(".table_tbody").append('<tr><td>'+$(".add_grade").find("input").eq(0).val()+'</td><td>'+$(".add_grade").find("input").eq(1).val()+'</td><td>'+$(".add_grade").find("input").eq(2).val()+'</td><td><span class="preview">编辑</span><span class="delete" onclick="deleteTrFn(this)">删除</span></td></tr>')
    });

});


function deleteTrFn(el){
    $(el).parent().parent().remove();
}

function threeFn(el){
    $(".acco_box").show();
}
function thrFn(el){
    $(".acco_box").hide();
}

function fourFn(el){
    $(".twelev_box").show();
}
function fouFn(el){
    $(".twelev_box").hide();
}

function fiveFn(el){
    $(".thirt_box").show();
}
function fivFn(el){
    $(".thirt_box").hide();
}

function sevenFn(el){
    $(".raise_show").hide();
}
function sevFn(el){
    $(".raise_show").show();
}
function eightFn(el){
    $(el).parent().next().show();
}
function eighFn(el){
    $(el).parent().next().hide();
}
//直销
function checkFn(el){
    var flag = $(el).is(":checked");
    if(flag){
        $(".trus_boxa").show();
    }else{
        $(".trus_boxa").hide();
    }
}
//代销
function checkedFn(el){
    var flag = $(el).is(":checked");
    if(flag){
        $(".trus_boxb").show();
    }else{
        $(".trus_boxb").hide();
    }
}
//添加机构名称
function addFn(el){
    $(el).parent().append('<input type="text" name="" placeholder="请输入机构名称" class="super_name">');
};