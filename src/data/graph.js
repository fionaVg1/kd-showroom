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
                var pos = 'inside';
                // var textalign = 'center';
                var lineHeight = 24;
                var color = "rgba(255,255,255,0.6)";
                if(idx == 0 || idx == 3){
                    color = "rgba(255,255,255,1)";
                }else
                if(idx == 11){
                    fontsize = 5
                }else if(idx > 4){
                    fontsize = 6.5
                    lineHeight = 10
                }else if(idx > 0){
                    fontsize = 12.5
                    lineHeight = 17.5;
                }
                node.label = {
                    normal: {
                        show: true,
                        color: color,
                        position: pos,
                        fontSize: setAdaption(fontsize),
                        // align: idx == 0? 'center': '',
                        lineHeight: setAdaption(lineHeight),
                        formatter: function(data) {
                            var item = data.data;
                            var result = item.name;
                            if(item.value > 4 && item.value < 9){
                                result = '{color1|'+item.name + '\n' +'}{color2|'+ '处理中：' + item.beingProcessed + '\n' + '已完成：' + item.beenCompleted+'}'
                            }
                            return result;
                        },
                        rich: {
                            color1: {
                                color: "rgba(255,255,255,1)",
                                lineHeight: setAdaption(13),
                                fontSize: setAdaption(10),
                                textAlign: 'left'
                            },
                            color2: {
                                color: '#00FEFB',
                                lineHeight: setAdaption(11),
                                fontSize: setAdaption(8),
                                align: 'left',
                                textAlign: 'left'
                            }
                        },
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
        }],
        data0: webkitDep.nodes.map(function (node, idx) {
            node.id = idx;
            node.category = 0;
            var fontsize = 15;
            var pos = 'inside';
            // var textalign = 'center';
            var lineHeight = 24;
            var color = "rgba(255,255,255,0.6)";
            if(idx == 0 || idx == 3){
                color = "rgba(255,255,255,1)";
            }else
            if(idx == 11){
                fontsize = 5
            }else if(idx > 4){
                fontsize = 6.5
                lineHeight = 10
            }else if(idx > 0){
                fontsize = 12.5
                lineHeight = 17.5;
            }
            node.label = {
                normal: {
                    show: true,
                    color: color,
                    position: pos,
                    fontSize: setAdaption(fontsize),
                    // align: textalign,
                    lineHeight: setAdaption(lineHeight),
                    formatter: function(data) {
                        var item = data.data;
                        var result = item.name;
                        if(item.value == 0){
                            result = '{color0|数智化HR}' + '\n' + '{color0|共享服务中心}'
                        }
                        if(item.value > 4 && item.value < 9){
                            result = '{color1|'+item.name + '\n' +'}{color2|'+ '处理中：' + item.beingProcessed + '\n' + '已完成：' + item.beenCompleted+'}'
                        }
                        return result;
                    },
                    rich: {
                        color0: {
                            color: "rgba(255,255,255,1)",
                            fontSize: setAdaption(15),
                            lineHeight: setAdaption(24),
                            align: 'center',
                        },
                        color1: {
                            color: "rgba(255,255,255,1)",
                            lineHeight: setAdaption(13),
                            fontSize: setAdaption(10),
                            textAlign: 'left'
                        },
                        color2: {
                            color: '#00FEFB',
                            lineHeight: setAdaption(11),
                            fontSize: setAdaption(8),
                            textAlign: 'left'
                        }
                    },
                }
            };
            // node.symbolSize = setAdaption(node.symbolSize);
            node.symbol = 'image://'+require('../assets/'+node.src);
            return node;
        }),
        data1: webkitDep1.nodes.map(function (node, idx) {
            node.id = idx;
            node.category = 0;

            var fontsize = 15;
            var pos = 'inside';
            // var textalign = '';
            var lineHeight = 24;
            var color = "rgba(255,255,255,0.6)";
            if(idx == 0 || idx == 4 || idx == 15 || idx == 16 || idx == 17){
                color = "rgba(255,255,255,1)";
            }else
            if(idx == 11){
                fontsize = 5
            }else if(idx > 4){
                fontsize = 6.5
                lineHeight = 10
            }else if(idx > 0){
                fontsize = 12.5
                lineHeight = 17.5;
            }
            node.label = {
                normal: {
                    show: true,
                    color: color,
                    position: pos,
                    fontSize: setAdaption(fontsize),
                    // align: idx == 0 ? 'center':'justify',
                    lineHeight: setAdaption(lineHeight),
                    formatter: function(data) {
                        var item = data.data;
                        var result = item.name;
                        if(item.value == 0){
                            result = '{color0|数智化HR}' + '\n' + '{color0|共享服务中心}'
                        }
                        if(item.value > 14 && item.value < 18){
                            result = '{color1|'+item.name + '\n' +'}{color2|'+ '处理中：' + item.beingProcessed + '\n' + '已完成：' + item.beenCompleted+'}'
                        }
                        return result;
                    },
                    rich: {
                        color0: {
                            color: "rgba(255,255,255,1)",
                            fontSize: setAdaption(15),
                            lineHeight: setAdaption(24),
                            align: 'center',
                        },
                        color1: {
                            color: "rgba(255,255,255,1)",
                            lineHeight: setAdaption(13),
                            fontSize: setAdaption(10),
                        },
                        color2: {
                            color: '#00FEFB',
                            lineHeight: setAdaption(11),
                            fontSize: setAdaption(8),
                        }
                    },
                }
            };
            // node.symbolSize = setAdaption(node.symbolSize);
            node.symbol = 'image://'+require('../assets/'+node.src);
            return node;
        }),
        data2: webkitDep2.nodes.map(function (node, idx) {
            node.id = idx;
            node.category = 0;

            var fontsize = 15;
            var pos = 'inside';
            // var textalign = 'center';
            var lineHeight = 24;
            var color = "rgba(255,255,255,0.6)";
            if(idx == 0 || idx == 2 || idx == 11 || idx == 12 || idx == 13 || idx == 14){
                color = "rgba(255,255,255,1)";
            }else
            if(idx == 11){
                fontsize = 5
            }else if(idx > 4){
                fontsize = 6.5
                lineHeight = 10
            }else if(idx > 0){
                fontsize = 12.5
                lineHeight = 17.5;
            }
            node.label = {
                normal: {
                    show: true,
                    color: color,
                    position: pos,
                    fontSize: setAdaption(fontsize),
                    // align: textalign,
                    lineHeight: setAdaption(lineHeight),
                    formatter: function(data) {
                        var item = data.data;
                        var result = item.name;
                        if(item.value == 0){
                            result = '{color0|数智化HR}' + '\n' + '{color0|共享服务中心}'
                        }
                        if(item.value > 10 && item.value < 15){
                            result = '{color1|'+item.name + '\n' +'}{color2|'+ '处理中：' + item.beingProcessed + '\n' + '已完成：' + item.beenCompleted+'}'
                        }
                        return result;
                    },
                    rich: {
                        color0: {
                            color: "rgba(255,255,255,1)",
                            fontSize: setAdaption(15),
                            lineHeight: setAdaption(24),
                            align: 'center',
                        },
                        color1: {
                            color: "rgba(255,255,255,1)",
                            lineHeight: setAdaption(13),
                            fontSize: setAdaption(10),
                        },
                        color2: {
                            color: '#00FEFB',
                            lineHeight: setAdaption(11),
                            fontSize: setAdaption(8),
                        }
                    },
                }
            };
            // node.symbolSize = setAdaption(node.symbolSize);
            node.symbol = 'image://'+require('../assets/'+node.src);
            return node;
        }),
        data3: webkitDep3.nodes.map(function (node, idx) {
            node.id = idx;
            node.category = 0;

            var fontsize = 15;
            var pos = 'inside';
            // var textalign = 'center';
            var lineHeight = 24;
            var color = "rgba(255,255,255,0.6)";
            if(idx == 0 || idx == 1 || idx == 9 || idx == 10){
                color = "rgba(255,255,255,1)";
            }else
            if(idx == 11){
                fontsize = 5
            }else if(idx > 4){
                fontsize = 6.5
                lineHeight = 10
            }else if(idx > 0){
                fontsize = 12.5
                lineHeight = 17.5;
            }
            node.label = {
                normal: {
                    show: true,
                    color: color,
                    position: pos,
                    fontSize: setAdaption(fontsize),
                    // align: textalign,
                    lineHeight: setAdaption(lineHeight),
                    formatter: function(data) {
                        var item = data.data;
                        var result = item.name;
                        if(item.value == 0){
                            result = '{color0|数智化HR}' + '\n' + '{color0|共享服务中心}'
                        }
                        if(item.value > 8 && item.value < 11){
                            result = '{color1|'+item.name + '\n' +'}{color2|'+ '处理中：' + item.beingProcessed + '\n' + '已完成：' + item.beenCompleted+'}'
                        }
                        return result;
                    },
                    rich: {
                        color0: {
                            color: "rgba(255,255,255,1)",
                            fontSize: setAdaption(15),
                            lineHeight: setAdaption(24),
                            align: 'center',
                        },
                        color1: {
                            color: "rgba(255,255,255,1)",
                            lineHeight: setAdaption(13),
                            fontSize: setAdaption(10),
                        },
                        color2: {
                            color: '#00FEFB',
                            lineHeight: setAdaption(11),
                            fontSize: setAdaption(8),
                        }
                    },
                }
            };
            // node.symbolSize = setAdaption(node.symbolSize);
            node.symbol = 'image://'+require('../assets/'+node.src);
            return node;
        }),
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
            src: 'circle03-alpha.png',
            symbolSize: setAdaption(92)
        },{
            "name": "薪酬\n社保",
            "value": 2,
            x: setAdaption(-120),
            y: setAdaption(80),
            src: 'circle04-alpha.png',
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
            src: 'circle02-alpha.png',
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
            src: 'circle03-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "机器人面试",
            "value": 10,
            x: setAdaption(-196),
            y: setAdaption(-128),
            labelPos: 'left',
            beingProcessed: 15,
            beenCompleted: 30,
            src: 'circle03-alpha.png',
            symbolSize: setAdaption(50)
        },{     // 薪酬社保子节点 50,180
            "name": "智能算薪",
            "value": 11,
            x: setAdaption(-105),
            y: setAdaption(0),
            labelPos: 'left',
            beingProcessed: 23,
            beenCompleted: 68,
            src: 'circle04-alpha.png',
            symbolSize: setAdaption(40)
        },{
            "name": "机器人社保",
            "value": 12,
            x: setAdaption(-195),
            y: setAdaption(36),
            labelPos: 'bottom',
            beingProcessed: 22,
            beenCompleted: 56,
            src: 'circle04-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "机器人报税",
            "value": 13,
            x: setAdaption(-192.5),
            y: setAdaption(155),
            labelPos: 'right',
            beingProcessed: 18,
            beenCompleted: 48,
            src: 'circle04-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "电子工资条",
            "value": 14,
            x: setAdaption(-75),
            y: setAdaption(146.7),
            labelPos: 'right',
            beingProcessed: 85,
            beenCompleted: 168,
            src: 'circle04-alpha.png',
            symbolSize: setAdaption(50)
        },{     // 假期考勤子节点 150，180
            "name": "语音请假",
            "value": 15,
            x: setAdaption(121.5),
            y: setAdaption(39),
            labelPos: 'right',
            beingProcessed: 25,
            beenCompleted: 56,
            src: 'circle02-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "年假问询",
            "value": 16,
            x: setAdaption(-5),
            y: setAdaption(106),
            labelPos: 'right',
            beingProcessed: 210,
            beenCompleted: 300,
            src: 'circle02-alpha.png',
            symbolSize: setAdaption(65)
        },{
            "name": "智能排班",
            "value": 17,
            x: setAdaption(160),
            y: setAdaption(151),
            labelPos: 'right',
            beingProcessed: 60,
            beenCompleted: 120,
            src: 'circle02-alpha.png',
            symbolSize: setAdaption(65)
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
    ]
};

