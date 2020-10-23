<template>
	<div class="wrap">
		<div class="header">
			<div class="pagetitle">
				<span class="logo"></span>HR共享
			</div>
			<ul class="msgbox">
				<li v-for="(item, index) in headerData" :key="'header'+index" :class="'list'+index">
					<template v-if="index == 0">
						<div class="fieldval figure-bold">
							<template v-for="(num, numindex) in serviceTime">
								<span v-if="num == ','" class="comma" :key="'num'+numindex">{{num}}</span>
								<span v-else class="numcard" :key="'num'+numindex">{{num}}</span>
							</template>
						</div>
					</template>
					<div v-else class="fieldval">
						<span class="bignum figure">{{item.value}}</span>
					</div>
					<div class="fieldname">{{item.name}}</div>
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
	import ECharts from 'vue-echarts'
	import 'echarts/lib/chart/graph'
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
				graphCounter: 0,
				serviceTime: ['1',',','5','8','7',',','6','4','5'],
				headerData: [{
					name: '累计服务人次',
					value: 1587645,
				},{
					name: '平均响应时间(m)',
					value: '5',
				},{
					name: '自主化服务占比',
					value: '65%',
				},{
					name: '员工满意度水平',
					value: '99.5%',
				}],
				RandomFocusTime: null,	// 随机聚焦子节点定时器
				servicePersonTime: null,	// 累计服务人次定时器
				EmployeeSatisfaction: null,	// 员工满意度定时器

			}
		},
		created() {
			this.refreshData();
		},
		methods: {
			refreshData(){
				var that = this;
				that.graphCounter = 1;
				this.RandomFocusTime = setInterval(function(){
					if(that.graphCounter == 0){
						that.graph.series[0].data = that.graph.data0;
					}else if(that.graphCounter == 1){
						that.graph.series[0].data = that.graph.data1;
					}else 
					if(that.graphCounter == 2){
						that.graph.series[0].data = that.graph.data2;
					}
					else if(that.graphCounter == 3){
						that.graph.series[0].data = that.graph.data3;
					}
					that.graphCounter += 1;
					if(that.graphCounter > 3){
						that.graphCounter = 0
					}
				}, 5000)

				this.servicePersonTime = setInterval(function(){
					if(that.headerData[0].value < 1587765){
						that.headerData[0].value += 1;
					}else{
						that.headerData[0].value = 1587645;
					}
					var str = that.headerData[0].value.toLocaleString();
					var arr = str.split('');
					that.serviceTime = arr;
				},30000)

				this.EmployeeSatisfaction = setInterval(function(){
					var randomS = parseInt(Math.random()*8+989)/10;		// [98.9,99.7)
					that.headerData[3].value = randomS + '%';
				},3000)
			},
		},
		beforeDestroy(){
			clearInterval()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './../assets/font/font.css';
.wrap{
	height: 54rem;
	// position: relative;
    // top: -15rem;
}
.figure{
	font-family: 'KINGDEEKB-Regular';
}
.figure-bold{
	font-family: 'KINGDEEKB-Bold';
}
.figure-light{
	font-family: 'KINGDEEKB-Light';
}
.header{
	width: 96rem;
	// height: 27.3148%;
	margin-bottom: 0.75rem;
	.pagetitle{
		.logo{
			width: 7.5rem;
			height: 3.75rem;
			display: block;
			background: url("../assets/logo.png") center no-repeat;
			background-size: contain;
			float: left;
			margin-left: 1.75rem;
			margin-right: 0.5rem;
		}
		font-size: 1.5rem;
		color: rgb(171, 163, 163);
		height: 4rem;
		border-bottom: 0.25rem solid #188DF0;
		box-sizing: border-box;
		line-height: 3.75rem;
	}
	.msgbox{
		color: #fff;
		height: 10.75rem;
		padding: 2.625rem 0 2.225rem 2rem;
		background-color: #27314A;
		border-radius: 0 0 0 0.25rem;
		li{
			display: inline-block;
			font-size: 1.5rem;
			.fieldname{
				font-size: 1.125rem;
				color: rgba(255,255,255,0.7);
				letter-spacing: 5px;
				margin-top: 1.1rem;
			}
			.fieldval{
				line-height: 2rem;
				height: 3.675rem;
				.bignum{
					font-size: 4.75rem;
				}
			}
		}
		.list0{
			text-align: center;
			margin-right: 6.95rem;
			.numcard{
				width: 3.1rem;
				height: 3.675rem;
				background: #00A9FF;
				border-radius: 7px;
				float: left;
				line-height: 3.675rem;
				font-size: 3rem;
				margin-right: 0.35rem;
			}
			.comma{
				width: 1.1rem;
				height: 3.675rem;
				float: left;
				line-height: 3.675rem;
				font-size: 3rem;
				position: relative;
				top: 0.8rem;
				left: -0.25rem;
			}
		}
		.list1 .bignum{
			color: #95DE64;
		}
		.list2 .bignum{
			color: #1890FF;
		}
		.list3 .bignum{
			color: #08C2B6;
		}
		.list1, .list2, .list3{
			margin-right: 10rem;
		}
	}
}
.graphwrap{
	width: 70.25rem;
	height: 38.4rem;
	background-color: #27314A;
	float: left;
	border-radius: 0 0.25rem 0 0;
	.echarts{
		width: 100%;
		height: 100%;
	}
}
.barwrap{
	width: 25rem;
	height: 80%;
	float: right;
	.bar{
		width: 100%;
		height: 18.825rem;
		background-color: #27314A;
	}
	.bar1{
		border-radius: 0.25rem 0 0 0.25rem;
	}
	.bar2{
		margin-top: 0.75rem;
		border-radius: 0.25rem 0 0 0;
	}
}
.echarts{
	width: 100%;
	height: 100%;
}
</style>
