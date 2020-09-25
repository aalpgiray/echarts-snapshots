export const optionGenerator = () => {
  var valueShift = 50;
  var sMLmult = 200;
  var sAmult = 200;
  var sBmult = 200;
  var maxThickness = 150;
  var sensorRange = 100;
  var sMLbase = Math.random() * sMLmult;
  var sAbase = Math.random() * sAmult;
  var sBbase = Math.random() * sBmult;
  var dataML = [];
  var dataA = [];
  var dataB = [];
  var dataSR = [];
  var dataOC = [];
  var dataCS = [
    { pos: 5, name: "Port 1" },
    { pos: 15, name: "Port 2" },
    { pos: 25, name: "Port 3" },
    { pos: 35, name: "Port 4" },
    { pos: 45, name: "" }
  ];
  var resultType = 0;

  for (var i = 1; i < 50; i++) {
    sMLbase = Math.round((Math.random() - 0.5) * 20 + sMLbase);
    sMLbase <= 0 && (sMLbase = Math.random() * sMLmult);
    sMLbase > sensorRange && (sMLbase = sensorRange);
    var shiftedValue =
      sMLbase + valueShift > sensorRange ? sensorRange : sMLbase + valueShift;
    if (shiftedValue >= sensorRange) {
      resultType = Math.round(Math.random() * 10) % 10 < 3 ? 1 : 0;
    } else {
      resultType = 2;
    }
    dataML.push({
      value: [i, shiftedValue, resultType],
      itemStyle: {
        color: resultType === 0 ? "lime" : resultType === 1 ? "cyan" : "red"
      },
      symbol:
        resultType === 0 ? "circle" : resultType === 1 ? "triangle" : "diamond",
      symbolSize: resultType === 0 ? 5 : resultType === 1 ? 15 : 10
    });

    sAbase = Math.round((Math.random() - 0.5) * 20 + sAbase);
    sAbase <= 0 && (sAbase = Math.random() * sAmult);
    sAbase > sensorRange && (sAbase = sensorRange);
    shiftedValue =
      sAbase + valueShift > sensorRange ? sensorRange : sAbase + valueShift;
    if (shiftedValue >= sensorRange) {
      resultType = Math.round(Math.random() * 10) % 10 < 1 ? 1 : 0;
    } else {
      resultType = 2;
    }
    dataA.push({
      value: [i, shiftedValue, resultType],
      itemStyle: {
        color: resultType === 0 ? "lime" : resultType === 1 ? "cyan" : "red"
      },
      symbol:
        resultType === 0 ? "circle" : resultType === 1 ? "triangle" : "diamond",
      symbolSize: resultType === 0 ? 5 : resultType === 1 ? 15 : 10
    });

    sBbase = Math.round((Math.random() - 0.5) * 20 + sBbase);
    sBbase <= 0 && (sBbase = Math.random() * sBmult);
    sBbase > sensorRange && (sBbase = sensorRange);
    shiftedValue =
      sBbase + valueShift > sensorRange ? sensorRange : sBbase + valueShift;
    if (shiftedValue >= sensorRange) {
      resultType = Math.round(Math.random() * 10) % 10 < 1 ? 1 : 0;
    } else {
      resultType = 2;
    }
    dataB.push({
      value: [i, shiftedValue, resultType],
      itemStyle: {
        color: resultType === 0 ? "lime" : resultType === 1 ? "cyan" : "red"
      },
      symbol:
        resultType === 0 ? "circle" : resultType === 1 ? "triangle" : "diamond",
      symbolSize: resultType === 0 ? 5 : resultType === 1 ? 15 : 10
    });

    dataSR.push([i, maxThickness - sensorRange]);
    dataOC.push([i, sensorRange]);
  }

  const option = {
    animation: false,
    grid: {
      top: "15%",
      left: "3%",
      right: "4%",
      bottom: "15%",
      containLabel: true
    },
    title: {
      left: "center",
      text: "Left Sidewall",
      subtext: "Demo Furnace - September 2020 Inspection",
      textStyle: { fontSize: 31 }
    },
    toolbox: {
      left: "center",
      itemSize: 25,
      top: "8%",
      feature: {
        dataZoom: {
          yAxisIndex: "none"
        },
        restore: {},
        saveAsImage: {}
      }
    },
    dataZoom: [{ type: "inside" }, { type: "slider" }],
    tooltip: {
      trigger: "axis",
      position: function (pt: any) {
        return [pt[0], 200];
      }
      //,formatter: function (params) {
      //    return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(0);
      //}
    },
    legend: {
      data: [
        "Section ML",
        "Section A",
        "Section B",
        "Sensor Range",
        "Overcoat",
        "Custom Sections"
      ],
      bottom: "7%"
    },

    xAxis: {
      name: "Block Number",
      nameLocation: "middle",
      nameGap: 30,
      nameTextStyle: { fontSize: 21 },
      type: "category",
      boundaryGap: [0, 0],
      axisPointer: {
        snap: true,
        lineStyle: {
          color: "darkgrey",
          opacity: 0.5,
          width: 2
        },
        label: {
          show: true,
          formatter: "Block {value}",
          backgroundColor: "darkgrey"
        }
      },
      splitLine: {
        show: true,
        lineStyle: { color: "white" }
      }
    },

    yAxis: [
      {
        name: "Block Thickness (mm)",
        nameLocation: "middle",
        nameGap: 35,
        nameTextStyle: { fontSize: 21 },
        type: "value",
        splitLine: {
          show: true,
          lineStyle: { color: "white" }
        },
        axisLabel: {
          interval: 25 //not working !!!
        },
        max: maxThickness
      },
      {
        type: "value",
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        max: maxThickness,
        inverse: true
      }
    ],

    visualMap: {
      type: "piecewise",
      show: false,
      dimension: 0,
      seriesIndex: 4,
      pieces: [
        {
          gt: 11,
          lt: 43,
          color: "rgba(0, 180, 0, 0.5)"
        }
      ]
    },

    series: [
      {
        name: "Section ML",
        type: "line",
        smooth: false,
        stack: "ML",
        symbol: "circle",
        symbolSize: 10,
        sampling: "average",
        itemStyle: { color: "black" },
        //areaStyle: {color:'orange'},
        data: dataML
      },
      {
        name: "Section A",
        type: "line",
        smooth: false,
        stack: "A",
        symbol: "circle",
        symbolSize: 10,
        sampling: "average",
        itemStyle: { color: "black" },
        //areaStyle: {color:'green'},
        data: dataA
      },
      {
        name: "Section B",
        type: "line",
        smooth: false,
        stack: "B",
        symbol: "circle",
        symbolSize: 10,
        sampling: "average",
        itemStyle: { color: "black" },
        //areaStyle: {color:'white'},
        data: dataB
      },
      {
        name: "Sensor Range",
        type: "line",
        yAxisIndex: 1,
        smooth: false,
        stack: "SR",
        symbol: "none",
        sampling: "average",
        itemStyle: { color: "grey" },
        areaStyle: { color: "lightgrey" },
        data: dataSR
      },
      {
        name: "Overcoat",
        type: "line",
        smooth: false,
        stack: "OC",
        symbol: "none",
        sampling: "average",
        itemStyle: { color: "green" },
        //areaStyle: {},
        data: dataOC,
        markLine: {
          silent: true,
          data: [
            [
              {
                coord: [11, 125],
                label: {
                  formatter: "2x100 mm overcoat",
                  position: "insideMiddleTop"
                }
              },
              { coord: [43, 125] }
            ]
          ]
        }
      },
      {
        name: "Custom Sections",
        type: "line",
        smooth: false,
        stack: "CS",
        symbol: "none",
        sampling: "average",
        itemStyle: { color: "grey" },
        //areaStyle: {},
        //data: dataCS,
        markLine: {
          silent: true,
          data: dataCS.map(function (item) {
            return {
              xAxis: item.pos,
              label: {
                formatter: item.name,
                position: "insideStartBottom",
                distance: 100
              }
            };
          })
        }
      }
    ]
  };

  return option;
};
