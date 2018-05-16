
var singleStockCandlestickVolumneSliderChart = function(){

  $.getJSON('https://cdn.rawgit.com/ZNClub-PA-ML-AI/Sentiment-analysis-using-Business-News/3f288088/NSE-RELIANCE.json', function(data) {
    var open = data['Open'];
    var high = data['High'];
    var low = data['Low'];
    var close = data['Close'];
    var size = Object.keys(close).length;
    var volume = data["Total Trade Quantity"];
    var turnover = data["Turnover (Lacs)"];
    var date = data["Date"];

    var ohlc = [];
    var vol = [];
    var turn = [];

  // set the allowed units for data grouping
  var groupingUnits = [
  [
        'week', // unit name
        [1] // allowed multiples
        ],
        [
        'month', [1, 2, 3, 4, 6]
        ]
        ],

        i = size-1;


        for (i; i >=0; i -= 1) {
          //format date to utc
          var dates = date[i].split('-');
          //adjust month
          var m = dates[1];
          m = parseInt(m) - 1;
          m = m.toString();
          if (m.length == 1) {
            m = "0" + m;
          }
          var dateUTC = Date.UTC(dates[0], m, dates[2]);

          ohlc.push([
            dateUTC,
            open[i],
            high[i],
            low[i],
            close[i]
            ]);

          vol.push([
            dateUTC,
            volume[i]
            ]);
          
          turn.push([
          	dateUTC,
            turnover[i]
            ]);
          //console.log(vol);
        }


  // Single Stock Candlestick + Volumne with date range window slider
  var createChart = function() {
    Highcharts.stockChart('container1', {

      rangeSelector: {
        selected: 4
      },
      title: {
        text: 'NSE/REL Stock Price'
      },

      yAxis: [{
        labels: {
          align: 'right',
          x: -3
        },
        title: {
          text: 'OHLC'
        },
        height: '60%',
        lineWidth: 2
      }, {
        labels: {
          align: 'right',
          x: -3
        },
        title: {
          text: 'Volume'
        },
        top: '75%',
        height: '25%',
        offset: 0,
        lineWidth: 2
      }
      ],

      tooltip: {
        split: true
      },

      series: [{
        type: 'candlestick',
        name: 'AAPL',
        data: ohlc,
        dataGrouping: {
          units: groupingUnits
        }
      }, {
        type: 'column',
        name: 'Volume',
        data: vol,
        yAxis: 1,
        dataGrouping: {
          units: groupingUnits
        }
      }]
    });
  };

  createChart();
});

};
// Multiple Stock Candlestick + Volumne with date range window slider

var multipleStockCandlestickVolumneSliderChart = function(){

  var seriesOptions = [],
  seriesCounter = 0,
  names = ['MSFT', 'AAPL', 'GOOG'];

  var createChart = function () {

    Highcharts.stockChart('container2', {

      rangeSelector: {
        selected: 4
      },

      yAxis: {
        labels: {
          formatter: function () {
            return (this.value > 0 ? ' + ' : '') + this.value + '%';
          }
        },
        plotLines: [{
          value: 0,
          width: 2,
          color: 'silver'
        }]
      },

      plotOptions: {
        series: {
          compare: 'percent',
          showInNavigator: true
        }
      },

      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
        valueDecimals: 2,
        split: true
      },

      series: seriesOptions
    });
  };

  $.each(names, function (i, name) {

    $.getJSON('https://www.highcharts.com/samples/data/' + name.toLowerCase() + '-c.json',    function (data) {

      seriesOptions[i] = {
        name: name,
        data: data
      };

      // As we're loading the data asynchronously, we don't know what order it will arrive. So
      // we keep a counter and create the chart when all the data is loaded.
      seriesCounter += 1;

      if (seriesCounter === names.length) {
        createChart();
      }
    });
  });

};


singleStockCandlestickVolumneSliderChart();

multipleStockCandlestickVolumneSliderChart();