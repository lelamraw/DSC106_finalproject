Highcharts.chart('container', {

    title: {
      text: 'Exports in Billions Between Countries'
    },
  
    accessibility: {
      point: {
        descriptionFormatter: function(point) {
          var index = point.index + 1,
            from = point.from,
            to = point.to,
            weight = point.weight;
  
          return index + '. From ' + from + ' to ' + to + ': ' + weight + '.';
        }
      }
    },
  
    series: [{
      keys: ['from', 'to', 'weight'],
      data: [
        ['USA', 'MEX', 265],
        ['USA', 'CAN', 299],
        ['USA', 'CHN', 120],
        ['USA', 'JPN', 75],
        ['USA', 'GER', 58],
        ['USA', 'KOR', 56],
        ['USA', 'GBR', 66],
  
        ['MEX', 'USA', 344],
        ['MEX', 'CAN', 14],
        ['MEX', 'CHN', 7],
        ['MEX', 'JPN', 3],
        ['MEX', 'GER', 7],
        ['MEX', 'KOR', 2],
        ['MEX', 'GBR', 2],
  
        ['CAN', 'USA', 338],
        ['CAN', 'MEX', 6],
        ['CAN', 'CHN', 21],
        ['CAN', 'JPN', 10],
        ['CAN', 'GER', 4],
        ['CAN', 'KOR', 5],
        ['CAN', 'GBR', 13],
  
        ['CHN', 'USA', 478],
        ['CHN', 'MEX', 44],
        ['CHN', 'CAN', 0],
        ['CHN', 'JPN', 147],
        ['CHN', 'GER', 78],
        ['CHN', 'KOR', 109],
        ['CHN', 'GBR', 57],
  
        ['GER', 'USA', 134],
        ['GER', 'MEX', 0],
        ['GER', 'CHN', 109],
        ['GER', 'CAN', 0],
        ['GER', 'JPN', 0],
        ['GER', 'KOR', 0],
        ['GER', 'GBR', 97],
  
        ['JPN', 'USA', 140],
        ['JPN', 'MEX', 11],
        ['JPN', 'CHN', 144],
        ['JPN', 'CAN', 0],
        ['JPN', 'GER', 20],
        ['JPN', 'KOR', 52],
        ['JPN', 'GBR', 14],
  
        ['KOR', 'USA', 73],
        ['KOR', 'MEX', 11],
        ['KOR', 'CHN', 162],
        ['KOR', 'CAN', 0],
        ['KOR', 'GER', 9],
        ['KOR', 'JPN', 30],
        ['KOR', 'GBR', 0],
  
        ['GBR', 'USA', 65],
        ['GBR', 'MEX', 0],
        ['GBR', 'CHN', 28],
        ['GBR', 'CAN', 0],
        ['GBR', 'GER', 48],
        ['GBR', 'JPN', 8],
        ['GBR', 'KOR', 8],
  
      ],
      type: 'dependencywheel',
      name: 'Exports',
      dataLabels: {
        color: '#333',
        textPath: {
          enabled: true,
          attributes: {
            dy: 5
          }
        },
        distance: 10
      },
      size: '95%'
    }]
  
  });

  

var categories = [
    "USA",'CAN', 'MEX', 'JPN', 'GBR',
    'GER', 'KOR', 'NED', 'BRA', 'FRA',
    'HKG', 'IND', 'SGP', 'BEL',
];

dict = {}
dict["USA"] = [0, -299, -265, -75, -66, -57, -56, -48, -39, -37, -37, -33, -32,-31]
dict["MEX"] = [344, 14, 0, 3, 2, 7, 2, 2, 4, 2, 0, 0, 0, 2]
dict["CAN"] = [338, 0, 6, 10, 12, 4, 4, 4, 2, 3, 3, 3, 0, 3]
dict["CHN"] = [480,0, 44, 147, 57, 78, 109, 73, 0, 0, 303, 77, 50, 0]
dict["JPN"] = [140, 0, 11, 14, 21, 52, 13, 0, 0, 35, 0, 23, 0]
dict["GER"] = [134, 0, 0, 0, 97, 0, 0, 99, 0, 124, 0, 0, 0, 52]
dict["KOR"] = [73, 0, 11, 31, 0, 9, 0, 0, 0, 0, 46, 16, 12, 0]
dict["GBR"] = [65, 0, 0, 8, 0, 47, 8, 33, 0, 32, 10, 0, 0, 19]


var chart = Highcharts.chart("container1" ,{
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Export Comparison between USA and China'
    },
    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var index = point.index + 1,
                    category = point.category,
                    val = Math.abs(point.y),
                    series = point.series.name;

                return index + ', Age ' + category + ', ' + val + '%. ' + series + '.';
            }
        }
    },
    xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        },
        
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        },
        
    }],
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value) + '';
            }
        },
        
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + ' to ' + this.point.category + '</b><br/>' +
                'Exports: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + ' billion';
        }
    },

    series: [{
        name: 'USA',
        data: dict["USA"],
        color: "rgb(53, 215, 221)"
    }, {
        name: 'CHN',
        data: dict["CHN"],
        color: "rgb(70, 245, 70)"
    }]
});


$('#MEX').click(function () {
    chart.update({
        series: [{
            name: 'USA',
            data: dict["USA"]
        }, {
            name: 'MEX',
            data: dict["MEX"]
        }]
    });
});

$('#CAN').click(function () {
    chart.update({
        series: [{
            name: 'USA',
            data: dict["USA"]
        }, {
            name: 'CAN',
            data: dict["CAN"]
        }]
    });
});

