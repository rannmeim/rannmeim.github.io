$('.nav_bg').height(screen.availHeight);
$('.nav').height(screen.availHeight);

var test='test123';

// var today_weibo=null;
// var today_weixin=null;
// var today_baidu=null;
// var today_toutiao=null;
// var wanted=null;
// var all_weibo=null;
// var all_weixin=null;
// var all_baidu=null;
// var all_toutiao=null;

//获取地址栏参数 返回数组
!function getPara(){
    var arr=[];
    var str=location.href;
    var num=str.indexOf('?');
    if (num==-1) {
        return;
    }
    str=str.substr(num+1);
    arr=str.split('&');
    for(var i=0;i<arr.length;i++){
        num=arr[i].indexOf('=');
        if (num>0) {
            name=arr[i].substring(0,num);
            value=arr[i].substr(num+1);
            this[name]=value;
        }
    }
}()






function createEchart(id, option){
    var myChart = echarts.init(document.getElementById(id), 'light');
    myChart.setOption(option, true);
}





var months = ['1月','2月', '3月', '4月','5月','6月','7月','8月', '9月','10月','11月', '12月'];
var cities = ['泰国', '英国', '美国',
        '大陆', '香港', '韩国', '日本'];

var data = [[0,0,1],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,3],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[2,0,1],[2,1,1],[2,2,0],[2,3,8],[2,4,1],[2,5,3],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[3,0,7],[3,1,3],[3,2,7],[3,3,8],[3,4,14],[3,5,9],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[6,0,1],[6,1,0],[6,2,0],[6,3,1],[6,4,2],[6,5,3],[6,6,2],[6,7,4],[6,8,5],[6,9,0],[6,10,1],[6,11,0]
,[1,6,3],[2,6,2],[3,7,5],[3,8,3],[4,6,3]];

data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

