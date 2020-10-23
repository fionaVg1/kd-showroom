const title1 = '财务指标（千万）';
const title2 = '客户数量（千）';
const title3 = '指标（%）';
export default {
    id: 1,
    org: '星级酒店',
    name: '张少芬',
    pos: '总经理',
    photo:require('../assets/header0.png'),
    indicators: [{
        title:title1,
        percent: 45,
        figure: '45/100',
    }, {
        title:title2,
        percent: 45,
        figure: '45/100',
    }, {
        title:title3,
        percent: 45,
        figure: '45/100',
    }],
    children: [
        {
            id: 11,
            org: '星级酒店',
            name: '戈志',
            pos: '总经理',
            photo:require('../assets/header1.png'),
            indicators: [{
                title:title1,
                percent: 15,
                figure: '15/100',
            }, {
                title:title2,
                percent: 15,
                figure: '15/100',
            }, {
                title:title3,
                percent: 15,
                figure: '15/100',
            }],
            children: [
                {
                id: 111,
                org: '商业办公',
                name: '孙敏敏',
                pos: '项目经理',
                photo:require('../assets/header2.png'),
                indicators: [{
                    title: title1,
                    percent: 65.27,
                    figure: '1197/1834',
                }, {
                    title: title2,
                    percent: 80.03,
                    figure: '6804/8502',
                }, {
                    title:title3,
                    percent: 97.98,
                    figure: '97.98/100',
                }]
            }, 
            {
                id: 112,
                org: '中端城市住宅',
                name: '陶业鸿',
                pos: '项目经理',
                photo:require('../assets/header3.png'),
                indicators: [{
                    title: title1,
                    percent: 96.26,
                    figure: '901/936',
                }, {
                    title: title2,
                    percent: 64.89,
                    figure: '43804/67502',
                }, {
                    title: title3,
                    percent: 82.98,
                    figure: '82.98/100',
                }]
            }, 
            {
                id: 113,
                org: '低端城市住宅',
                name: '孙继愈',
                pos: '项目经理',
                photo:require('../assets/header4.png'),
                indicators: [{
                    title: title1,
                    percent: 77.30,
                    figure: '378/489',
                }, {
                    title: title2,
                    percent: 55.80,
                    figure: '2511/4498',
                }, {
                    title: title3,
                    percent: 94.98,
                    figure: '94.98/100',
                }]
            }
            ]
        },
        {
            id: 12,
            org: '商业办公',
            name: '王强',
            pos: '总经理',
            photo:require('../assets/header2.png'),
            indicators: [{
                title: title1,
                percent: 81.50,
                figure: '890/1092',
            }, {
                title: title2,
                percent: 72.22,
                figure: '780/1080',
            }, {
                title: title3,
                percent: 89.03,
                figure: '89.03/100',
            }],
            children: [
                {
                id: 121,
                org: '高端城市住宅',
                name: '孙敏敏121',
                pos: '项目经理',
                photo:require('../assets/header3.png'),
                indicators: [{
                    title: title1,
                    percent: 65.27,
                    figure: '1197/1834',
                }, {
                    title: title2,
                    percent: 80.03,
                    figure: '6804/8502',
                }, {
                    title: title3,
                    percent: 97.98,
                    figure: '97.98/100',
                }]
            }, 
            {
                id: 122,
                org: '中端城市住宅',
                name: '陶业鸿',
                pos: '项目经理',
                photo:require('../assets/header4.png'),
                indicators: [{
                    title: title1,
                    percent: 96.26,
                    figure: '901/936',
                }, {
                    title: title2,
                    percent: 64.89,
                    figure: '43804/67502',
                }, {
                    title: title3,
                    percent: 82.98,
                    figure: '82.98/100',
                }]
            }, 
            {
                id: 123,
                org: '低端城市住宅',
                name: '孙继愈',
                pos: '项目经理',
                photo:require('../assets/header5.png'),
                indicators: [{
                    title: title1,
                    percent: 77.30,
                    figure: '378/489',
                }, {
                    title: title2,
                    percent: 55.80,
                    figure: '2511/4498',
                }, {
                    title: title3,
                    percent: 94.98,
                    figure: '94.98/100',
                }]
            },            
            ]
        },
        {
            id: 13,
            org: '时尚公寓',
            name: '王菲菲',
            pos: '总经理',
            photo:require('../assets/header3.png'),
            indicators: [{
                title: title1,
                percent: 68.61,
                figure: '1309/1908',
            }, {
                title: title2,
                percent: 66.20,
                figure: '20192/30502',
            }, {
                title: title3,
                percent: 94.55,
                figure: '94.55/100',
            }],
            children: [
                {
                id: 131,
                org: '高端城市住宅131',
                name: '孙敏敏',
                pos: '项目经理',
                photo:require('../assets/header3.png'),
                indicators: [{
                    title: title1,
                    percent: 65.27,
                    figure: '1197/1834',
                }, {
                    title: title2,
                    percent: 80.03,
                    figure: '6804/8502',
                }, {
                    title: title3,
                    percent: 97.98,
                    figure: '97.98/100',
                }]
            }, {
                id: 132,
                org: '中端城市住宅',
                name: '陶业鸿',
                pos: '项目经理',
                photo:require('../assets/header4.png'),
                indicators: [{
                    title: title1,
                    percent: 96.26,
                    figure: '901/936',
                }, {
                    title: title2,
                    percent: 64.89,
                    figure: '43804/67502',
                }, {
                    title: title3,
                    percent: 82.98,
                    figure: '82.98/100',
                }]
            }, 
            {
                id: 133,
                org: '低端城市住宅',
                name: '孙继愈',
                pos: '项目经理',
                photo:require('../assets/header2.png'),
                indicators: [{
                    title: title1,
                    percent: 77.30,
                    figure: '378/489',
                }, {
                    title: title2,
                    percent: 55.80,
                    figure: '2511/4498',
                }, {
                    title: title3,
                    percent: 94.98,
                    figure: '94.98/100',
                }]
            }, 
            ]
        },
        {
            id: 14,
            org: '城市住宅旧改',
            name: '王琦',
            pos: '项目经理',
            photo:require('../assets/header4.png'),
            indicators: [{
                title: title1,
                percent: 89.90,
                figure: '570/634',
            }, {
                title: title2,
                percent: 54.20,
                figure: '1620/2988',
            }, {
                title: title3,
                percent: 87.20,
                figure: '87.20/100',
            }],
            children: [
                {
                id: 141,
                org: '高端城市住宅141',
                name: '孙敏敏',
                pos: '项目经理',
                photo:require('../assets/header3.png'),
                indicators: [{
                    title: title1,
                    percent: 65.27,
                    figure: '1197/1834',
                }, {
                    title: title2,
                    percent: 80.03,
                    figure: '6804/8502',
                }, {
                    title: title3,
                    percent: 97.98,
                    figure: '97.98/100',
                }]
            }, 
            {
                id: 142,
                org: '中端城市住宅',
                name: '陶业鸿',
                pos: '项目经理',
                photo:require('../assets/header4.png'),
                indicators: [{
                    title: title1,
                    percent: 96.26,
                    figure: '901/936',
                }, {
                    title: title2,
                    percent: 64.89,
                    figure: '43804/67502',
                }, {
                    title: title3,
                    percent: 82.98,
                    figure: '82.98/100',
                }]
            }, 
            {
                id: 143,
                org: '低端城市住宅',
                name: '孙继愈',
                pos: '项目经理',
                photo:require('../assets/header5.png'),
                indicators: [{
                    title: title1,
                    percent: 77.30,
                    figure: '378/489',
                }, {
                    title: title2,
                    percent: 55.80,
                    figure: '2511/4498',
                }, {
                    title: title3,
                    percent: 94.98,
                    figure: '94.98/100',
                }]
            }, 
            
            ]
        }, 
        {
            id: 15,
            org: '星际酒店',
            name: '陈小玲',
            pos: '总经理',
            photo:require('../assets/header5.png'),
            indicators: [{
                title: title1,
                percent: 74.80,
                figure: '478/639',
            }, {
                title: title2,
                percent: 79.23,
                figure: '309/390',
            }, {
                title: title3,
                percent: 76.00,
                figure: '76/100',
            }],
            children: [
                {
                id: 151,
                org: '高端城市住宅151',
                name: '孙敏敏',
                pos: '项目经理',
                photo:require('../assets/header2.png'),
                indicators: [{
                    title: title1,
                    percent: 65.27,
                    figure: '1197/1834',
                }, {
                    title: title2,
                    percent: 80.03,
                    figure: '6804/8502',
                }, {
                    title: title3,
                    percent: 97.98,
                    figure: '97.98/100',
                }]
            }, 
            {
                id: 152,
                org: '中端城市住宅',
                name: '陶业鸿',
                pos: '项目经理',
                photo:require('../assets/header6.png'),
                indicators: [{
                    title: title1,
                    percent: 96.26,
                    figure: '901/936',
                }, {
                    title: title2,
                    percent: 64.89,
                    figure: '43804/67502',
                }, {
                    title: title3,
                    percent: 82.98,
                    figure: '82.98/100',
                }]
            }, 
            {
                id: 153,
                org: '低端城市住宅',
                name: '孙继愈',
                pos: '项目经理',
                photo:require('../assets/header1.png'),
                indicators: [{
                    title: title1,
                    percent: 77.30,
                    figure: '378/489',
                }, {
                    title: title2,
                    percent: 55.80,
                    figure: '2511/4498',
                }, {
                    title: title3,
                    percent: 94.98,
                    figure: '94.98/100',
                }]
            }
           
            
        ]
        },
        {
            id: 16,
            org: '星际酒店',
            name: '陈小玲',
            pos: '总经理',
            photo:require('../assets/header6.png'),
            indicators: [{
                title: title1,
                percent: 74.80,
                figure: '478/639',
            }, {
                title: title2,
                percent: 79.23,
                figure: '309/390',
            }, {
                title: title3,
                percent: 76.00,
                figure: '76/100',
            }],
            children: [
                {
                id: 161,
                org: '高端城市住宅161',
                name: '孙敏敏',
                pos: '项目经理',
                photo:require('../assets/header2.png'),
                indicators: [{
                    title: title1,
                    percent: 65.27,
                    figure: '1197/1834',
                }, {
                    title: title2,
                    percent: 80.03,
                    figure: '6804/8502',
                }, {
                    title: title3,
                    percent: 97.98,
                    figure: '97.98/100',
                }]
            }, 
            {
                id: 162,
                org: '中端城市住宅',
                name: '陶业鸿',
                pos: '项目经理',
                photo:require('../assets/header3.png'),
                indicators: [{
                    title: title1,
                    percent: 96.26,
                    figure: '901/936',
                }, {
                    title: title2,
                    percent: 64.89,
                    figure: '43804/67502',
                }, {
                    title: title3,
                    percent: 82.98,
                    figure: '82.98/100',
                }]
            }, 
            {
                id: 163,
                org: '低端城市住宅',
                name: '孙继愈',
                pos: '项目经理',
                photo:require('../assets/header4.png'),
                indicators: [{
                    title: title1,
                    percent: 77.30,
                    figure: '378/489',
                }, {
                    title: title2,
                    percent: 55.80,
                    figure: '2511/4498',
                }, {
                    title: title3,
                    percent: 94.98,
                    figure: '94.98/100',
                }]
            }           
            ]
        }     
    ]
}