import React, { FC, useCallback } from "react";
import { Tooltip } from "antd";
import { AttachmentCard } from "./AttachmentCard";
import { IBasicChartMeta } from "./IBasicChartMeta";

export const ChartTubnail: FC<{
  chartMeta: IBasicChartMeta;
  selected?: boolean;
  onClick?: (chartId: string) => void;
}> = ({ selected = false, chartMeta, onClick }) => {
  const handleOnClick = useCallback(() => {
    if (onClick) {
      onClick(chartMeta.id);
    }
  }, [chartMeta, onClick]);

  return (
    <Tooltip trigger="hover" title={chartMeta.name}>
      <div
        onClick={handleOnClick}
        style={{
          flexGrow: 0,
          flexShrink: 0,
          width: "40px",
          height: "40px",
          overflow: "hidden",
          borderRadius: "2px",
          border: selected ? "2px solid #3280bd" : undefined,
          boxSizing: "border-box"
        }}
      >
        <AttachmentCard s3Source={chartMeta.thumbnailUrl} small />
      </div>
    </Tooltip>
  );
};

export default ChartTubnail;
