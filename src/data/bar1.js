export default function getData () {
	return {
		title: {
			x: 'center',
			y: '5%',
			text: '员工不满意服务TOP3',
			// subtext: '数据来自网络'
			textStyle: {
				fontSize: setAdaption(12),
				color: '#fff'
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
			orient: 'vertical',
			x:'right',      //可设定图例在左、右、居中
			y:'bottom',     //可设定图例在上、下、居中
			bottom:'5%',
			// padding:[0,0,0,setAdaption(50)],   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
			data: ['态度', '效率', '质量'],
			textStyle: {
				fontSize: setAdaption(10),
				color: '#96CEFF'
			}
		},
		grid: {
			width: '80%',
			height: '65%',
			// top: '25%',
			left: '3%',
			right: '4%',
			bottom: '5%',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			boundaryGap: [0, 0.01],
			axisLabel: {
				textStyle: {
					fontSize: setAdaption(10),
					color: '#96CEFF'
				},
				formatter: function(data) {
					return data + '%';
				}
			},
			axisLine: { //x轴线的颜色以及宽度
                show: true,
                lineStyle: {
                    color: "rgba(219,225,255,1)",
                    width: 0,
					type: "solid"
				}
            },
		},
		yAxis: {
			type: 'category',
			data: ['人事共享服务', '薪酬共享服务', '考勤共享服务'],
			axisLabel: {
				textStyle: {
					fontSize: setAdaption(10),
					color: '#96CEFF'
				}
			},
			axisLine: { //x轴线的颜色以及宽度
                show: true,
                lineStyle: {
                    color: "rgba(219,225,255,1)",
                    width: 0,
					type: "solid"
				}
            },
		},
		series: [
			{
				name: '态度',
				type: 'bar',
				data: [95, 85, 90],
				label: {
					show: true,
					position: 'insideRight'
				},
			},
			{
				name: '效率',
				type: 'bar',
				data: [92, 95, 90],
				label: {
					show: true,
					position: 'insideRight'
				},
			},
			{
				name: '质量',
				type: 'bar',
				data: [88, 90, 95],
				label: {
					show: true,
					position: 'insideRight'
				},
			}
		]
	}
}

function setAdaption(size) {
    return window.setPro * size;
}
