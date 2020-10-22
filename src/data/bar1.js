export default function getData () {
	return {
		title: {
			x: setAdaption(15),
			y: setAdaption(12.5),
			text: '员工不满意服务TOP3',
			textStyle: {
				fontSize: setAdaption(11.25),
				color: '#00A9FF'
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			},
			textStyle: {
				fontSize: setAdaption(10),
				color: '#96CEFF'
			}
		},
		legend: {
			x:'right',      //可设定图例在左、右、居中
			y:'top',     //可设定图例在上、下、居中
			itemGap: setAdaption(16.5),
			top: setAdaption(31.25),
			padding:[0,setAdaption(9),0,0],   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
			itemHeight: setAdaption(6),
			itemWidth: setAdaption(6),
			data: [{name:'态度',icon: 'rect'}, {name:'效率',icon: 'rect'}, {name:'质量',icon: 'rect'}],
			textStyle: {
				fontSize: setAdaption(6),
				color: '#96CEFF'
			}
		},
		grid: {
			width: setAdaption(235),
			height: setAdaption(132.75),
			left: setAdaption(7.5),
			top: setAdaption(48),
			containLabel: true
		},
		xAxis: {
			type: 'value',
			boundaryGap: [0, 0.01],
			axisLabel: {
				textStyle: {
					fontSize: setAdaption(7.5),
					color: 'rgba(255,255,255,0.5)'
				},
				formatter: function(data) {
					return data + '%';
				}
			},
			axisLine: { //x轴线的颜色以及宽度
                show: true,
                lineStyle: {
                    color: "#535B6D",
                    width: setAdaption(1),
					type: "solid"
				},
				symbol: ['line', 'arrow'],
				symbolSize: [setAdaption(3.75),setAdaption(6)]
			},
			"splitLine": {     //网格线
				"show": false
			},
			"axisTick":{       //x轴刻度线
				"show":false
			},
			interval: 25,
			max:110,
		},
		yAxis: {
			type: 'category',
			data: ['人事共享服务', '薪酬共享服务', '考勤共享服务'],
			axisLabel: {
				textStyle: {
					fontSize: setAdaption(7),
					color: 'rgba(255,255,255,0.8)'
				}
			},
			axisLine: { //x轴线的颜色以及宽度
                show: true,
                lineStyle: {
                    color: "#4B5365",
                    width: setAdaption(1),
					type: "solid"
				}
			},
			"axisTick":{       //y轴刻度线
				lineStyle: {
                    color: "#4B5365",
					width: setAdaption(1),
					type: "solid"
				}
			},
		},
		series: [
			{
				name: '态度',
				type: 'bar',
				barWidth: setAdaption(9),
				barGap: '10%',
				itemStyle: {
                    normal: {
                        color: "#1890FF",
                    }
                },
				data: [95, 85, 90],
			},
			{
				name: '效率',
				type: 'bar',
				barWidth: setAdaption(9),
				barGap: '10%',
				itemStyle: {
                    normal: {
                        color: "#45DAD1",
                    }
                },
				data: [92, 95, 90],
			},
			{
				name: '质量',
				type: 'bar',
				barWidth: setAdaption(9),
				barGap: '10%',
				itemStyle: {
                    normal: {
                        color: "#FFA940",
                    }
                },
				data: [88, 90, 95],
			}
		]
	}
}

function setAdaption(size) {
    return window.setPro * size;
}
