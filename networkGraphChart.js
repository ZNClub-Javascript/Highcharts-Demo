

Highcharts.chart('graph-container-1', {
    chart: {
        type: 'networkgraph',
        height: '100%'
    },
    title: {
        text: 'The Indo-European Language Tree'
    },
    subtitle: {
        text: 'A Force-Directed Network Graph in Highcharts'
    },
    plotOptions: {
        networkgraph: {
            /* keys: ['from', 'to'], */
            layoutAlgorithm: {
                enableSimulation: false,
                friction: 0
            }
        }
    },
    series: [{
        dataLabels: {
            enabled: true,
            linkFormat: '{point.link}',
            allowOverlap: true
        },
        marker: {
            radius: 35
        },
        data: [
           /* {
             link:'',
            from:'',
            to:''
           },{
             link:'',
            from:'',
            to:''
        } */
        {
            link:'1 M',
            from:'0.1M Shares',
            to:'Nervous Fund'
        },{
            link:'1 M',
            from:'Assets',
            to:'Nervous Fund'
        },{
            link:'2 M -> 3 M',
            from:'Nervous Fund',
            to:'Happy Fund'
        },{
            link:'1 share = 10 $',
            from:'10 Shares',
            to:'0.1M Shares'
        }

        ]
    }]
});