function setAdaption(size) {
    return window.setPro * size;
}

var webkitDep1 = {
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
            src: 'circle03-alpha.png',
            symbolSize: setAdaption(92)
        },{
            "name": "薪酬\n社保",
            "value": 2,
            x: setAdaption(-120),
            y: setAdaption(80),
            src: 'circle04-alpha.png',
            symbolSize: setAdaption(92)
        },{
            "name": "基础\n人事",
            "value": 3,
            x: setAdaption(150),
            y: setAdaption(-80),
            src: 'circle01-alpha.png',
            symbolSize: setAdaption(92)
        },{
            "name": "假期\n考勤",
            "value": 4,
            x: setAdaption(250),
            y: setAdaption(80),
            src: 'circle02-live.png',
            symbolSize: setAdaption(121.73)
        },{     // 基础人事子节点
            "name": "入职办理",
            "value": 5,
            x: setAdaption(50),
            y: setAdaption(-119.5),
            labelPos: 'left',
            beingProcessed: 35,
            beenCompleted: 55,
            src: 'circle01-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "电子合同",
            "value": 6,
            x: setAdaption(150),
            y: setAdaption(-170),
            labelPos: 'right',
            beingProcessed: 110,
            beenCompleted: 85,
            src: 'circle01-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "证明开具",
            "value": 7,
            x: setAdaption(280),
            y: setAdaption(-116.5),
            labelPos: 'right',
            beingProcessed: 30,
            beenCompleted: 42,
            src: 'circle01-alpha.png',
            symbolSize: setAdaption(65)
        },{
            "name": "离职办理",
            "value": 8,
            x: setAdaption(220),
            y: setAdaption(-20),
            labelPos: 'right',
            beingProcessed: 8,
            beenCompleted: 12,
            src: 'circle01-alpha.png',
            symbolSize: setAdaption(65)
        },{     // 智能招聘子节点
            "name": "简历解析",
            "value": 9,
            x: setAdaption(-57.5),
            y: setAdaption(-151),
            labelPos: 'left',
            beingProcessed: 180,
            beenCompleted: 460,
            src: 'circle03-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "机器人面试",
            "value": 10,
            x: setAdaption(-196),
            y: setAdaption(-128),
            labelPos: 'left',
            beingProcessed: 15,
            beenCompleted: 30,
            src: 'circle03-alpha.png',
            symbolSize: setAdaption(50)
        },{     // 薪酬社保子节点 50,180
            "name": "智能算薪",
            "value": 11,
            x: setAdaption(-105),
            y: setAdaption(0),
            labelPos: 'left',
            beingProcessed: 23,
            beenCompleted: 68,
            src: 'circle04-alpha.png',
            symbolSize: setAdaption(40)
        },{
            "name": "机器人社保",
            "value": 12,
            x: setAdaption(-195),
            y: setAdaption(36),
            labelPos: 'bottom',
            beingProcessed: 22,
            beenCompleted: 56,
            src: 'circle04-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "机器人报税",
            "value": 13,
            x: setAdaption(-192.5),
            y: setAdaption(155),
            labelPos: 'right',
            beingProcessed: 18,
            beenCompleted: 48,
            src: 'circle04-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "电子工资条",
            "value": 14,
            x: setAdaption(-75),
            y: setAdaption(146.7),
            labelPos: 'right',
            beingProcessed: 85,
            beenCompleted: 168,
            src: 'circle04-alpha.png',
            symbolSize: setAdaption(50)
        },{     // 假期考勤子节点 150，180
            "name": "语音请假",
            "value": 15,
            x: setAdaption(350),
            y: setAdaption(0),
            labelPos: 'right',
            beingProcessed: 25,
            beenCompleted: 56,
            src: 'circle02.png',
            symbolSize: setAdaption(95)
        },{
            "name": "年假问询",
            "value": 16,
            x: setAdaption(100),
            y: setAdaption(130),
            labelPos: 'right',
            beingProcessed: 210,
            beenCompleted: 300,
            src: 'circle02.png',
            symbolSize: setAdaption(95)
        },{
            "name": "智能排班",
            "value": 17,
            x: setAdaption(400),
            y: setAdaption(131),
            labelPos: 'right',
            beingProcessed: 60,
            beenCompleted: 120,
            src: 'circle02.png',
            symbolSize: setAdaption(95)
        }
        
        
    ],
};

