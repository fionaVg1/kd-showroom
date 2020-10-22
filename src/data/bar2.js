import echarts from 'vue-echarts'
export default function getData () {
	return {
		title: {
			x: setAdaption(15),
			y: setAdaption(12.5),
			text: '共享中心服务对象满意度TOP5',
			textStyle: {
				fontSize: setAdaption(11.25),
				color: '#00A9FF'
			}
		},
		color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
			axisPointer: {			// 坐标轴指示器，坐标轴触发有效
				type: 'shadow'		// 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			width: setAdaption(227.5),
			height: setAdaption(132.75),
			left: setAdaption(15),
			top: setAdaption(36),
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['上海公司', '深圳公司', '成都公司', '武汉公司', '北京公司'],
			axisLabel: {
				textStyle: {
					fontSize: setAdaption(7),
					color: 'rgba(255,255,255,0.8)'
				}
			},
			axisLine: { 			//x轴线的颜色以及宽度
                show: true,
                lineStyle: {
                    color: "#4B5365",
                    width: setAdaption(1),
					type: "solid"
				},
				symbol: ['line', 'arrow'],
				symbolSize: [setAdaption(3.75),setAdaption(6)]
			},
			"axisTick":{			//y轴刻度线
				"show":false
			},
		},
		yAxis: {
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
			axisLine: {				//x轴线的颜色以及宽度
                show: true,
                lineStyle: {
                    color: "#535B6D",
                    width: setAdaption(1),
					type: "solid"
				},
				symbol: ['line', 'arrow'],
				symbolSize: [setAdaption(3.75),setAdaption(6)]
			},
			"splitLine": {			//网格线
				"show": false
			},
			"axisTick":{			//y轴刻度线
				lineStyle: {
                    color: "#535B6D",
					width: setAdaption(1),
					type: "solid"
				},
				axisMaxLabel: false
			},
			
			interval: 25,
			max:105,
		},
		series: [
			{
				name: '直接访问',
				type: 'bar',
				barWidth: '30%',
				data: [98, 96, 95, 92,90],
				barGap: setAdaption(26.25),
				itemStyle: {
                    normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1,
							[
								{offset: 0, color: '#1890FF'},                   //柱图渐变色
								{offset: 1, color: '#4E73FE'},                   //柱图渐变色
							]
						)
                    }
                },
			}
		]
	}
}

function setAdaption(size) {
    return window.setPro * size;
}
  