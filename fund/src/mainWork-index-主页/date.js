$(function(){
    var myCalendar = new SimpleCalendar('#calendar');
    //日历
    $(".sc-actions").eq(3).remove();
    $(".sc-actions").eq(2).remove();
    // $(".")
    var options = {
    	todaycolor: '#000'
    }
    $(".sc-item").eq(3).append("<img src='image/xingxing.png' class='have_img'>");
    $(".sc-item").eq(13).append("<img src='image/xingxing.png' class='have_img'>");
    $(".sc-item").eq(9).append("<img src='image/xingxing.png' class='have_img'>");
    $(".sc-item").eq(24).append("<img src='image/xingxing.png' class='have_img'>");
    $(".sc-item").eq(7).append("<img src='image/anxing.png' class='had_img'>");
    $(".sc-item").eq(17).append("<img src='image/anxing.png' class='had_img'>");
    $(".sc-item").eq(29).append("<img src='image/anxing.png' class='had_img'>");
    $(".sc-item").each(function(index){
    	$(".sc-item").eq(index).click(function(){
			if($(this).find("img").hasClass("have_img")){
				$(".event_box").slideDown();
	            $(".downward").show();
	            $(".event_box p").text(">中国基金协会关于注销第三批公示期满三个月中国基金协会关于注销第三批公示期满三个月");
			}else{
				if($(this).find("img").hasClass("had_img")){
					$(".event_box").slideDown();
					$(".event_box p").text("暂无消息");
		            $(".downward").show();
				}else{
					$(".event_box").slideUp();
	    			$(".downward").hide();
				}
			}
			
    	});
    });
    /*var options = {
        width: '200px',
        height: '200px',
        language: 'CH', //语言
        showLunarCalendar: false, //阴历
        showHoliday: false, //休假
        showFestival: false, //节日
        showLunarFestival: false, //农历节日
        showSolarTerm: false, //节气
        showMark: true, //标记
        timeRange: {
          startYear: 1950,
          endYear: 2049
        },
        mark: {
            '2018-1-12': '上学'
        },
        theme: {
          changeAble: false,
          weeks: {
            backgroundColor: '#ffffff',
            fontColor: '#565555',
            fontSize: '24px'
          },
          days: {
            backgroundColor: '#ffffff',
            fontColor: '#565555',
            fontSize: '24px'
          },
          // todaycolor: 'orange',
          activeSelectColor: 'blue',
        }
       }*/
});