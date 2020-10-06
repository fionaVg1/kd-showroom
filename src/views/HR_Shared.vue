<template>
	<div class="wrap">
		<div class="header">
			<div class="pagetitle">HR共享</div>
			<ul class="msgbox">
				<li v-for="(item, index) in headerData" :key="'header'+index">
					<div class="fieldname">{{item.name}}</div>
					<div class="fieldval">
						<i></i>
						<span>{{item.value}}</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="graphwrap">
			<v-chart :options="graph" :init-options="initOptions" ref="graph" autoresize></v-chart>
		</div>
		<div class="barwrap">
			<div class="bar bar1">
				<v-chart :options="bar1" :init-options="initOptions" ref="bar1" autoresize></v-chart>
			</div>
			<div class="bar bar2">
				<v-chart :options="bar2" :init-options="initOptions" ref="bar2" autoresize></v-chart>
			</div>
		</div>
	</div>
</template>
<script>
	import 'echarts/lib/chart/graph'
	import ECharts from 'vue-echarts'
	import getGraph from '../data/graph'

	import 'echarts/lib/component/title'
	import 'echarts/lib/component/legend'
	import 'echarts/lib/chart/bar'
	import getBar1 from '../data/bar1'
	import getBar2 from '../data/bar2'	

	export default {
		name: 'HR-Shared',
		props: {
			msg: String
		},
		components:{
			'v-chart':ECharts
		},
		data(){
			return{ 
				graph:getGraph(),
				bar1:getBar1(),
				bar2:getBar2(),
				initOptions:{
					renderer: 'canvas'
				},
				counter: 0,
				prevRandom: 0,
				currBgImg: '22@2x.png',
				bgImgArr: ['111@2x.png', '33@2x.png', '66@2x.png', '44@2x.png', '55@2x.png'],
				headerData: [{
					name: '累计服务人次',
					value: 1587645,
				},{
					name: '成本节约',
					value: '28%',
				},{
					name: '平均响应时间',
					value: '5m',
				},{
					name: '自主化服务占比',
					value: '65%',
				},{
					name: '员工满意度水平',
					value: '99.5%',
				}]
			}
		},
		created() {
			this.refreshData();
		},
		methods: {
			refreshData(){
				var that = this;
				setInterval(function(){
					var datalength = that.graph.series[0].data.length;
					var currRadom = parseInt(Math.random()*(datalength-5)+5);	// [5,18)
					if(that.prevRandom != currRadom){
						that.graph.series[0].data[currRadom].symbolSize = that.graph.series[0].data[currRadom].symbolSize + 20;
						that.graph.series[0].data[currRadom].symbol = 'image://'+require('../assets/'+that.currBgImg);
						that.graph.series[0].data[currRadom].label.normal.color = 'rgba(255,255,255,1)';
						if(that.prevRandom != 0){
							that.graph.series[0].data[that.prevRandom].symbolSize = that.graph.series[0].data[that.prevRandom].symbolSize - 20;
							that.graph.series[0].data[that.prevRandom].label.normal.color = 'rgba(255,255,255,0.8)';
							if(that.bgImgArr[that.prevRandom]){
								that.graph.series[0].data[that.prevRandom].symbol = 'image://'+require('../assets/'+that.bgImgArr[that.prevRandom]);
							}else{
								var imgbgRadom = parseInt(Math.random()*that.bgImgArr.length);
								that.graph.series[0].data[that.prevRandom].symbol = 'image://'+require('../assets/'+that.bgImgArr[imgbgRadom]);
							}
						}
						that.prevRandom = currRadom;
					}
				}, 5000)
			},
		},
		beforeDestroy(){
			clearInterval()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap{
	height: 54rem;
}
.header{
	width: 96rem;
	height: 20%;
	.pagetitle{
		font-size: 3rem;
		color: #fff;
	}
	.msgbox{
		color: #fff;
		margin-top: 1rem;
		li{
			display: inline-block;
			width: 20%;
			font-size: 1.5rem;
			.fieldval{
				line-height: 2rem;
			}
			i{
				width: 2rem;
				height: 2rem;
				display: inline-block;
				background: url("../assets/22@2x.png") center no-repeat;
				background-size: contain;
				position: relative;
				top: 0.3rem;
			}
		}
	}
}
.graphwrap{
	width: 60%;
	height: 80%;
	background-color: #000;
	display: inline-block;
	
	.echarts{
		width: 100%;
		height: 100%;
	}
}
.barwrap{
	width: 40%;
	height: 80%;
	background-color: #242b3c;
	display: inline-block;
	.bar{
		width: 100%;
		height: 50%;
	}
}
.echarts{
	height: 100%;
}
</style>
