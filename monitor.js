// 总金额报表
var chart = Highcharts.chart('container',{
    chart: {
        type: 'column'
    },
    title: {
        text: '各成本总额度'
    },
    credits: {
        enabled: false     //去掉版权信息
    },
    xAxis:{
        categories:['预算报价','计划成本','实际成本']   //x轴分类
    },
    yAxis: {
        min: 0,
        title: {
            text: '总金额'
        }
    },
    series: [{
        name:'成本',
        data:[{
            color:"#7a6aff",
            y:100000
        },{
            color:"#51cb64",
            y:90000
        },{
            color:"#ff9000",
            y:80000
        }]
    }]
});
// 各成本报表
var chart = Highcharts.chart('container1',{
    chart: {
        type: 'column'
    },
    credits: {
        enabled: false     //去掉版权信息
    },
    title: {
        text: '项目各成本进度总额'
    },
    xAxis: {
        categories: [
            '人工','设备','材料'
        ]
        /* crosshair: true*/
    },
    yAxis: {
        min: 0,
        title: {
            text: '金额'
        }
    },
    series: [{
        name: '预算报价',
        color:"#7a6aff",
        data: [49.9, 71.5, 106.4]
    }, {
        name: '计划成本',
        color:"#51cb64",
        data: [83.6, 78.8, 98.5]
    }, {
        name: '实际成本',
        color:"#ff9000",
        data: [48.9, 38.8, 39.3]
    }]
});
