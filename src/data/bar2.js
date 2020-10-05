export default function getData () {
	return {
		title: {
			x: 'center',
			y: '10%',
			text: '共享中心服务对象满意度TOP5',
			// subtext: '数据来自网络'
			textStyle: {
				fontSize: setAdaption(12),
				color: '#fff'
			}
		},
		// legend: {},
		color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
			axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			width: '80%',
			height: '60%',
			// top: '25',
			left: '10%',
			right: '4%',
			bottom: '5%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['上海', '深圳', '成都', '武汉', '北京'],
			axisTick: {
				alignWithLabel: true
			},
			axisLine: { //x轴线的颜色以及宽度
                show: true,
                lineStyle: {
                    color: "rgba(219,225,255,1)",
                    width: 0,
					type: "solid"
				}
            },
			axisLabel: {
				textStyle: {
					fontSize: setAdaption(10),
					color: '#96CEFF'
				}
			},
			// splitLine: {//分割线配置
            //     show:false,
            //     lineStyle: {
            //         color: "rgba(219,225,255,1)",
            //  	}
			// }
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				show: false
			},
			axisLine: {
				show: false
			}
		},
		series: [
			{
				name: '直接访问',
				type: 'bar',
				barWidth: '30%',
				data: [98, 96, 95, 92,90],
				label: {
					show: true,
					position: 'insideTop',
					formatter: function(data) {
						return data.data + '%';
					}
				}
			}
		]
	}
}

function randomize () {
	return [0, 0, 0].map(v => {
		return Math.round(300 + Math.random() * 700) / 10
	})
}

function setAdaption(size) {
    if(!setPro){
        var setPro = getSetPro();
    }
    return setPro * size;
}

function getSetPro(){
    var setPro = 1;
    var docEl = document.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            setPro = clientWidth / 960;
            docEl.style.fontSize = 10 * (clientWidth / 960) + 'px';
        };
        recalc();
    if (!document.addEventListener) return setPro;
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
    return setPro;
}
  