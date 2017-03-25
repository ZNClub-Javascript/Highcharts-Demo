//https://cdn.rawgit.com/ZNClub-PA-ML-AI/Sentiment-analysis-using-Business-News/95e16a9b/REL_score_open.json

$.getJSON('https://cdn.rawgit.com/ZNClub-PA-ML-AI/Sentiment-analysis-using-Business-News/95e16a9b/REL_score_open.json', function(data) {

  //console.log(data.score);
	var map=data.score
  for (var key in map) {
    //if (data.hasOwnProperty(key)) {
      console.log(key + " -> " + map[key]);
    //}
  }
	
  //split date
  
  Highcharts.chart('container', {
    chart: {
      type: 'spline',
      zoomType: 'x'
    },
    title: {
      text: 'Market News Sentimental Graph'
    },
    subtitle: {
      text: 'Sentiment-analysis-using-Business-News'
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { // don't display the dummy year
        month: '%e. %b',
        year: '%b'
      },
      title: {
        text: 'Months'
      }
    },
    yAxis: {
      title: {
        text: 'Sentimental Score'
      },
      min: -0.30
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x:%e. %b}: {point.y:.3f} value'
    },

    plotOptions: {
      spline: {
        marker: {
          enabled: true
        }
      }
    },

    series: [{
      name: 'RELIANCE',
      // Define the data points. All series have a dummy year
      // of 1970/71 in order to be compared on the same x axis. Note
      // that in JavaScript, months start at 0 for January, 1 for February etc.
      data: [

        [Date.UTC(2016, 01, 17), 0.2126],
        [Date.UTC(2016, 01, 24), 0.0],
        [Date.UTC(2016, 01, 26), 0.12533125],
        [Date.UTC(2016, 01, 28), 0.0],
        [Date.UTC(2016, 02, 04), 0.24085],
        [Date.UTC(2016, 02, 09), 0.156875],
        [Date.UTC(2016, 02, 10), 0.245825],
        [Date.UTC(2016, 02, 11), 0.2219875],
        [Date.UTC(2016, 02, 17), 0.0],
        [Date.UTC(2016, 02, 28), 0.0],
        [Date.UTC(2016, 02, 30), 0.2468416667],
        [Date.UTC(2016, 03, 04), 0.0007875],
        [Date.UTC(2016, 03, 08), 0.241],
        [Date.UTC(2016, 03, 11), 0.246775],
        [Date.UTC(2016, 03, 20), 0.2486625],
        [Date.UTC(2016, 03, 21), -0.239525],
        [Date.UTC(2016, 03, 22), 0.2494],
        [Date.UTC(2016, 03, 23), 0.248675],
        [Date.UTC(2016, 04, 06), 0.248775],
        [Date.UTC(2016, 04, 16), 0.10708125],
        [Date.UTC(2016, 04, 23), 0.0],
        [Date.UTC(2016, 04, 24), 0.249175],
        [Date.UTC(2016, 04, 26), 0.204725],
        [Date.UTC(2016, 04, 27), 0.0],
        [Date.UTC(2016, 04, 31), 0.0],
        [Date.UTC(2016, 05, 02), 0.0],
        [Date.UTC(2016, 05, 06), 0.0],
        [Date.UTC(2016, 05, 09), 0.19777],
        [Date.UTC(2016, 05, 10), 0.03486875],
        [Date.UTC(2016, 05, 14), 0.0],
        [Date.UTC(2016, 05, 17), -0.23175],
        [Date.UTC(2016, 05, 22), 0.0],
        [Date.UTC(2016, 05, 23), 0.0],
        [Date.UTC(2016, 05, 24), 0.22165],
        [Date.UTC(2016, 05, 27), 0.243975],
        [Date.UTC(2016, 05, 29), 0.0],
        [Date.UTC(2016, 06, 04), 0.0],
        [Date.UTC(2016, 06, 06), 0.09135],
        [Date.UTC(2016, 06, 11), 0.0003375],
        [Date.UTC(2016, 06, 12), 0.0],
        [Date.UTC(2016, 06, 15), 0.0],
        [Date.UTC(2016, 06, 16), 0.246125],
        [Date.UTC(2016, 06, 18), 0.1504083333],
        [Date.UTC(2016, 06, 21), 0.248725],
        [Date.UTC(2016, 06, 22), 0.2456375],
        [Date.UTC(2016, 06, 25), 0.1239],
        [Date.UTC(2016, 06, 29), 0.1641583333],
        [Date.UTC(2016, 07, 02), 0.0],
        [Date.UTC(2016, 07, 03), 0.0],
        [Date.UTC(2016, 07, 08), 0.2151166667],
        [Date.UTC(2016, 07, 09), 0.245475],
        [Date.UTC(2016, 07, 15), 0.0],
        [Date.UTC(2016, 07, 16), 0.0],
        [Date.UTC(2016, 07, 20), 0.240975],
        [Date.UTC(2016, 07, 24), 0.0],
        [Date.UTC(2016, 07, 26), 0.249],
        [Date.UTC(2016, 07, 28), 0.0],
        [Date.UTC(2016, 08, 04), 0.0],
        [Date.UTC(2016, 08, 09), 0.1847041667],
        [Date.UTC(2016, 08, 12), 0.247775],
        [Date.UTC(2016, 08, 16), 0.0],
        [Date.UTC(2016, 08, 22), 0.0410625],
        [Date.UTC(2016, 08, 23), 0.0],
        [Date.UTC(2016, 08, 25), 0.0],
        [Date.UTC(2016, 08, 26), 0.0],
        [Date.UTC(2016, 08, 27), 0.0],
        [Date.UTC(2016, 08, 29), 0.2015325],
        [Date.UTC(2016, 09, 01), 0.0],
        [Date.UTC(2016, 09, 02), 0.0],
        [Date.UTC(2016, 09, 04), 0.04879375],
        [Date.UTC(2016, 09, 05), 0.1702],
        [Date.UTC(2016, 09, 06), 0.24575],
        [Date.UTC(2016, 09, 07), 0.22565],
        [Date.UTC(2016, 09, 09), 0.0],
        [Date.UTC(2016, 09, 10), 0.2290611111],
        [Date.UTC(2016, 09, 11), 0.0],
        [Date.UTC(2016, 09, 12), 0.0441041667],
        [Date.UTC(2016, 09, 13), 0.14909],
        [Date.UTC(2016, 09, 14), 0.1639625],
        [Date.UTC(2016, 09, 16), 0.0],
        [Date.UTC(2016, 09, 17), 0.138745],
        [Date.UTC(2016, 09, 18), 0.09603],
        [Date.UTC(2016, 09, 19), 0.12821875],
        [Date.UTC(2016, 09, 20), 0.1213071429],
        [Date.UTC(2016, 09, 21), 0.10741875],
        [Date.UTC(2016, 09, 22), 0.0],
        [Date.UTC(2016, 09, 23), 0.0],
        [Date.UTC(2016, 09, 24), 0.0],
        [Date.UTC(2016, 09, 25), 0.15009375],
        [Date.UTC(2016, 09, 26), 0.24565],
        [Date.UTC(2016, 09, 27), 0.06168125],
        [Date.UTC(2016, 09, 28), 0.1005083333],
        [Date.UTC(2016, 09, 29), 0.2448],
        [Date.UTC(2016, 09, 31), 0.0],
        [Date.UTC(2016, 10, 01), 0.1200425],
        [Date.UTC(2016, 10, 02), 0.16494375],
        [Date.UTC(2016, 10, 03), 0.1155375],
        [Date.UTC(2016, 10, 04), 0.07085],
        [Date.UTC(2016, 10, 05), 0.0],
        [Date.UTC(2016, 10, 06), 0.0],
        [Date.UTC(2016, 10, 07), 0.0156833333],
        [Date.UTC(2016, 10, 08), 0.0786333333],
        [Date.UTC(2016, 10, 09), 0.1917979167],
        [Date.UTC(2016, 10, 10), 0.105725],
        [Date.UTC(2016, 10, 11), 0.10250625],
        [Date.UTC(2016, 10, 12), 0.1158833333],
        [Date.UTC(2016, 10, 13), 0.0],
        [Date.UTC(2016, 10, 14), 0.1063825],
        [Date.UTC(2016, 10, 15), 0.1733035714],
        [Date.UTC(2016, 10, 16), 0.246725],
        [Date.UTC(2016, 10, 24), -0.144175],
        [Date.UTC(2016, 11, 09), -0.2376],
        [Date.UTC(2016, 11, 10), 0.248],
        [Date.UTC(2016, 11, 12), 0.0],
        [Date.UTC(2016, 11, 14), 0.18106875],
        [Date.UTC(2016, 11, 16), 0.1517666667],
        [Date.UTC(2016, 11, 20), 0.0],
        [Date.UTC(2016, 11, 23), -0.0026875],
        [Date.UTC(2016, 11, 24), 0.229625],
        [Date.UTC(2016, 11, 26), 0.249125],
        [Date.UTC(2017, 00, 03), 0.0197],
        [Date.UTC(2017, 00, 04), 0.0],
        [Date.UTC(2017, 00, 05), 0.0],
        [Date.UTC(2017, 00, 06), 0.1238416667],
        [Date.UTC(2017, 00, 09), 0.0],
        [Date.UTC(2017, 00, 10), 0.0],
        [Date.UTC(2017, 00, 11), -0.0060125],
        [Date.UTC(2017, 00, 12), 0.0354214286],
        [Date.UTC(2017, 00, 13), 0.0],
        [Date.UTC(2017, 00, 14), 0.0],
        [Date.UTC(2017, 00, 15), 0.0],
        [Date.UTC(2017, 00, 16), 0.1263208333],
        [Date.UTC(2017, 00, 17), 0.0445035714],
        [Date.UTC(2017, 00, 18), 0.0835083333],
        [Date.UTC(2017, 00, 19), 0.105775],
        [Date.UTC(2017, 00, 20), 0.041425],
        [Date.UTC(2017, 00, 21), 0.0],
        [Date.UTC(2017, 00, 22), 0.0],
        [Date.UTC(2017, 00, 23), 0.0879852941],
        [Date.UTC(2017, 00, 24), 0.071703125],
        [Date.UTC(2017, 00, 25), 0.1544625],
        [Date.UTC(2017, 00, 26), 0.1148928571],
        [Date.UTC(2017, 00, 27), 0.1241125],
        [Date.UTC(2017, 00, 28), 0.0],
        [Date.UTC(2017, 00, 29), 0.0],
        [Date.UTC(2017, 00, 30), 0.1054336957],
        [Date.UTC(2017, 00, 31), 0.1198022727],
        [Date.UTC(2017, 01, 01), 0.0],
        [Date.UTC(2017, 01, 02), 0.0424076923],
        [Date.UTC(2017, 01, 03), 0.1034559524],
        [Date.UTC(2017, 01, 04), 0.249525],

      ]
    }]
  });

});
