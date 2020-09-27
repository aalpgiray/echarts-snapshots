import React, { FC, useCallback, useMemo, useState, useRef } from "react";
import ReactEcharts from "echarts-for-react";
import ChartThumbnails from "./ChartThumbnails";
import ChartSnapshots from "./ChartSnapshots";
import { charts } from "./charts";
import { option } from "./option";
import { IChartSnapshot } from "./IChartSnapshot";

export const Charts: FC = () => {
  const [selectedChartId, setSelectedChartId] = useState<string>("1");
  const { snapshots, addSnapshot } = useSnapshots();
  const handleOnChartSelect = useCallback((chartId: string) => {
    setSelectedChartId(chartId);
  }, []);

  const selectedChart = useMemo(() => {
    return charts.find((chart) => chart.id === selectedChartId);
  }, [selectedChartId]);

  const chartRef = useRef<ReactEcharts>(null);

  const handleOnAddSnapshot = useCallback(() => {
    const echartsInstance = chartRef.current?.getEchartsInstance();

    addSnapshot({
      id: performance.now().toString(),
      option: echartsInstance.getOption(),
      name: "",
      thumbnailUrl: echartsInstance.getDataURL({
        pixelRatio: 0.2,
        backgroundColor: "#fff"
      })
    });
  }, [chartRef, addSnapshot]);

  return (
    <div
      style={{
        width: "80vh"
      }}
    >
      {selectedChart && (
        <ReactEcharts
          ref={chartRef}
          option={option}
          notMerge
          style={{ height: "400px" }}
        />
      )}
      <div style={{ display: "flex", gridGap: "16px" }}>
        <ChartSnapshots
          snapshots={snapshots}
          onAddSnapshot={handleOnAddSnapshot}
          style={{ flex: 1, overflow: "hidden" }}
        />
        <ChartThumbnails
          style={{ flex: 1, overflow: "hidden" }}
          selectedChartId={selectedChartId}
          charts={charts}
          onSelect={handleOnChartSelect}
        />
      </div>
    </div>
  );
};

export const useSnapshots = () => {
  const [snapshots, setSnapshots] = useState<IChartSnapshot[]>([]);

  const addSnapshot = useCallback((snapshot: IChartSnapshot) => {
    setSnapshots((_snaps) => [..._snaps, snapshot]);
  }, []);

  return { snapshots, addSnapshot };
};

export default Charts;