$('#CHN').click(function () {
    chart.update({
        series: [{
            name: 'USA',
            data: dict["USA"]
        }, {
            name: 'CHN',
            data: [480,0, 44, 147, 57, 78, 109, 73, 0, 0, 303, 77, 50, 0]
        }]
    });
});

$('#JPN').click(function () {
    chart.update({
        series: [{
            name: 'USA',
            data: dict["USA"]
        }, {
            name: 'JPN',
            data: dict["JPN"]
        }]
    });
});

$('#GER').click(function () {
    chart.update({
        series: [{
            name: 'USA',
            data: dict["USA"]
        }, {
            name: 'GER',
            data: dict["GER"]
        }]
    });
});

$('#KOR').click(function () {
    chart.update({
        series: [{
            name: 'USA',
            data: dict["USA"]
        }, {
            name: 'KOR',
            data: dict["KOR"]
        }]
    });
});

$('#GBR').click(function () {
    chart.update({
        series: [{
            name: 'USA',
            data: dict["USA"]
        }, {
            name: 'GBR',
            data: dict["GBR"]
        }]
    });
});



Highcharts.chart('container3', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Percentage of Total Exports for Top Exporting Countries in 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Exports',
        colorByPoint: true,
        data: [ {
            
            name: 'China',
            y: 2494230195000

        },{
            name: 'USA',
            y: 1665992032000
        }, {
            name: 'Germany',
            y: 1557176334000
        },{
            name: 'Japan',
            y: 738188768000
        },
        {
            name: 'South Korea',
            y: 605169190000
        },  {
            name: 'United Kingdom',
            y: 487069299000
        },{
            name: 'Mexico',
            y: 450531651000
        }, {
            name: 'Canada',
            y: 450722776000
        },  ]
    }]

});

dict2 = {}
dict2["USA"] = [745944093.9,833725020,874753840.2,975855304.8,1139684671,1056147624,1091240880,1177412098,1364857442,1521976513,1724883780,1787466522,1896210417,1420842479,1749955238,1994382499,2059656193,2074077348,2171602887,2091999251,2032767420,2061913552]
dict2["MEX"] = [60686351.97,72917797.66,92140920.32,103401870.6,114106395.9,145215715.4,136000939.4,134578157,136608233.7,160337064.8,177444150.1,207248615.6,221408637.8,247132830.1,199617661.7,256402613,308964487.2,331021341,344695987.2,368887719.8,365283142.1,357985397.9,376516745.3]
dict2["CAN"] = [161098290.5,167723365.1,192281112.1,195707629.3,209184345.7,233978513.52,215256472.5,216891474.5,233403309.5,264624491.9,299168217.6,334324609.5,365534087.8,384659122.9,312631625.3,379217717.8,425807454.5,441181898,447519483.3,451301988,409521001.5,391438699,411439335.2]
dict2["CHN"] = [133661924,151498674.1, 160650279.7,149294002.8,156988273.6,203932863.4,214853740.2,262066255.3,361534492.5,472021142.5,554697771.1,669109200,807344464.4,902785095.6,868706247,1184965539,1428671148,1441644040,1546313519,1532836774,1349517971,1321287364,1349258005]
dict2["JPN"] = [252487191.1,268342184.5,267844503.8,224903288.5,256156541.9,303793093.7,289292943.4,287685927.2,326312462.4,382821401.6,439740662.7,491476203.7,516613802.1,584545108,426030787.1,540342861.5,655659774,667607248.6,640492155.1,642471853,535963740,508177162.5,468605995.3]
dict2["GER"] = [425485749.7,438107898.1,426409021.2,445409674.8,437124790.9,468577917.4,466789101.8,472542549.9,566466840.5,674163977.8,731133740.5,840053631.2,962743246.3,1096761497,852743922,973554072.8,1126081332,1072430146,1101542047,1126604230,988586233,979701472.1,1046326850]
dict2["KOR"] = [104385549.8,111637782.7,108350432.7,68886984.06,94324380.52,126476053.4,113264141.9,126252423,144736177.7,181231211.5,203293749.3,241775252.7,278378518.5,330932887,261875449.8,346512853.6,413007736,413205530.2,413879207.2,434750896.1,380590570.7,360162984.4,607564400.7]
dict2["GBR"] = [250610790.7,269157308.9,287212087.3,298157467.3,307682046.5,333378296,331128099.5,340168272.1,387903437.8,454822718.6,477528739.1,534867943.9,613370756.7,662032415.2,507637690.9,567220615.2,658110607.5,669810266.2,653502426.6,668848155.5,613957958.1,625164970,607564400.7]

var chart5 = Highcharts.chart('container2', {
    chart: {
        type: 'line'
    },

        title: {
            text: 'Changes in Exports Over the Years(1995-2017)'
        },


        yAxis: {
            title: {
                text: 'Exports in $'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 1995
            }
        },

        series: [{
            name: 'USA',
            data: dict2['USA'] 
        },{
            name: 'MEX',
            data: dict2['MEX'] 
        },{
            name: 'CAN',
            data: dict2['CAN'] 
        },{
            name: 'CHN',
            data: dict2['CHN'] 
        },{
            name: 'JPN',
            data: dict2['JPN'] 
        },{
            name: 'GER',
            data: dict2['GER'] 
        },{
            name: 'KOR',
            data: dict2['KOR'] 
        },{
            name: 'GBR',
            data: dict2['GBR'] 
        }]
 });

