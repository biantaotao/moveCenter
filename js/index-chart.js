// 项目数量分布
var chart = Highcharts.chart('container', {
    title: {
        text: '项目分布一览表',
        style:{
            fontSize:'14px'
        }
    },
    credits: {
        enabled: false     //去掉版权信息
    },
    yAxis: {
        title: {
            align: 'high',
            offset: 0,
            text: '项目数',
            rotation: 0,
            y: -10
        }
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1
        }
    },
    series: [{
        name: '项目数',
        data: [43, 52, 57, 68, 97, 11, 13, 15]
    } ],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});
//项目状态
var chart = Highcharts.chart('container1', {
    title: {
        text: '项目状态',
        align: 'center',
        verticalAlign: 'middle',
        y: 10
    },
    credits: {
        enabled: false     //去掉版权信息
    },
    tooltip: {
        headerFormat: '{series.name}<br>',
        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white',
                    textShadow: '0px 1px 2px black'
                }
            },
            startAngle: 0, // 圆环的开始角度
            endAngle: 360    // 圆环的结束角度
        }
    },
    series: [{
        type: 'pie',
        name: '项目状态',
        innerSize: '50%',
        data: [
            ['投标', 45],
            ['已完成', 15],
            ['进行中', 40]

        ]
    }]
});
// 成本
var chart = Highcharts.chart('container3',{
    chart: {
        type: 'column'
    },
    title: {
        text: '项目各成本额度',
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
        categories:['预算成本','计划成本','实际成本']   //x轴分类
    },

    series: [{
        name:'金额',
        data:[{
            color:"#4335b3",
            y:1000
        },{
            color:"#269838",
            y:900
        },{
            color:"#e88402",
            y:800
        }]
    }]
});
// 挂账报表
var chart = Highcharts.chart('container4',{
    chart: {
        type: 'column'
    },
    title: {
        text: '项目合同账款',
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
            y:5000
        }]
    }]
});

