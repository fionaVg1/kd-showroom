export default function getGraph () {
    return {
        // legend: {
        //     data: ['人物关系']//此处的数据必须和关系网类别中name相对应
        // },
        tooltip: {},
        series: [{
            type: 'graph',
            // x: 0,
            // y: 0,
            layout: 'none',    //force
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
                // gravity:0.03,  //节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                // edgeLength: 60,  //边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
                // repulsion: 55  //节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
            },
            data: webkitDep.nodes.map(function (node, idx) {
                node.id = idx;
                node.category = 0;

                var fontsize = 15;
                // var symbolSize = 150;
                var pos = 'inside';
                var textalign = 'center';
                var lineHeight = 24;
                if(idx == 11){
                    fontsize = 5
                    // symbolSize = 40
                }else if(idx > 4){
                    fontsize = 6.5
                    // symbolSize = 50
                    lineHeight = 10
                    // pos = node.labelPos
                    // if(pos == 'left'){
                    //     textalign = 'right'
                    // }else if(pos == 'right'){
                    //     textalign = 'left'
                    // }
                }else if(idx > 0){
                    fontsize = 12.5
                    // symbolSize = 92;
                    lineHeight = 17.5;
                }
                node.label = {
                    normal: {
                        show: true,
                        color: "rgba(255,255,255,0.8)",
                        position: pos,
                        fontSize: setAdaption(fontsize),
                        align: textalign,
                        lineHeight: setAdaption(lineHeight),
                        textStyle: {
                            // color: "rgba(255,255,255,0.6)",
                        },
                        // formatter: function(data) {
                        //     var item = data.data;
                        //     var result = item.name;
                        //     if(item.value > 4){
                        //         result = item.name + '\n' + '处理中：' + item.beingProcessed + '\n' + '已完成：' + item.beenCompleted
                        //     }
                        //     return result;
                        // },
                    }
                };
                // node.symbolSize = setAdaption(node.symbolSize);
                node.symbol = 'image://'+require('../assets/'+node.src);
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
            "name": "数智化HR\n共享服务中心",//节点名称
            "value": 0,
            x: setAdaption(0),
            y: setAdaption(0),
            src: 'circle00.png',
            symbolSize: setAdaption(150)
        },{
            "name": "智能\n招聘",
            "value": 1,
            x: setAdaption(-120),
            y: setAdaption(-90),
            src: 'circle03.png',
            symbolSize: setAdaption(92)
        },{
            "name": "薪酬\n社保",
            "value": 2,
            x: setAdaption(-120),
            y: setAdaption(80),
            src: 'circle04.png',
            symbolSize: setAdaption(92)
        },{
            "name": "基础\n人事",
            "value": 3,
            x: setAdaption(280),
            y: setAdaption(-40),
            src: 'circle01-live.png',
            symbolSize: setAdaption(121.73)
        },{
            "name": "假期\n考勤",
            "value": 4,
            x: setAdaption(80),
            y: setAdaption(120),
            src: 'circle02.png',
            symbolSize: setAdaption(92)
        },{     // 基础人事子节点
            "name": "入职办理",
            "value": 5,
            x: setAdaption(181.5),
            y: setAdaption(-119.5),
            labelPos: 'left',
            beingProcessed: 35,
            beenCompleted: 55,
            src: 'circle01.png',
            symbolSize: setAdaption(95)
        },{
            "name": "电子合同",
            "value": 6,
            x: setAdaption(396.5),
            y: setAdaption(-116.5),
            labelPos: 'right',
            beingProcessed: 110,
            beenCompleted: 85,
            src: 'circle01.png',
            symbolSize: setAdaption(95)
        },{
            "name": "证明开具",
            "value": 7,
            x: setAdaption(375),
            y: setAdaption(40),
            labelPos: 'right',
            beingProcessed: 30,
            beenCompleted: 42,
            src: 'circle01.png',
            symbolSize: setAdaption(95)
        },{
            "name": "离职办理",
            "value": 8,
            x: setAdaption(200),
            y: setAdaption(70),
            labelPos: 'right',
            beingProcessed: 8,
            beenCompleted: 12,
            src: 'circle01.png',
            symbolSize: setAdaption(95)
        },{     // 智能招聘子节点
            "name": "简历解析",
            "value": 9,
            x: setAdaption(-57.5),
            y: setAdaption(-151),
            labelPos: 'left',
            beingProcessed: 180,
            beenCompleted: 460,
            src: 'circle03.png',
            symbolSize: setAdaption(50)
        },{
            "name": "机器人面试",
            "value": 10,
            x: setAdaption(-196),
            y: setAdaption(-128),
            labelPos: 'left',
            beingProcessed: 15,
            beenCompleted: 30,
            src: 'circle03.png',
            symbolSize: setAdaption(50)
        },{     // 薪酬社保子节点 50,180
            "name": "智能算薪",
            "value": 11,
            x: setAdaption(-105),
            y: setAdaption(0),
            labelPos: 'left',
            beingProcessed: 23,
            beenCompleted: 68,
            src: 'circle04.png',
            symbolSize: setAdaption(40)
        },{
            "name": "机器人社保",
            "value": 12,
            x: setAdaption(-195),
            y: setAdaption(36),
            labelPos: 'bottom',
            beingProcessed: 22,
            beenCompleted: 56,
            src: 'circle04.png',
            symbolSize: setAdaption(50)
        },{
            "name": "机器人报税",
            "value": 13,
            x: setAdaption(-192.5),
            y: setAdaption(155),
            labelPos: 'right',
            beingProcessed: 18,
            beenCompleted: 48,
            src: 'circle04.png',
            symbolSize: setAdaption(50)
        },{
            "name": "电子工资条",
            "value": 14,
            x: setAdaption(-75),
            y: setAdaption(146.7),
            labelPos: 'right',
            beingProcessed: 85,
            beenCompleted: 168,
            src: 'circle04.png',
            symbolSize: setAdaption(50)
        },{     // 假期考勤子节点 150，180
            "name": "语音请假",
            "value": 15,
            x: setAdaption(121.5),
            y: setAdaption(39),
            labelPos: 'right',
            beingProcessed: 25,
            beenCompleted: 56,
            src: 'circle02.png',
            symbolSize: setAdaption(50)
        },{
            "name": "年假问询",
            "value": 16,
            x: setAdaption(-5),
            y: setAdaption(106),
            labelPos: 'right',
            beingProcessed: 210,
            beenCompleted: 300,
            src: 'circle02.png',
            symbolSize: setAdaption(50)
        },{
            "name": "智能排班",
            "value": 17,
            x: setAdaption(160),
            y: setAdaption(151),
            labelPos: 'right',
            beingProcessed: 60,
            beenCompleted: 120,
            src: 'circle02.png',
            symbolSize: setAdaption(50)
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
    "bgimg": ['circle00.png', '33@2x.png', '66@2x.png', '44@2x.png', '55@2x.png']
};

function setAdaption(size) {
    return window.setPro * size;
}