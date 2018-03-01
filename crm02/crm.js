$(function(){
	var myChartA = echarts.init($(".data_tableA")[0]);
	myChartA.setOption({
		title: {
            text: ''
        },
	    tooltip: {
	        show:false,
	    },
	    legend: {
	        data:['访问量','访问用户'],
	        selectedMode:false,
	        left:20,
	    },
	    grid: {
	            top: '10%',
	            left: '1%',
	            right: '10%',
	            containLabel: true
	        },
	    xAxis: {
            data: ['2010-01','2010-02','2010-03','2010-04','2010-05','2010-06','2010-07','2010-08','2010-09','2010-10','2010-11','2010-12','2011-01','2011-02','2011-03','2011-04','2011-05','2011-06','2011-07','2010-02','2010-01','2010-02','2010-02','2010-01','2010-02','2010-02'],
            axisLabel:{
            	interval:0,
            }
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
            endValue:8,
            zoomLock:true,
            zoomOnMouseWheel:false,
        }],
	    series: [
	        {
	            name:'访问量',
	            type:'line',
	            stack: '总量',
	            data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, ],
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            itemStyle: {
			        normal: {
			            lineStyle: {
			                color: "#f1b63a"
			            }
			        }
			    },
	        },
	        {
	            name:'访问用户',
	            type:'line',
	            stack: '总量',
	            data: [101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, ],
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            itemStyle: {
			        normal: {
			            lineStyle: {
			                color: "#43a2bc"
			            }
			        }
			    },
	        }
	    ]
	});

	var myChartB = echarts.init($(".data_tableA")[1]);
	myChartB.setOption({
		title: {
            text: ''
        },
	    tooltip: {
	        show:false,
	    },
	    legend: {
	        data:['信披','云协作'],
	        selectedMode:false,
	        left:20,
	    },
	    grid: {
	            top: '10%',
	            left: '1%',
	            right: '10%',
	            containLabel: true
	        },
	    xAxis: {
            data: ['2010-01','2010-02','2010-03','2010-04','2010-05','2010-06','2010-07','2010-08','2010-09','2010-10','2010-11','2010-12','2011-01','2011-02','2011-03','2011-04','2011-05','2011-06','2011-07','2010-02','2010-01','2010-02','2010-02','2010-01','2010-02','2010-02'],
            axisLabel:{
            	interval:0,
            }
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
            endValue:8,
            zoomLock:true,
            zoomOnMouseWheel:false,
        }],
	    series: [
	        {
	            name:'信披',
	            type:'line',
	            stack: '总量',
	            data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132,],
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            itemStyle: {
			        normal: {
			            lineStyle: {
			                color: "#f1b63a"
			            }
			        }
			    },
	        },
	        {
	            name:'云协作',
	            type:'line',
	            stack: '总量',
	            data: [101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90,],
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            itemStyle: {
			        normal: {
			            lineStyle: {
			                color: "#43a2bc"
			            }
			        }
			    },
	        }
	    ]
	});


	var myChartG = echarts.init($(".data_tableA")[6]);
	myChartG.setOption({
		title: {
            text: ''
        },
	    tooltip: {
	        show:false,
	    },
	    legend: {
	        data:['访问量','访问用户'],
	        selectedMode:false,
	        left:20,
	    },
	    grid: {
	            top: '10%',
	            left: '1%',
	            right: '10%',
	            containLabel: true
	        },
	    xAxis: {
            data: ['2010-01','2010-02','2010-03','2010-04','2010-05','2010-06','2010-07','2010-08','2010-09','2010-10','2010-11','2010-12','2011-01','2011-02','2011-03','2011-04','2011-05','2011-06','2011-07','2010-02','2010-01','2010-02','2010-02','2010-01','2010-02','2010-02'],
            axisLabel:{
            	interval:0,
            }
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
            endValue:8,
            zoomLock:true,
            zoomOnMouseWheel:false,
        }],
	    series: [
	        {
	            name:'访问量',
	            type:'line',
	            stack: '总量',
	            data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132,],
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            itemStyle: {
			        normal: {
			            lineStyle: {
			                color: "#f1b63a"
			            }
			        }
			    },
	        },
	        {
	            name:'访问用户',
	            type:'line',
	            stack: '总量',
	            data: [101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90,],
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            itemStyle: {
			        normal: {
			            lineStyle: {
			                color: "#43a2bc"
			            }
			        }
			    },
	        }
	    ]
	});

	var myChartH = echarts.init($(".data_tableA")[7]);
	myChartH.setOption({
		title: {
            text: ''
        },
	    tooltip: {
	        show:false,
	    },
	    legend: {
	        data:['访问量','访问用户'],
	        selectedMode:false,
	        left:20,
	    },
	    grid: {
	            top: '10%',
	            left: '1%',
	            right: '10%',
	            containLabel: true
	        },
	    xAxis: {
            data: ['2010-01','2010-02','2010-03','2010-04','2010-05','2010-06','2010-07','2010-08','2010-09','2010-10','2010-11','2010-12','2011-01','2011-02','2011-03','2011-04','2011-05','2011-06','2011-07','2010-02','2010-01','2010-02','2010-02','2010-01','2010-02','2010-02'],
            axisLabel:{
            	interval:0,
            }
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
            endValue:8,
            zoomLock:true,
            zoomOnMouseWheel:false,
        }],
	    series: [
	        {
	            name:'访问量',
	            type:'line',
	            stack: '总量',
	            data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132,],
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            itemStyle: {
			        normal: {
			            lineStyle: {
			                color: "#f1b63a"
			            }
			        }
			    },
	        },
	        {
	            name:'访问用户',
	            type:'line',
	            stack: '总量',
	            data: [101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90,],
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            itemStyle: {
			        normal: {
			            lineStyle: {
			                color: "#43a2bc"
			            }
			        }
			    },
	        }
	    ]
	});

	var myChartI = echarts.init($(".data_tableA")[8]);
	myChartI.setOption({
		title: {
            text: ''
        },
	    tooltip: {
	        show:false,
	    },
	    legend: {
	        data:['访问量','访问用户'],
	        selectedMode:false,
	        left:20,
	    },
	    grid: {
	            top: '10%',
	            left: '1%',
	            right: '10%',
	            containLabel: true
	        },
	    xAxis: {
            data: ['2010-01','2010-02','2010-03','2010-04','2010-05','2010-06','2010-07','2010-08','2010-09','2010-10','2010-11','2010-12','2011-01','2011-02','2011-03','2011-04','2011-05','2011-06','2011-07','2010-02','2010-01','2010-02','2010-02','2010-01','2010-02','2010-02'],
            axisLabel:{
            	interval:0,
            }
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
            endValue:8,
            zoomLock:true,
            zoomOnMouseWheel:false,
        }],
	    series: [
	        {
	            name:'访问量',
	            type:'line',
	            stack: '总量',
	            data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132,],
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            itemStyle: {
			        normal: {
			            lineStyle: {
			                color: "#f1b63a"
			            }
			        }
			    },
	        },
	        {
	            name:'访问用户',
	            type:'line',
	            stack: '总量',
	            data: [101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90,],
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            itemStyle: {
			        normal: {
			            lineStyle: {
			                color: "#43a2bc"
			            }
			        }
			    },
	        }
	    ]
	});

	var myChartJ = echarts.init($(".data_tableA")[9]);
	myChartJ.setOption({
		title: {
            text: ''
        },
	    tooltip: {
	        show:false,
	    },
	    legend: {
	        data:['访问量','访问用户'],
	        selectedMode:false,
	        left:20,
	    },
	    grid: {
	            top: '10%',
	            left: '1%',
	            right: '10%',
	            containLabel: true
	        },
	    xAxis: {
            data: ['2010-01','2010-02','2010-03','2010-04','2010-05','2010-06','2010-07','2010-08','2010-09','2010-10','2010-11','2010-12','2011-01','2011-02','2011-03','2011-04','2011-05','2011-06','2011-07','2010-02','2010-01','2010-02','2010-02','2010-01','2010-02','2010-02'],
            axisLabel:{
            	interval:0,
            }
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
            endValue:8,
            zoomLock:true,
            zoomOnMouseWheel:false,
        }],
	    series: [
	        {
	            name:'访问量',
	            type:'line',
	            stack: '总量',
	            data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132,],
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            itemStyle: {
			        normal: {
			            lineStyle: {
			                color: "#f1b63a"
			            }
			        }
			    },
	        },
	        {
	            name:'访问用户',
	            type:'line',
	            stack: '总量',
	            data: [101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90,],
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            itemStyle: {
			        normal: {
			            lineStyle: {
			                color: "#43a2bc"
			            }
			        }
			    },
	        }
	    ]
	});

	$(".wen_icon").each(function(index){
		$(".wen_icon").eq(index).hover(function(){
            $(this).next().show();
		},function(){
            $(this).next().hide();
		});
	});
});

