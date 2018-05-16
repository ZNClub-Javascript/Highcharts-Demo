
var randomDynamicDataCharts = function(){

    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });



// Create the chart
    Highcharts.stockChart('container1', {
        chart: {
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                     setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                        y = Math.round(Math.random() * 100);
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },

        rangeSelector: {
            buttons: [{
                count: 1,
                type: 'minute',
                text: '1M'
            }, {
                count: 5,
                type: 'minute',
                text: '5M'
            }, {
                type: 'all',
                text: 'All'
            }],
            inputEnabled: false,
            selected: 0
        },

        title: {
            text: 'Live random data'
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: 'Random data',
            data: (function () {
                // generate an array of random data
                var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 1) {
                    data.push([
                        time + i * 1000,
                        Math.round(Math.random() * 100)
                        ]);
                }
                return data;
            }())
        }]
    });

    
};

var serviceProviderDynamicDataCharts = function(){

    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    var provider = function(series){
        setInterval(function () {
            var x = (new Date()).getTime(), // current time
            y = Math.round(Math.random() * 1000);
            series.addPoint([x, y], true, true);
        }, 1);
    };

// Create the chart
    var providerChart = Highcharts.stockChart('container2', {
        chart: {
            events: {
                load: function () {
                    provider(this.series[0]);
                }
            }
        },
        rangeSelector: {
            buttons: [{
                count: 1,
                type: 'minute',
                text: '1M'
            }, {
                count: 5,
                type: 'minute',
                text: '5M'
            }, {
                type: 'all',
                text: 'All'
            }],
            inputEnabled: false,
            selected: 0
        },
        title: {
            text: 'Live random data'
        },
        exporting: {
            enabled: true
        },
        series: [{
            type: 'area',
            name: 'Random data per millisecond',
            data: [10000000, 100]
        }]
    });
};


var initiallyEmptyDynamicDataCharts = function(){

    var provider = function(_this, series){
        
        setInterval(function () {
            
            var x = (new Date()).getTime();// current time
            var y = Math.round(Math.random() * 1000);
            series.addPoint([x, y]);

            if(series && series.data.length===1){
                _this.xAxis[0].setExtremes();
            }
        }, 1000);
    };

    // Create the chart
    var initiallyEmptyChart = Highcharts.stockChart('container3', {
        chart: {
            events: {
                load: function () {
                    provider(this, this.series[0]);
                }
            }
        },
        rangeSelector: {
            buttons: [{
                count: 10,
                type: 'second',
                text: '10 sec'
            }, {
                count: 30,
                type: 'second',
                text: '30 sec'
            }, {
                type: 'all',
                text: 'All'
            }],
            inputEnabled: true,
            selected: 0
        },
        title: {
            text: 'Live random data'
        },
        exporting: {
            enabled: true
        },
        series: [{
            type: 'spline',
            name: 'Random data per millisecond initially Empty',
            color: Highcharts.getOptions().colors[2],
            data: []
        }]
    });
};


randomDynamicDataCharts();

serviceProviderDynamicDataCharts();

initiallyEmptyDynamicDataCharts();
