export default function getGraph () {
    return {
        // legend: {
        //     data: ['人物关系']//此处的数据必须和关系网类别中name相对应
        // },
        tooltip: {},
        series: [{
            type: 'graph',
            // x: 100,
            // y: 20,
            layout: 'force',
            animation: false,
            roam: true,
            focusNodeAdjacency: true,
            // label: {
            //     normal: {
            //         show:true,
            //         position: 'right'
            //     }
            // },
            draggable: true,
            force: {  
                layoutAnimation:true,
                // xAxisIndex : 0, //x轴坐标 有多种坐标系轴坐标选项
                // yAxisIndex : 0, //y轴坐标
                gravity:0.03,  //节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                edgeLength: 60,  //边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
                repulsion: 55  //节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
            },
            data: webkitDep.nodes.map(function (node, idx) {
                node.id = idx;
                node.category = 0;

                var fontsize = 10;
                var symbolSize = 100;
                var pos = 'inside';
                var textalign = 'center';
                var lineHeight = 11;
                if(idx > 4){
                    fontsize = 8
                    symbolSize = 30
                    lineHeight = 9
                    pos = node.labelPos
                    if(pos == 'left'){
                        textalign = 'right'
                    }else if(pos == 'right'){
                        textalign = 'left'
                    }
                }else if(idx > 0){
                    symbolSize = 80;
                    lineHeight = 9;
                }
                node.label = {
                    normal: {
                        show: true,
                        color: "rgba(255,255,255,0.8)",
                        position: pos,
                        fontSize: setAdaption(fontsize),
                        align: textalign,
                        lineHeight: setAdaption(lineHeight),
                        // textStyle: {
                        //     color: "rgba(255,255,255,0.8)",
                        // },
                        formatter: function(data) {
                            var item = data.data;
                            var result = item.name;
                            if(item.value > 4){
                                result = item.name + '\n' + '处理中：' + item.beingProcessed + '\n' + '已完成：' + item.beenCompleted
                            }
                            return result;
                        },
                    }
                };
                node.symbolSize = setAdaption(symbolSize);

                if(webkitDep.bgimg[idx]){
                    node.symbol = 'image://'+require('../assets/'+webkitDep.bgimg[idx]);
                }else{
                    var bgindex = parseInt(Math.random()*webkitDep.bgimg.length);
                    node.symbol = 'image://'+require('../assets/'+webkitDep.bgimg[bgindex]);
                }
                return node;
            }),
            categories: webkitDep.categories,
            // force: {
            //     edgeLength: setAdaption(48),//连线的长度
            //     repulsion: 100  //子节点之间的间距
            // },
            edges: webkitDep.links,
            // emphasis: {
            //     lineStyle: {
            //         width: 10
            //     }
            // }
        }]
    }
}
  
var webkitDep = {
    "type": "force",
    "categories": [//关系网类别，可以写多组
        {
            "name": "人物关系",//关系网名称
            "keyword": {},
            "base": "人物关系"
        }
    ],
    "nodes": [//展示的节点
        {
            "name": "数智化HR共享\n服务中心",//节点名称
            "value": 0,
            x: setAdaption(100),
            y: setAdaption(150)
        },{
            "name": "智能招聘",
            "value": 1,
            x: setAdaption(50),
            y: setAdaption(120)
        },{
            "name": "薪酬社保",
            "value": 2,
            x: setAdaption(70),
            y: setAdaption(190)
        },{
            "name": "基础人事",
            "value": 3,
            x: setAdaption(150),
            y: setAdaption(120)
        },{
            "name": "假期考勤",
            "value": 4,
            x: setAdaption(150),
            y: setAdaption(180)
        },{     // 基础人事子节点
            "name": "入职办理",
            "value": 5,
            x: setAdaption(130),
            y: setAdaption(90),
            labelPos: 'left',
            beingProcessed: 35,
            beenCompleted: 55
        },{
            "name": "电子合同",
            "value": 6,
            x: setAdaption(170),
            y: setAdaption(90),
            labelPos: 'right',
            beingProcessed: 110,
            beenCompleted: 85
        },{
            "name": "证明开具",
            "value": 7,
            x: setAdaption(190),
            y: setAdaption(120),
            labelPos: 'right',
            beingProcessed: 30,
            beenCompleted: 42
        },{
            "name": "离职办理",
            "value": 8,
            x: setAdaption(170),
            y: setAdaption(150),
            labelPos: 'right',
            beingProcessed: 8,
            beenCompleted: 12
        },{     // 智能招聘子节点
            "name": "简历解析",
            "value": 9,
            x: setAdaption(20),
            y: setAdaption(100),
            labelPos: 'left',
            beingProcessed: 180,
            beenCompleted: 460
        },{
            "name": "机器人面试",
            "value": 10,
            x: setAdaption(20),
            y: setAdaption(140),
            labelPos: 'left',
            beingProcessed: 15,
            beenCompleted: 30
        },{     // 薪酬社保子节点 50,180
            "name": "智能算薪",
            "value": 11,
            x: setAdaption(30),
            y: setAdaption(170),
            labelPos: 'left',
            beingProcessed: 23,
            beenCompleted: 68
        },{
            "name": "机器人社保",
            "value": 12,
            x: setAdaption(20),
            y: setAdaption(200),
            labelPos: 'bottom',
            beingProcessed: 22,
            beenCompleted: 56
        },{
            "name": "机器人报税",
            "value": 13,
            x: setAdaption(50),
            y: setAdaption(235),
            labelPos: 'right',
            beingProcessed: 18,
            beenCompleted: 48
        },{
            "name": "电子工资条",
            "value": 14,
            x: setAdaption(105),
            y: setAdaption(230),
            labelPos: 'right',
            beingProcessed: 85,
            beenCompleted: 168
        },{     // 假期考勤子节点 150，180
            "name": "语音请假",
            "value": 15,
            x: setAdaption(190),
            y: setAdaption(180),
            labelPos: 'right',
            beingProcessed: 25,
            beenCompleted: 56
        },{
            "name": "年假问询",
            "value": 16,
            x: setAdaption(170),
            y: setAdaption(215),
            labelPos: 'right',
            beingProcessed: 210,
            beenCompleted: 300
        },{
            "name": "智能排班",
            "value": 17,
            x: setAdaption(130),
            y: setAdaption(215),
            labelPos: 'right',
            beingProcessed: 60,
            beenCompleted: 120
        }
        
        
    ],
    "links": [{//节点之间连接
            "source": 0,//起始节点，0表示第一个节点
            "target": 1 //目标节点，1表示与索引为1的节点进行连接
        },{
            "source": 0,
            "target": 2
        },{
            "source": 0,
            "target": 3
        },{
            "source": 0,
            "target": 4
        },{
            "source": 5,
            "target": 3
        },{
            "source": 6,
            "target": 3
        },{
            "source": 7,
            "target": 3
        },{
            "source": 8,
            "target": 3
        },{
            "source": 9,
            "target": 1
        },{
            "source": 10,
            "target": 1
        },{
            "source": 11,
            "target": 2
        },{
            "source": 12,
            "target": 2
        },{
            "source": 13,
            "target": 2
        },{
            "source": 14,
            "target": 2
        },{
            "source": 15,
            "target": 4
        },{
            "source": 16,
            "target": 4
        },{
            "source": 17,
            "target": 4
        }
    ],
    "bgimg": ['111@2x.png', '33@2x.png', '66@2x.png', '44@2x.png', '55@2x.png']
};

function setAdaption(size) {
    return window.setPro * size;
}