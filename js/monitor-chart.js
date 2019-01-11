// 总金额报表
var chart = Highcharts.chart('container',{
    chart: {
        type: 'column'
    },
    title: {
        text: '各成本总额度',
        style:{
          fontSize:'14px'
        }
    },
    credits: {
        enabled: false     //去掉版权信息
    },
    xAxis:{
        categories:['预算报价','计划成本','实际成本']   //x轴分类
    },
    yAxis: {
        lineWidth: 1,
        tickWidth: 1,
        title: {
            align: 'high',
            offset: 0,
            text: '总金额',
            rotation: 0,
            y: -10
        }
    },
    series: [{
        name:'成本',
        data:[{
            color:"#4335b3",
            y:10000
        },{
            color:"#269838",
            y:9000
        },{
            color:"#e88402",
            y:8000
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
        text: '项目各成本进度总额',
        style:{
            fontSize:'14px'
        }
    },
    xAxis: {
        categories: [
            '人工','设备','材料'
        ]
        /* crosshair: true*/
    },
    yAxis: {
        lineWidth: 1,
        tickWidth: 1,
        title: {
            align: 'high',
            offset: 0,
            text: '金额',
            rotation: 0,
            y: -10
        }
    },
    series: [{
        name: '预算报价',
        color:"#4335b3",
        data: [5000, 3000, 3000]
    }, {
        name: '计划成本',
        color:"#269838",
        data: [3000, 4000, 4000]
    }, {
        name: '实际成本',
        color:"#e88402",
        data: [2000, 2000, 1000]
    }]
});
// 挂账报表
var chart = Highcharts.chart('container3',{
    chart: {
        type: 'column'
    },
    title: {
        text: '合同账款详情',
        style:{
            fontSize:'14px'
        }
    },
    credits: {
        enabled: false     //去掉版权信息
    },
    yAxis: {
        lineWidth: 1,
        tickWidth: 1,
        title: {
            align: 'high',
            offset: 0,
            text: '总金额',
            rotation: 0,
            y: -10
        }
    },
    xAxis:{
        categories:['总金额','挂账','回款']   //x轴分类
    },

    series: [{
        name:'金额',
        data:[{
            color:"#7a4ea3",
            y:10000
        },{
            color:"#4ea3a0",
            y:9000
        },{
            color:"#e7b418",
            y:8000
        }]
    }]
});