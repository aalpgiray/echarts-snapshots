import React, { FC } from "react";
import { ChartTubnail } from "./ChartTubnail";
import { IBasicChartMeta } from "./IBasicChartMeta";

export const ChartThumbnails: FC<
  {
    charts: IBasicChartMeta[];
    selectedChartId?: string;
    onSelect?: (chartId: string) => void;
  } & Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "onSelect"
  >
> = ({ charts, selectedChartId, onSelect, ...divProps }) => {
  return (
    <div {...divProps}>
      <div>
        <b
          style={{
            display: "block",
            paddingBottom: "4px",
            background: "#f5f5f5",
            width: "154px",
            textAlign: "center",
            borderRadius: "4px 4px 0 0"
          }}
        >
          Available Charts
        </b>
        <div
          style={{
            display: "flex",
            gridGap: "8px",
            padding: "8px",
            background: "#f5f5f5",
            borderRadius: "0 4px 4px 4px",
            height: "56px"
          }}
        >
          {charts.map(({ id, thumbnailUrl, name }) => (
            <ChartTubnail
              chartMeta={{ id, thumbnailUrl, name }}
              key={id}
              selected={id === selectedChartId}
              onClick={onSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartThumbnails;