mkt_heatmap_option = {
    tooltip: {
        position: 'top'
    },
    animation: false,
    grid: {
        height: '80%',
        width: '82%',
        y: '10%',
        x: '12%'
    },
    xAxis: {
        type: 'category',
        data: months,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: cities,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '-100%'
    },
    series: [{
        name: '市场规律',
        type: 'heatmap',
        data: data,
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};
createEchart('mkt_heatmap', mkt_heatmap_option);

invest_scatter_option = {
    tooltip:{

    },
    title:{
        text: '投资金额与播放量分布图',
        textStyle:{
            color: '#4a4a4a',
            fontSize:14,
        },
        left: '24%',
    },
    xAxis: {
        scale: true,
        name:'投资金额',
        nameLocation:'middle',
        nameGap: '30',
    },
    yAxis: {
        scale: true,
        name:'IP热度',
    },
    series: [{
        type: 'effectScatter',
        symbolSize: 20,
        data: [
            [172.7, 105.2],
            [153.4, 42]
        ]
    }, {
        type: 'scatter',
        data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
            [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
            [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
            [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
            [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
            [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
            [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
            [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
            [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
            [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
            [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
            [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
            [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
            [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
            [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
            [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
            [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
            [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
            [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
            [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
            [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
            [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
            [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
            [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
            [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
            [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
            [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
            [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
            [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
            [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
            [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
            [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
            [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
            [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
            [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
            [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
            [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
            [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
            [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
            [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
            [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
            [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
            [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
            [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
            [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
            [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
            [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
            [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
            [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
            [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
            [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
            [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
        ],
    }]
};
createEchart('invest_scatter', invest_scatter_option);


invest_pie_option = {
    series : [
        {
            name: '投资去向',
            type: 'pie',
            radius : '45%',
            center: ['50%', '50%'],
            data: [{name:'人员费用',value:30},{name:'场地费用',value:15},{name:'拍摄费用',value:10},{name:'其他',value:45}],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
createEchart('invest_pie', invest_pie_option);


option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    legend: {
            data: [{
                name: '导演',
            },{
                name:'演员',
            }]
        },
    series : [
        {   
            categories:[{
                name: '导演',
            },{
                name:'演员',
            }],
            focusNodeAdjacency:true,
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            label: {
                normal: {
                    show: true
                }
            },
            // edgeSymbol: ['circle'],
            // edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: '吴谨言',
                x: 300,
                y: 200,
                category:'演员',
            }, {
                name: '许凯',
                x: 800,
                y: 200,
                category:'演员',
            }, {
                name: '佘诗曼',
                x: 450,
                y: 0,
                category:'演员',
            }, {
                name: '秦岚',
                x: 650,
                y: 0,
                category:'演员',
            }, {
                name: '惠楷栋',
                x: 550,
                y: 300,
                category:'导演',
            },{
                name: '聂远',
                x: 800,
                y: 80,
                category:'演员',
            },{
                name: '王冠逸',
                x: 300,
                y: 80,
                category:'演员',
            },],
            // links: [],
            links: [{
                source: 0,
                target: 1,
                symbolSize: [5, 20],
                lineStyle: {
                    normal: {
                        // width: 5,
                        curveness: 0.2
                    },
                    hoverAnimation: true,
                }
            }, {
                source: 2,
                target: 3,
                lineStyle: {
                    normal: { curveness: 0.2 }
                }
            }, {
                source: 0,
                target: 2,
                lineStyle: {
                    normal: {
                        // width: 5,
                        curveness: 0.3
                    }
                }
            }, {
                source: 3,
                target: 1,
                lineStyle: {
                    normal: {
                        // width: 5,
                        curveness: 0.1
                    }
                }
            }, {
                source: 0,
                target: 3,
                lineStyle: {
                    normal: {
                        // width: 5,
                        curveness: -0.1
                    }
                }
            }, {
                source: 4,
                target: 2,
                lineStyle: {
                    normal: {
                        // width: 5,
                        curveness: -0.2
                    }
                }
            },  {
                source: 4,
                target: 6,
                lineStyle: {
                    normal: {
                        // width: 5,
                        curveness: 0.2
                    }
                }
            },{
                source: 3,
                target: 5,
                lineStyle: {
                    normal: {
                        // width: 5,
                        curveness: 0.2
                    }
                }
            }, {
                source: 1,
                target: 4,
                lineStyle: {
                    normal: {
                        // width: 5,
                        curveness: -0.2
                    }
                }
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
            }
        }
    ]
};
createEchart('actors_graph', option);


mkt_adapt_bar_option = {    
    title:{
        text: '近年不同电视剧题材的平均播放量',
        textStyle:{
            color: '#4a4a4a',
            fontSize:14,
        },
        left: 230,
    },
    tooltip:{

    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['古装','武侠','家庭','都市','战争','谍战','罪案','宫廷','神话','年代','商战','奇幻']
        }
    ],
    yAxis : [
        {
            type : 'value',
            name: 'IP热度',
        },
    ],
    series : [
        {
            name:'播放量',
            type:'bar',
            data:[25, 30, 70, 46, 36, 76, 92, 73, 32, 20, 64, 33],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
    ]
};
createEchart('mkt_adapt_bar', mkt_adapt_bar_option);


hst_play_line_option = {
    tooltip : {
        position: 'top',
    },
    grid:{
        left: '18%',
    },
    legend: {
        data:['优酷视频播放量','腾讯视频播放量','爱奇艺播放指数']
    },
    xAxis: {
        type: 'category',
        data: ['2018-10-15', '2018-10-16', '2018-10-17', '2018-10-18', '2018-10-19']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '优酷视频播放量',
        data: [4820, 4932, 4901, 5434, 4290, 5330, 4320],
        type: 'line'
    },{
        name: '腾讯视频播放量',
        data: [6820, 6932, 6901, 7434, 7290, 6330, 6720],
        type: 'line'
    },{
        name: '爱奇艺播放指数',
        data: [4120, 4032, 4301, 4434, 3890, 3330, 3620],
        type: 'line'
    }]
};
createEchart('hst_play_line', hst_play_line_option);

option = {
    tooltip : {
        position: 'top',
    },
    legend: {
        data:['总收视率']
    },
    xAxis: {
        type: 'category',
        data: ['2018-10-15', '2018-10-16', '2018-10-17', '2018-10-18', '2018-10-19']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '总收视率',
        data: [5820, 5932, 5901, 6434, 6290, 5330, 5720],
        type: 'line'
    }]
};
createEchart('hst_watch_line', option);



var posi_value = null;
var neu_value = null;
var nega_value = null;
cmt_pie_option = {
    legend: {
        left: 'left',
        data: ['正面情绪','中等','负面情绪']
    },
    grid:{
        left:'left',
    },
    series : [
        {
            name: '情感分析结果',
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data: [{name:'正面情绪',value:posi_value},{name:'中等',value:neu_value},{name:'负面情绪',value:nega_value}],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
cmt_pie_option.series[0].data[0].value=5,
cmt_pie_option.series[0].data[1].value=1,
cmt_pie_option.series[0].data[2].value=4,
createEchart('cmt_weibo_pie', cmt_pie_option);
cmt_pie_option.series[0].data[0].value=5,
cmt_pie_option.series[0].data[1].value=2,
cmt_pie_option.series[0].data[2].value=3,
createEchart('cmt_news_pie', cmt_pie_option);
cmt_pie_option.series[0].data[0].value=4,
cmt_pie_option.series[0].data[1].value=2,
cmt_pie_option.series[0].data[2].value=4,
createEchart('cmt_douban_pie', cmt_pie_option);
cmt_pie_option.series[0].data[0].value=5.5,
cmt_pie_option.series[0].data[1].value=1,
cmt_pie_option.series[0].data[2].value=3.5,
createEchart('film_critics_pie', cmt_pie_option);


weibo_index = [100593, 77731, 130989, 325612, 516113, 80329, 109185]
weixin_index = [746537, 627192, 612762, 897110, 783765, 675871, 625659]
baidu_index = [6166, 5314, 4963, 4696, 5024, 4745, 4021]
toutiao_index = [54401.9*10**3, 74318.3*10**3, 72181.7*10**3, 41963.9*10**3, 38761.6*10**3, 52648.4*10**3, 32719.5*10**3]
wanted_index = [70095]
old_all_weibo = 1340552;
old_all_weixin = 4968896;
old_all_baidu = 34929;
old_all_toutiao = 366995300;


!function getData(){
    wanted_index[0]=Number(window.wanted)/10000; //万

    d = parseInt((Number(window.all_weibo) - Number(window.today_weibo) - old_all_weibo + weibo_index[0])/6);
    weibo_index = weibo_index.map(function(x){
        return x+d;
    });
    weibo_index[0] = Number(window.today_weibo);
    weibo_index = weibo_index.map(function(x){
        return x/10000;   //万
    })

    d = parseInt((Number(window.all_weixin) - Number(window.today_weixin) - old_all_weixin + weixin_index[0])/6);
    weixin_index = weixin_index.map(function(x){
        return x+d;
    });
    weixin_index[0] = Number(window.today_weixin);
    weixin_index = weixin_index.map(function(x){
        return x/10000;//万
    })

    d = parseInt((Number(window.all_baidu) - Number(window.today_baidu) - old_all_baidu + baidu_index[0])/6);
    baidu_index = baidu_index.map(function(x){
        return x+d;
    });
    baidu_index[0] = Number(window.today_baidu);
    baidu_index = baidu_index.map(function(x){
        return x/1000; //千
    })

    d = parseInt((Number(window.all_toutiao) - Number(window.today_toutiao) - old_all_toutiao + toutiao_index[0])/6);
    toutiao_index = toutiao_index.map(function(x){
        return x+d;
    });
    toutiao_index[0] = Number(window.today_toutiao);
    toutiao_index = toutiao_index.map(function(x){
        return x/1000000;//百万
    })
}()

var m_31 = [1,3,5,7,8,10,12];
var date = [];
var myDate = new Date();
var dt = myDate.getDate();
var mth = myDate.getDate();
for(let i=0;i<7;i++){
    if(dt<0){
        if(mth-1 == 2){
            dt=28;
        }else if(m_31.indexOf(mth-1) != -1){
            dt=31;
        }else{
            dt=30;
        }
    }
    date.unshift(dt+'号');
    dt-=1;
}
msg_line_option = {
    tooltip : {
        position: 'top',
    },
    legend: {
        data:['微博指数']
    },
    grid:{
        left: '16%',
        height: '60%'
    },
    xAxis: {
        type: 'category',
        data: date,
        // data: ['1号', '2号', '3号', '4号', '5号','6号','7号']
    },
    yAxis: {
        type: 'value',
        name:'万',
        nameGap: 10,
    },
    series: [{
        name: '微博指数',
        data: weibo_index,
        type: 'line'
    },]
};
createEchart('msg_weibo_line', msg_line_option);
msg_line_option.legend.data=['微信指数'];
msg_line_option.series[0].name=['微信指数'];
msg_line_option.series[0].data=weixin_index;
createEchart('msg_wechat_line', msg_line_option);
msg_line_option.legend.data=['头条指数'];
msg_line_option.yAxis.name=['百万'];
msg_line_option.series[0].name=['头条指数'];
msg_line_option.series[0].data=toutiao_index;
createEchart('msg_toutiao_line', msg_line_option);
msg_line_option.legend.data=['百度关键词搜索指数'];
msg_line_option.yAxis.name=['千'];
msg_line_option.series[0].name=['百度关键词搜索指数'];
msg_line_option.series[0].data=baidu_index;
createEchart('msg_baidu_line', msg_line_option);
msg_line_option.legend.data=['想看数量统计'];
msg_line_option.yAxis.name=['万'];
msg_line_option.xAxis.data=['7号'];
msg_line_option.series[0].name=['想看数量统计'];
msg_line_option.series[0].data=wanted_index;
createEchart('msg_wish_line', msg_line_option);

var att_score = 0;
function count_weibo_score(x){
    t = (x-5*10**4)*10**(-5);
    r = 10/(1+Math.exp(-t));
    return r.toFixed(1);
}
function count_weixin_score(x){
    t = (x-5.5*10**5)*10**(-5);
    r = 10/(1+Math.exp(-t));
    return r.toFixed(1);
}
function count_toutiao_score(x){
    t = (x-3*10**7)*5*10**(-8);
    r = 10/(1+Math.exp(-t));
    return r.toFixed(1);
}
function count_baidu_score(x){
    t = (x-3500)*10**(-3);
    r = 10/(1+Math.exp(-t));
    return r.toFixed(1);
}
function count_wanted_score(x){
    t = (x-6*10**4)*10**(-4);
    r = 10/(1+Math.exp(-t));
    return r.toFixed(1);
}
t = count_weibo_score(parseInt(all_weibo/7));
att_score += Number(t);
$('.weibo_score').text(t);
t = count_weixin_score(parseInt(all_weixin/7));
att_score += Number(t);
$('.weixin_score').text(t);
t = count_toutiao_score(parseInt(all_toutiao/7));
att_score += Number(t);
$('.toutiao_score').text(t);
t = count_baidu_score(parseInt(all_baidu/7))
att_score += Number(t);
$('.baidu_score').text(t);
t = count_wanted_score(parseInt(wanted))
att_score += Number(t);
$('.wanted_score').text(t);
att_score = (att_score/5).toFixed(1);


all_scores = [8,8.5,8.3,8.6,8.6,7.5];
all_scores[3] = Number(att_score);
score_radar_option = {
    // title: {
    //     text: '总评分'
    // },
    tooltip: {
        trigger: 'axis'
    },
    radar: [
        {
            indicator: [
                {text: '制作班底与演员', max: 10},
                {text: '背景实力', max: 10},
                {text: '内容质量', max: 10},
                {text: '潮流与关注程度', max: 10},
                {text: '用户评价', max: 10},
                {text: '历史表现', max: 10}
            ],
            center: ['50%','50%'],
            radius: 50
        },
    ],
    textStyle: {
        color: '#fff',
    },
    series: [
        {
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            areaStyle:{
                shadowColor: '#0000ff',
            },
            data: [
                {
                    value: all_scores,
                    name: '延禧攻略'
                }
            ]
        },
    ],
};
createEchart('score_radar', score_radar_option);
var sum=0;
for(let i = 0;i<all_scores.length;i++){
    sum+=all_scores[i];
}
sum=(sum/6).toFixed(1);
$('#total_point').text(sum);

// $('.explain_att').hover(function(){

// })
// explain_cmt
// explain_hst
// explain_cont
// explain_act_1
// explain_act_2
// explain_bg_1
// explain_bg_2


function gotoindex(){
    window.location.href='./index.html'
}

