export const option = {
  animation: true,
  grid: {
    top: "70",
    left: "40",
    right: "5",
    bottom: "100",
    containLabel: true
  },
  title: {
    left: "center",
    text: "Left Sidewall",
    subtext: "Demo Furnace - September 2020 Inspection",
    textStyle: { fontSize: 31 }
  },
  dataZoom: [{ type: "inside" }, { type: "slider" }],
  tooltip: { trigger: "axis" },
  legend: {
    data: [
      "Section ML",
      "Section A",
      "Section B",
      "Sensor Range",
      "Overcoat",
      "Custom Sections"
    ],
    bottom: "45"
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
      lineStyle: { color: "darkgrey", opacity: 0.5, width: 2 },
      label: {
        show: true,
        formatter: "Block {value}",
        backgroundColor: "darkgrey"
      }
    },
    splitLine: { show: true, lineStyle: { color: "white" } }
  },
  yAxis: [
    {
      name: "Block Thickness (mm)",
      nameLocation: "middle",
      nameGap: 35,
      nameTextStyle: { fontSize: 21 },
      type: "value",
      splitLine: { show: true, lineStyle: { color: "white" } },
      axisLabel: { interval: 25 },
      max: 150
    },
    {
      type: "value",
      splitLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      max: 150,
      inverse: true
    }
  ],
  visualMap: {
    type: "piecewise",
    show: false,
    dimension: 0,
    seriesIndex: 4,
    pieces: [{ gt: 11, lt: 43, color: "rgba(0, 180, 0, 0.5)" }]
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
      data: [
        {
          value: [1, 74, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [2, 81, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [3, 82, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [4, 91, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [5, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [6, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [7, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [8, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [9, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [10, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [11, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [12, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [13, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [14, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [15, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [16, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [17, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [18, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [19, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [20, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [21, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [22, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [23, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [24, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [25, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [26, 96, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [27, 90, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [28, 94, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [29, 94, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [30, 96, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [31, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [32, 96, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [33, 89, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [34, 84, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [35, 85, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [36, 90, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [37, 83, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [38, 80, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [39, 79, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [40, 82, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [41, 84, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [42, 81, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [43, 82, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [44, 74, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [45, 82, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [46, 83, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [47, 84, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [48, 92, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [49, 87, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        }
      ]
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
      data: [
        {
          value: [1, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [2, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [3, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [4, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [5, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [6, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [7, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [8, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [9, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [10, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [11, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [12, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [13, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [14, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [15, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [16, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [17, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [18, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [19, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [20, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [21, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [22, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [23, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [24, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [25, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [26, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [27, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [28, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [29, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [30, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [31, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [32, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [33, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [34, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [35, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [36, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [37, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [38, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [39, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [40, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [41, 99, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [42, 91, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [43, 99, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [44, 92, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [45, 90, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [46, 89, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [47, 94, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [48, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [49, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        }
      ]
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
      data: [
        {
          value: [1, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [2, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [3, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [4, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [5, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [6, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [7, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [8, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [9, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [10, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [11, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [12, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [13, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [14, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [15, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [16, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [17, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [18, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [19, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [20, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [21, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [22, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [23, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [24, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [25, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [26, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [27, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [28, 99, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [29, 90, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [30, 97, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [31, 90, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [32, 93, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [33, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [34, 95, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [35, 93, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [36, 92, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [37, 86, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [38, 80, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [39, 89, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [40, 94, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [41, 88, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [42, 79, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [43, 79, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [44, 74, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [45, 66, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [46, 70, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [47, 63, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [48, 60, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [49, 66, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        }
      ]
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
      data: [
        [1, 50],
        [2, 50],
        [3, 50],
        [4, 50],
        [5, 50],
        [6, 50],
        [7, 50],
        [8, 50],
        [9, 50],
        [10, 50],
        [11, 50],
        [12, 50],
        [13, 50],
        [14, 50],
        [15, 50],
        [16, 50],
        [17, 50],
        [18, 50],
        [19, 50],
        [20, 50],
        [21, 50],
        [22, 50],
        [23, 50],
        [24, 50],
        [25, 50],
        [26, 50],
        [27, 50],
        [28, 50],
        [29, 50],
        [30, 50],
        [31, 50],
        [32, 50],
        [33, 50],
        [34, 50],
        [35, 50],
        [36, 50],
        [37, 50],
        [38, 50],
        [39, 50],
        [40, 50],
        [41, 50],
        [42, 50],
        [43, 50],
        [44, 50],
        [45, 50],
        [46, 50],
        [47, 50],
        [48, 50],
        [49, 50]
      ]
    },
    {
      name: "Overcoat",
      type: "line",
      smooth: false,
      stack: "OC",
      symbol: "none",
      sampling: "average",
      itemStyle: { color: "green" },
      data: [
        [1, 100],
        [2, 100],
        [3, 100],
        [4, 100],
        [5, 100],
        [6, 100],
        [7, 100],
        [8, 100],
        [9, 100],
        [10, 100],
        [11, 100],
        [12, 100],
        [13, 100],
        [14, 100],
        [15, 100],
        [16, 100],
        [17, 100],
        [18, 100],
        [19, 100],
        [20, 100],
        [21, 100],
        [22, 100],
        [23, 100],
        [24, 100],
        [25, 100],
        [26, 100],
        [27, 100],
        [28, 100],
        [29, 100],
        [30, 100],
        [31, 100],
        [32, 100],
        [33, 100],
        [34, 100],
        [35, 100],
        [36, 100],
        [37, 100],
        [38, 100],
        [39, 100],
        [40, 100],
        [41, 100],
        [42, 100],
        [43, 100],
        [44, 100],
        [45, 100],
        [46, 100],
        [47, 100],
        [48, 100],
        [49, 100]
      ],
      markLine: {
        silent: true,
        data: [
          [
            {
              coord: [11, 120],
              label: {
                formatter: "2x100 mm overcoat",
                position: "insideMiddleTop"
              }
            },
            { coord: [43, 120] }
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
      markLine: {
        silent: true,
        data: [
          {
            xAxis: 5,
            label: {
              formatter: "Port 1",
              position: "insideStartBottom",
              distance: 70
            }
          },
          {
            xAxis: 15,
            label: {
              formatter: "Port 2",
              position: "insideStartBottom",
              distance: 70
            }
          },
          {
            xAxis: 25,
            label: {
              formatter: "Port 3",
              position: "insideStartBottom",
              distance: 70
            }
          },
          {
            xAxis: 35,
            label: {
              formatter: "Port 4",
              position: "insideStartBottom",
              distance: 70
            }
          },
          {
            xAxis: 45,
            label: {
              formatter: "",
              position: "insideStartBottom",
              distance: 70
            }
          }
        ]
      }
    }
  ]
};
const option2 = {
  animation: true,
  color: [
    "#c23531",
    "#2f4554",
    "#61a0a8",
    "#d48265",
    "#91c7ae",
    "#749f83",
    "#ca8622",
    "#bda29a",
    "#6e7074",
    "#546570",
    "#c4ccd3"
  ],
  gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
  textStyle: {
    fontFamily: "Microsoft YaHei",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal"
  },
  animationDuration: 1000,
  animationDurationUpdate: 300,
  animationEasing: "exponentialOut",
  animationEasingUpdate: "cubicOut",
  animationThreshold: 2000,
  progressiveThreshold: 3000,
  progressive: 400,
  hoverLayerThreshold: 3000,
  useUTC: false,
  title: [
    {
      left: "center",
      text: "Left Sidewall",
      subtext: "Demo Furnace - September 2020 Inspection",
      textStyle: { fontSize: 31, fontWeight: "bolder", color: "#333" },
      zlevel: 0,
      z: 6,
      show: true,
      target: "blank",
      subtarget: "blank",
      top: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      subtextStyle: { color: "#aaa" },
      right: null
    }
  ],

  axisPointer: [
    {
      show: "auto",
      triggerOn: null,
      zlevel: 0,
      z: 50,
      type: "line",
      snap: false,
      triggerTooltip: true,
      value: null,
      status: null,
      link: [],
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: { color: "#aaa", width: 1, type: "solid" },
      shadowStyle: { color: "rgba(150,150,150,0.3)" },
      label: {
        show: true,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: "#fff",
        padding: [5, 7, 5, 7],
        backgroundColor: "auto",
        borderColor: null,
        borderWidth: 0,
        shadowBlur: 3,
        shadowColor: "#aaa"
      },
      handle: {
        show: false,
        icon:
          "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        margin: 50,
        color: "#333",
        shadowBlur: 3,
        shadowColor: "#aaa",
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        throttle: 40
      }
    }
  ],
  tooltip: [
    {
      trigger: "axis",
      zlevel: 0,
      z: 60,
      show: true,
      showContent: true,
      triggerOn: "mousemove|click",
      alwaysShowContent: false,
      displayMode: "single",
      renderMode: "auto",
      confine: false,
      showDelay: 0,
      hideDelay: 100,
      transitionDuration: 0.4,
      enterable: false,
      backgroundColor: "rgba(50,50,50,0.7)",
      borderColor: "#333",
      borderRadius: 4,
      borderWidth: 0,
      padding: 5,
      extraCssText: "",
      axisPointer: {
        type: "line",
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: { color: "#999", width: 1, type: "dashed", textStyle: {} }
      },
      textStyle: { color: "#fff", fontSize: 14 }
    }
  ],
  yAxis: [
    {
      name: "Block Thickness (mm)",
      nameLocation: "middle",
      nameGap: 35,
      nameTextStyle: { fontSize: 21 },
      type: "value",
      splitLine: {
        show: true,
        lineStyle: { color: "white", width: 1, type: "solid" }
      },
      axisLabel: {
        interval: 25,
        show: true,
        inside: false,
        rotate: 0,
        showMinLabel: null,
        showMaxLabel: null,
        margin: 8,
        fontSize: 12
      },
      max: 150,
      boundaryGap: [0, 0],
      splitNumber: 5,
      minorTick: { show: false, splitNumber: 5, length: 3, lineStyle: {} },
      minorSplitLine: { show: false, lineStyle: { color: "#eee", width: 1 } },
      show: true,
      zlevel: 0,
      z: 0,
      inverse: false,
      nameRotate: null,
      nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." },
      silent: false,
      triggerEvent: false,
      tooltip: { show: false },
      axisPointer: {},
      axisLine: {
        show: true,
        onZero: true,
        onZeroAxisIndex: null,
        lineStyle: { color: "#333", width: 1, type: "solid" },
        symbol: ["none", "none"],
        symbolSize: [10, 15]
      },
      axisTick: {
        show: true,
        inside: false,
        length: 5,
        lineStyle: { width: 1 }
      },
      splitArea: {
        show: false,
        areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] }
      },
      offset: 0,
      rangeEnd: null,
      rangeStart: null
    },
    {
      type: "value",
      splitLine: {
        show: false,
        lineStyle: { color: ["#ccc"], width: 1, type: "solid" }
      },
      axisLabel: {
        show: false,
        inside: false,
        rotate: 0,
        showMinLabel: null,
        showMaxLabel: null,
        margin: 8,
        fontSize: 12
      },
      axisTick: {
        show: false,
        inside: false,
        length: 5,
        lineStyle: { width: 1 }
      },
      max: 150,
      inverse: true,
      boundaryGap: [0, 0],
      splitNumber: 5,
      minorTick: { show: false, splitNumber: 5, length: 3, lineStyle: {} },
      minorSplitLine: { show: false, lineStyle: { color: "#eee", width: 1 } },
      show: true,
      zlevel: 0,
      z: 0,
      name: "",
      nameLocation: "end",
      nameRotate: null,
      nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." },
      nameTextStyle: {},
      nameGap: 15,
      silent: false,
      triggerEvent: false,
      tooltip: { show: false },
      axisPointer: {},
      axisLine: {
        show: true,
        onZero: true,
        onZeroAxisIndex: null,
        lineStyle: { color: "#333", width: 1, type: "solid" },
        symbol: ["none", "none"],
        symbolSize: [10, 15]
      },
      splitArea: {
        show: false,
        areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] }
      },
      offset: 0,
      rangeEnd: null,
      rangeStart: null
    }
  ],
  xAxis: [
    {
      name: "Block Number",
      nameLocation: "middle",
      nameGap: 30,
      nameTextStyle: { fontSize: 21 },
      type: "category",
      boundaryGap: [0, 0],
      axisPointer: {
        snap: true,
        lineStyle: { color: "darkgrey", opacity: 0.5, width: 2 },
        label: {
          show: true,
          formatter: "Block {value}",
          backgroundColor: "darkgrey"
        },
        status: "hide",
        value: 34,
        seriesDataIndices: [
          { seriesIndex: 0, dataIndexInside: 5, dataIndex: 34 },
          { seriesIndex: 1, dataIndexInside: 5, dataIndex: 34 },
          { seriesIndex: 2, dataIndexInside: 5, dataIndex: 34 },
          { seriesIndex: 3, dataIndexInside: 5, dataIndex: 34 },
          { seriesIndex: 4, dataIndexInside: 5, dataIndex: 34 }
        ]
      },
      splitLine: {
        show: true,
        lineStyle: { color: "white", width: 1, type: "solid" }
      },
      deduplication: null,
      axisTick: {
        alignWithLabel: false,
        interval: "auto",
        show: true,
        inside: false,
        length: 5,
        lineStyle: { width: 1 }
      },
      axisLabel: {
        interval: "auto",
        show: true,
        inside: false,
        rotate: 0,
        showMinLabel: null,
        showMaxLabel: null,
        margin: 8,
        fontSize: 12
      },
      show: true,
      zlevel: 0,
      z: 0,
      inverse: false,
      nameRotate: null,
      nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." },
      silent: false,
      triggerEvent: false,
      tooltip: { show: false },
      axisLine: {
        show: true,
        onZero: true,
        onZeroAxisIndex: null,
        lineStyle: { color: "#333", width: 1, type: "solid" },
        symbol: ["none", "none"],
        symbolSize: [10, 15]
      },
      splitArea: {
        show: false,
        areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] }
      },
      offset: 0,
      rangeEnd: 36,
      rangeStart: 29
    }
  ],
  grid: [
    {
      top: "70",
      left: "40",
      right: "5",
      bottom: "100",
      containLabel: true,
      show: false,
      zlevel: 0,
      z: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 1,
      borderColor: "#ccc"
    }
  ],
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
      data: [
        {
          value: [1, 74, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [2, 81, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [3, 82, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [4, 91, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [5, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [6, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [7, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [8, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [9, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [10, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [11, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [12, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [13, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [14, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [15, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [16, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [17, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [18, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [19, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [20, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [21, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [22, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [23, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [24, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [25, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [26, 96, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [27, 90, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [28, 94, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [29, 94, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [30, 96, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [31, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [32, 96, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [33, 89, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [34, 84, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [35, 85, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [36, 90, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [37, 83, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [38, 80, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [39, 79, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [40, 82, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [41, 84, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [42, 81, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [43, 82, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [44, 74, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [45, 82, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [46, 83, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [47, 84, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [48, 92, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [49, 87, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        }
      ],
      zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: true,
      hoverAnimation: true,
      clip: true,
      label: { position: "top" },
      lineStyle: { width: 2, type: "solid" },
      step: false,
      smoothMonotone: null,
      symbolRotate: null,
      showSymbol: true,
      showAllSymbol: "auto",
      connectNulls: false,
      animationEasing: "linear",
      progressive: 0,
      hoverLayerThreshold: null,
      emphasis: { label: {} }
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
      data: [
        {
          value: [1, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [2, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [3, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [4, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [5, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [6, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [7, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [8, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [9, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [10, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [11, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [12, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [13, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [14, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [15, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [16, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [17, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [18, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [19, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [20, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [21, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [22, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [23, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [24, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [25, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [26, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [27, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [28, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [29, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [30, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [31, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [32, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [33, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [34, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [35, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [36, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [37, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [38, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [39, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [40, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [41, 99, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [42, 91, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [43, 99, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [44, 92, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [45, 90, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [46, 89, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [47, 94, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [48, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [49, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        }
      ],
      zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: true,
      hoverAnimation: true,
      clip: true,
      label: { position: "top" },
      lineStyle: { width: 2, type: "solid" },
      step: false,
      smoothMonotone: null,
      symbolRotate: null,
      showSymbol: true,
      showAllSymbol: "auto",
      connectNulls: false,
      animationEasing: "linear",
      progressive: 0,
      hoverLayerThreshold: null,
      emphasis: { label: {} }
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
      data: [
        {
          value: [1, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [2, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [3, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [4, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [5, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [6, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [7, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [8, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [9, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [10, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [11, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [12, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [13, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [14, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [15, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [16, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [17, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [18, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [19, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [20, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [21, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [22, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [23, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [24, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [25, 100, 1],
          itemStyle: { color: "cyan" },
          symbol: "triangle",
          symbolSize: 15
        },
        {
          value: [26, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [27, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [28, 99, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [29, 90, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [30, 97, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [31, 90, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [32, 93, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [33, 100, 0],
          itemStyle: { color: "lime" },
          symbol: "circle",
          symbolSize: 5
        },
        {
          value: [34, 95, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [35, 93, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [36, 92, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [37, 86, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [38, 80, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [39, 89, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [40, 94, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [41, 88, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [42, 79, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [43, 79, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [44, 74, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [45, 66, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [46, 70, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [47, 63, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [48, 60, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        },
        {
          value: [49, 66, 2],
          itemStyle: { color: "red" },
          symbol: "diamond",
          symbolSize: 10
        }
      ],
      zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: true,
      hoverAnimation: true,
      clip: true,
      label: { position: "top" },
      lineStyle: { width: 2, type: "solid" },
      step: false,
      smoothMonotone: null,
      symbolRotate: null,
      showSymbol: true,
      showAllSymbol: "auto",
      connectNulls: false,
      animationEasing: "linear",
      progressive: 0,
      hoverLayerThreshold: null,
      emphasis: { label: {} }
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
      data: [
        [1, 50],
        [2, 50],
        [3, 50],
        [4, 50],
        [5, 50],
        [6, 50],
        [7, 50],
        [8, 50],
        [9, 50],
        [10, 50],
        [11, 50],
        [12, 50],
        [13, 50],
        [14, 50],
        [15, 50],
        [16, 50],
        [17, 50],
        [18, 50],
        [19, 50],
        [20, 50],
        [21, 50],
        [22, 50],
        [23, 50],
        [24, 50],
        [25, 50],
        [26, 50],
        [27, 50],
        [28, 50],
        [29, 50],
        [30, 50],
        [31, 50],
        [32, 50],
        [33, 50],
        [34, 50],
        [35, 50],
        [36, 50],
        [37, 50],
        [38, 50],
        [39, 50],
        [40, 50],
        [41, 50],
        [42, 50],
        [43, 50],
        [44, 50],
        [45, 50],
        [46, 50],
        [47, 50],
        [48, 50],
        [49, 50]
      ],
      zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: true,
      hoverAnimation: true,
      clip: true,
      label: { position: "top" },
      lineStyle: { width: 2, type: "solid" },
      step: false,
      smoothMonotone: null,
      symbolSize: 4,
      symbolRotate: null,
      showSymbol: true,
      showAllSymbol: "auto",
      connectNulls: false,
      animationEasing: "linear",
      progressive: 0,
      hoverLayerThreshold: null,
      emphasis: { label: {} }
    },
    {
      name: "Overcoat",
      type: "line",
      smooth: false,
      stack: "OC",
      symbol: "none",
      sampling: "average",
      itemStyle: { color: "green" },
      data: [
        [1, 100],
        [2, 100],
        [3, 100],
        [4, 100],
        [5, 100],
        [6, 100],
        [7, 100],
        [8, 100],
        [9, 100],
        [10, 100],
        [11, 100],
        [12, 100],
        [13, 100],
        [14, 100],
        [15, 100],
        [16, 100],
        [17, 100],
        [18, 100],
        [19, 100],
        [20, 100],
        [21, 100],
        [22, 100],
        [23, 100],
        [24, 100],
        [25, 100],
        [26, 100],
        [27, 100],
        [28, 100],
        [29, 100],
        [30, 100],
        [31, 100],
        [32, 100],
        [33, 100],
        [34, 100],
        [35, 100],
        [36, 100],
        [37, 100],
        [38, 100],
        [39, 100],
        [40, 100],
        [41, 100],
        [42, 100],
        [43, 100],
        [44, 100],
        [45, 100],
        [46, 100],
        [47, 100],
        [48, 100],
        [49, 100]
      ],
      markLine: {
        silent: true,
        data: [
          [
            {
              coord: [11, 120],
              label: {
                formatter: "2x100 mm overcoat",
                position: "insideMiddleTop"
              },
              emphasis: { label: {} }
            },
            { coord: [43, 120], label: {}, emphasis: { label: {} } }
          ]
        ],
        label: {},
        emphasis: { label: {} }
      },
      zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: true,
      hoverAnimation: true,
      clip: true,
      label: { position: "top" },
      lineStyle: { width: 2, type: "solid" },
      step: false,
      smoothMonotone: null,
      symbolSize: 4,
      symbolRotate: null,
      showSymbol: true,
      showAllSymbol: "auto",
      connectNulls: false,
      animationEasing: "linear",
      progressive: 0,
      hoverLayerThreshold: null,
      emphasis: { label: {} }
    },
    {
      name: "Custom Sections",
      type: "line",
      smooth: false,
      stack: "CS",
      symbol: "none",
      sampling: "average",
      itemStyle: { color: "grey" },
      markLine: {
        silent: true,
        data: [
          {
            xAxis: 5,
            label: {
              formatter: "Port 1",
              position: "insideStartBottom",
              distance: 70
            },
            emphasis: { label: {} }
          },
          {
            xAxis: 15,
            label: {
              formatter: "Port 2",
              position: "insideStartBottom",
              distance: 70
            },
            emphasis: { label: {} }
          },
          {
            xAxis: 25,
            label: {
              formatter: "Port 3",
              position: "insideStartBottom",
              distance: 70
            },
            emphasis: { label: {} }
          },
          {
            xAxis: 35,
            label: {
              formatter: "Port 4",
              position: "insideStartBottom",
              distance: 70
            },
            emphasis: { label: {} }
          },
          {
            xAxis: 45,
            label: {
              formatter: "",
              position: "insideStartBottom",
              distance: 70
            },
            emphasis: { label: {} }
          }
        ],
        label: {},
        emphasis: { label: {} }
      },
      zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: true,
      hoverAnimation: true,
      clip: true,
      label: { position: "top" },
      lineStyle: { width: 2, type: "solid" },
      step: false,
      smoothMonotone: null,
      symbolSize: 4,
      symbolRotate: null,
      showSymbol: true,
      showAllSymbol: "auto",
      connectNulls: false,
      animationEasing: "linear",
      progressive: 0,
      hoverLayerThreshold: null,
      emphasis: { label: {} }
    }
  ],
  visualMap: [
    {
      type: "piecewise",
      show: false,
      dimension: 0,
      seriesIndex: 4,
      pieces: [{ gt: 11, lt: 43, color: "rgba(0, 180, 0, 0.5)" }],
      zlevel: 0,
      z: 4,
      min: 0,
      max: 200,
      inRange: { color: ["#006edd", "#e0ffff"] },
      outOfRange: { color: ["rgba(0,0,0,0)"] },
      left: 0,
      right: null,
      top: null,
      bottom: 0,
      itemWidth: 20,
      itemHeight: 14,
      inverse: false,
      orient: "vertical",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      contentColor: "#5793f3",
      inactiveColor: "#aaa",
      borderWidth: 0,
      padding: 5,
      textGap: 10,
      precision: 0,
      color: null,
      formatter: null,
      text: null,
      textStyle: { color: "#333" },
      selected: { "0": true },
      minOpen: false,
      maxOpen: false,
      align: "auto",
      itemSymbol: "roundRect",
      pieceList: null,
      categories: null,
      splitNumber: 5,
      selectedMode: "multiple",
      itemGap: 10,
      hoverLink: true,
      showLabel: null,
      target: {
        inRange: { color: ["#006edd", "#e0ffff"] },
        outOfRange: { color: ["rgba(0,0,0,0)"] }
      },
      controller: {
        inRange: {
          color: ["#006edd", "#e0ffff"],
          symbol: ["roundRect"],
          symbolSize: [20, 20]
        },
        outOfRange: {
          color: ["rgba(0,0,0,0)"],
          symbol: ["roundRect"],
          symbolSize: [20, 20]
        }
      }
    }
  ],
  legend: [
    {
      data: [
        "Section ML",
        "Section A",
        "Section B",
        "Sensor Range",
        "Overcoat",
        "Custom Sections"
      ],
      bottom: "45",
      zlevel: 0,
      z: 4,
      show: true,
      orient: "horizontal",
      left: "center",
      top: null,
      align: "auto",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      inactiveColor: "#ccc",
      inactiveBorderColor: "#ccc",
      itemStyle: { borderWidth: 0 },
      textStyle: { color: "#333" },
      selectedMode: true,
      selector: false,
      selectorLabel: {
        show: true,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: " sans-serif",
        color: "#666",
        borderWidth: 1,
        borderColor: "#666"
      },
      emphasis: {
        selectorLabel: { show: true, color: "#eee", backgroundColor: "#666" }
      },
      selectorPosition: "auto",
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: { show: false },
      selected: {}
    }
  ],
  markArea: [
    {
      zlevel: 0,
      z: 1,
      tooltip: { trigger: "item" },
      animation: false,
      label: { show: true, position: "top" },
      itemStyle: { borderWidth: 0 },
      emphasis: { label: { show: true, position: "top" } }
    }
  ],
  markLine: [
    {
      zlevel: 0,
      z: 5,
      symbol: ["circle", "arrow"],
      symbolSize: [8, 16],
      precision: 2,
      tooltip: { trigger: "item" },
      label: { show: true, position: "end", distance: 5 },
      lineStyle: { type: "dashed" },
      emphasis: { label: { show: true }, lineStyle: { width: 3 } },
      animationEasing: "linear"
    }
  ],
  markPoint: [
    {
      zlevel: 0,
      z: 5,
      symbol: "pin",
      symbolSize: 50,
      tooltip: { trigger: "item" },
      label: { show: true, position: "inside" },
      itemStyle: { borderWidth: 2 },
      emphasis: { label: { show: true } }
    }
  ],
  marker: [],
  brush: [],
  dataZoom: [
    {
      type: "inside",
      zlevel: 0,
      z: 4,
      orient: "horizontal",
      xAxisIndex: [0],
      yAxisIndex: [],
      filterMode: "filter",
      throttle: 100,
      start: 60.2442596869052,
      end: 74.32982341992155,
      startValue: 29,
      endValue: 36,
      minSpan: null,
      maxSpan: null,
      minValueSpan: null,
      maxValueSpan: null,
      rangeMode: null,
      disabled: false,
      zoomLock: false,
      zoomOnMouseWheel: true,
      moveOnMouseMove: true,
      moveOnMouseWheel: false,
      preventDefaultMouseMove: true,
      zAxisIndex: [],
      radiusAxisIndex: [],
      angleAxisIndex: [],
      singleAxisIndex: []
    },
    {
      type: "slider",
      zlevel: 0,
      z: 4,
      orient: "horizontal",
      xAxisIndex: [0],
      yAxisIndex: [],
      filterMode: "filter",
      throttle: 100,
      start: 60.2442596869052,
      end: 74.32982341992155,
      startValue: 29,
      endValue: 36,
      minSpan: null,
      maxSpan: null,
      minValueSpan: null,
      maxValueSpan: null,
      rangeMode: null,
      show: true,
      right: "ph",
      top: "ph",
      width: "ph",
      height: "ph",
      left: null,
      bottom: null,
      backgroundColor: "rgba(47,69,84,0)",
      dataBackground: {
        lineStyle: { color: "#2f4554", width: 0.5, opacity: 0.3 },
        areaStyle: { color: "rgba(47,69,84,0.3)", opacity: 0.3 }
      },
      borderColor: "#ddd",
      fillerColor: "rgba(167,183,204,0.4)",
      handleIcon:
        "M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",
      handleSize: "100%",
      handleStyle: { color: "#a7b7cc" },
      labelPrecision: null,
      labelFormatter: null,
      showDetail: true,
      showDataShadow: "auto",
      realtime: true,
      zoomLock: false,
      textStyle: { color: "#333" },
      zAxisIndex: [],
      radiusAxisIndex: [],
      angleAxisIndex: [],
      singleAxisIndex: []
    }
  ]
};