var webkitDep2 = {
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
            src: 'circle03-alpha.png',
            symbolSize: setAdaption(92)
        },{
            "name": "薪酬\n社保",
            "value": 2,
            x: setAdaption(-250),
            y: setAdaption(65),
            src: 'circle04-live.png',
            symbolSize: setAdaption(121.73)
        },{
            "name": "基础\n人事",
            "value": 3,
            x: setAdaption(150),
            y: setAdaption(-80),
            src: 'circle01-alpha.png',
            symbolSize: setAdaption(92)
        },{
            "name": "假期\n考勤",
            "value": 4,
            x: setAdaption(80),
            y: setAdaption(120),
            src: 'circle02-alpha.png',
            symbolSize: setAdaption(92)
        },{     // 基础人事子节点
            "name": "入职办理",
            "value": 5,
            x: setAdaption(50),
            y: setAdaption(-119.5),
            labelPos: 'left',
            beingProcessed: 35,
            beenCompleted: 55,
            src: 'circle01-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "电子合同",
            "value": 6,
            x: setAdaption(150),
            y: setAdaption(-170),
            labelPos: 'right',
            beingProcessed: 110,
            beenCompleted: 85,
            src: 'circle01-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "证明开具",
            "value": 7,
            x: setAdaption(280),
            y: setAdaption(-116.5),
            labelPos: 'right',
            beingProcessed: 30,
            beenCompleted: 42,
            src: 'circle01-alpha.png',
            symbolSize: setAdaption(65)
        },{
            "name": "离职办理",
            "value": 8,
            x: setAdaption(220),
            y: setAdaption(-20),
            labelPos: 'right',
            beingProcessed: 8,
            beenCompleted: 12,
            src: 'circle01-alpha.png',
            symbolSize: setAdaption(65)
        },{     // 智能招聘子节点
            "name": "简历解析",
            "value": 9,
            x: setAdaption(-57.5),
            y: setAdaption(-151),
            labelPos: 'left',
            beingProcessed: 180,
            beenCompleted: 460,
            src: 'circle03-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "机器人面试",
            "value": 10,
            x: setAdaption(-196),
            y: setAdaption(-128),
            labelPos: 'left',
            beingProcessed: 15,
            beenCompleted: 30,
            src: 'circle03-alpha.png',
            symbolSize: setAdaption(50)
        },{     // 薪酬社保子节点 50,180
            "name": "智能算薪",
            "value": 11,
            x: setAdaption(-280),
            y: setAdaption(-100),
            labelPos: 'left',
            beingProcessed: 23,
            beenCompleted: 68,
            src: 'circle04.png',
            symbolSize: setAdaption(95)
        },{
            "name": "机器人社保",
            "value": 12,
            x: setAdaption(-400),
            y: setAdaption(0),
            labelPos: 'bottom',
            beingProcessed: 22,
            beenCompleted: 56,
            src: 'circle04.png',
            symbolSize: setAdaption(95)
        },{
            "name": "机器人报税",
            "value": 13,
            x: setAdaption(-380),
            y: setAdaption(170),
            labelPos: 'right',
            beingProcessed: 18,
            beenCompleted: 48,
            src: 'circle04.png',
            symbolSize: setAdaption(95)
        },{
            "name": "电子工资条",
            "value": 14,
            x: setAdaption(-100),
            y: setAdaption(150),
            labelPos: 'right',
            beingProcessed: 85,
            beenCompleted: 168,
            src: 'circle04.png',
            symbolSize: setAdaption(95)
        },{     // 假期考勤子节点 150，180
            "name": "语音请假",
            "value": 15,
            x: setAdaption(121.5),
            y: setAdaption(39),
            labelPos: 'right',
            beingProcessed: 25,
            beenCompleted: 56,
            src: 'circle02-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "年假问询",
            "value": 16,
            x: setAdaption(-5),
            y: setAdaption(106),
            labelPos: 'right',
            beingProcessed: 210,
            beenCompleted: 300,
            src: 'circle02-alpha.png',
            symbolSize: setAdaption(65)
        },{
            "name": "智能排班",
            "value": 17,
            x: setAdaption(160),
            y: setAdaption(151),
            labelPos: 'right',
            beingProcessed: 60,
            beenCompleted: 120,
            src: 'circle02-alpha.png',
            symbolSize: setAdaption(65)
        }
        
        
    ]
};

