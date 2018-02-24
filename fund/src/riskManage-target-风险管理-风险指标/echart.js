$(function(){
	var myChartA = echarts.init($(".data_table")[0]);
	myChartA.setOption(optionA = {
		title: {
            text: ''
        },
	    tooltip: {
	        show:true,
	    },
	    legend: {
	        data:['风险指标'],
	        selectedMode:false,
	        bottom:10,
	    },
	    grid: {
	            top: '10%',
	            left: '3%',
	            right: '3%',
	            containLabel: true
	        },
	    xAxis: {
            data: ['2010-01','2010-02','2010-03','2010-04','2010-05','2010-06','2010-07','2010-08','2010-09','2010-10','2010-11','2010-12','2011-01'],
             type : 'category',
            boundaryGap : false,
            axisLabel:{
            	interval:0,
            },
    //         splitLine:{  
	   //          show:true  ,
	   //          lineStyle:{
				//     color:'#00ffee',
				//     width: 1
				//     }
				// }
        },
        yAxis: {
        	name:"资产万元",
        	nameLocation:"middle",
        	nameGap:40,
            splitLine: {
                show: true,
            },
            axisLine:{
            	lineStyle :{
            		type:'dotted',
            	}
            },
    //         splitLine:{  
	   //          show:true  ,
	   //          lineStyle:{
				//     color:'#00ffee',
				//     width: 1
				//     }
				// }
        },
        dataZoom: [{
            type: 'inside',
            xAxisIndex :[0],
            startValue:1,
            endValue:10,
            zoomLock:true,
            zoomOnMouseWheel:false,
        }],
	    series: [
	        {
	            name:'风险基金',
	            type:'line',
	            stack: '总量',
	            data: [20,300,103,293,612,257,342,178,120, 132, 10, 134, 90, 230, 210,],
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
			            color: "rgba(204,153,204,0.2)",
			            lineStyle: {
			                color: "rgb(204,153,204)",
			            }
			        }
			    },
			    /*markPoint: {
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ]
	            },*/
			    markLine: {
			    	itemStyle:{
			            normal:{
			            	lineStyle:{
			            		type:'doshed',
			            		color:'#f00'
			            	},
			            }
			        },
	                data: [
	                    {type: 'average', name: '止损线'},
	                    {type: 'max', name: '预警线'},
	                ]
	            },
	        }
	    ]
	});
});