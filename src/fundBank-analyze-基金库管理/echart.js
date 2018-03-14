$(function(){
	var myChartA = echarts.init($(".data_table")[0]);
	myChartA.setOption(optionA = {
		 title: {},
	    tooltip: {
	        show:true,
	    },
	    legend: {
	        selectedMode:false,
	    },
	    grid: {
	            top: '5%',
	            left: '5%',
	            right: '5%',
	            containLabel: true
	        },
	    xAxis: {
            data: ['2010-01','2010-02','2010-03','2010-04','2010-05','2010-06','2010-07','2010-08','2010-09','2010-10','2010-11','2010-12','2011-01'],
             type : 'category',
            boundaryGap : false,
            axisLabel:{
            	interval:0,
            },
        },
        yAxis: {
            splitLine: {
                show: true,
            },
            axisLine:{
            	lineStyle :{
            		type:'dotted',
            	}
            }
        },
        dataZoom: [{
            type: 'inside',
            xAxisIndex :[0],
            startValue:1,
            endValue:5,
            zoomLock:true,
            zoomOnMouseWheel:false,
        }],
	    series: [{
	            type:'line',
	            stack: '总量',
	            data: [0.10,0.20,0.30,0.52,0.23,0.43,0.32,0.19,6,26,29,34,51],
	            areaStyle: {normal: {}},
	            symbolSize: 10,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'top'
	                }
	            },
	            itemStyle: {
			        normal: {
			            color: "rgba(52,204,154,0.2)",
			            lineStyle: {
			                color: "rgb(52,204,154)"
			            }
			        }
			    },
	        }]
	});
});