var webkitDep3 = {
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
            x: setAdaption(-200),
            y: setAdaption(-50),
            src: 'circle03-live.png',
            symbolSize: setAdaption(121.73)
        },{
            "name": "薪酬\n社保",
            "value": 2,
            x: setAdaption(-180),
            y: setAdaption(80),
            src: 'circle04-alpha.png',
            symbolSize: setAdaption(92)
        },{
            "name": "基础\n人事",
            "value": 3,
            x: setAdaption(150),
            y: setAdaption(-80),
            src: 'circle01-alpha.png',
            symbolSize: setAdaption(92)
        },{
            "name": "假期\n考勤",
            "value": 4,
            x: setAdaption(130),
            y: setAdaption(120),
            src: 'circle02-alpha.png',
            symbolSize: setAdaption(92)
        },{     // 基础人事子节点
            "name": "入职办理",
            "value": 5,
            x: setAdaption(50),
            y: setAdaption(-119.5),
            labelPos: 'left',
            beingProcessed: 35,
            beenCompleted: 55,
            src: 'circle01-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "电子合同",
            "value": 6,
            x: setAdaption(150),
            y: setAdaption(-170),
            labelPos: 'right',
            beingProcessed: 110,
            beenCompleted: 85,
            src: 'circle01-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "证明开具",
            "value": 7,
            x: setAdaption(230),
            y: setAdaption(-116.5),
            labelPos: 'right',
            beingProcessed: 30,
            beenCompleted: 42,
            src: 'circle01-alpha.png',
            symbolSize: setAdaption(65)
        },{
            "name": "离职办理",
            "value": 8,
            x: setAdaption(220),
            y: setAdaption(-20),
            labelPos: 'right',
            beingProcessed: 8,
            beenCompleted: 12,
            src: 'circle01-alpha.png',
            symbolSize: setAdaption(65)
        },{     // 智能招聘子节点
            "name": "简历解析",
            "value": 9,
            x: setAdaption(-80),
            y: setAdaption(-150),
            labelPos: 'left',
            beingProcessed: 180,
            beenCompleted: 460,
            src: 'circle03.png',
            symbolSize: setAdaption(95)
        },{
            "name": "机器人面试",
            "value": 10,
            x: setAdaption(-340),
            y: setAdaption(-100),
            labelPos: 'left',
            beingProcessed: 15,
            beenCompleted: 30,
            src: 'circle03.png',
            symbolSize: setAdaption(95)
        },{     // 薪酬社保子节点 50,180
            "name": "智能算薪",
            "value": 11,
            x: setAdaption(-280),
            y: setAdaption(70),
            labelPos: 'left',
            beingProcessed: 23,
            beenCompleted: 68,
            src: 'circle04-alpha.png',
            symbolSize: setAdaption(65)
        },{
            "name": "机器人社保",
            "value": 12,
            x: setAdaption(-250),
            y: setAdaption(150),
            labelPos: 'bottom',
            beingProcessed: 22,
            beenCompleted: 56,
            src: 'circle04-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "机器人报税",
            "value": 13,
            x: setAdaption(-150),
            y: setAdaption(155),
            labelPos: 'right',
            beingProcessed: 18,
            beenCompleted: 48,
            src: 'circle04-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "电子工资条",
            "value": 14,
            x: setAdaption(-90),
            y: setAdaption(80),
            labelPos: 'right',
            beingProcessed: 85,
            beenCompleted: 168,
            src: 'circle04-alpha.png',
            symbolSize: setAdaption(50)
        },{     // 假期考勤子节点 150，180
            "name": "语音请假",
            "value": 15,
            x: setAdaption(150),
            y: setAdaption(39),
            labelPos: 'right',
            beingProcessed: 25,
            beenCompleted: 56,
            src: 'circle02-alpha.png',
            symbolSize: setAdaption(50)
        },{
            "name": "年假问询",
            "value": 16,
            x: setAdaption(20),
            y: setAdaption(150),
            labelPos: 'right',
            beingProcessed: 210,
            beenCompleted: 300,
            src: 'circle02-alpha.png',
            symbolSize: setAdaption(65)
        },{
            "name": "智能排班",
            "value": 17,
            x: setAdaption(250),
            y: setAdaption(151),
            labelPos: 'right',
            beingProcessed: 60,
            beenCompleted: 120,
            src: 'circle02-alpha.png',
            symbolSize: setAdaption(65)
        }
        
        
    ]
};

