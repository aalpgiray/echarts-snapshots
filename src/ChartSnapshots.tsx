import React, { FC } from "react";
import { Button } from "antd";
import { IChartSnapshot } from "./App";

export const ChartSnapshots: FC<
  {
    snapshots: IChartSnapshot[];
    onAddSnapshot: () => void;
  } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ snapshots, onAddSnapshot, ...divProps }) => {
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
          Chart Snapshots
        </b>
        <div
          style={{
            display: "flex",
            gridGap: "8px",
            padding: "8px",
            background: "#f5f5f5",
            borderRadius: "0 4px 4px 4px",
            height: "56px",
            alignItems: "center"
          }}
        >
          <Button onClick={onAddSnapshot} type="primary">
            Add to Snapshots
          </Button>
          {snapshots.map((snap) => (
            <div
              key={snap.id}
              style={{
                flexGrow: 0,
                flexShrink: 0,
                width: "40px",
                height: "40px",
                border: "3px solid gainsboro",
                background: "gainsboro",
                borderRadius: "4px",
                boxSizing: "border-box"
              }}
            >
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%"
                }}
                src={snap.thumbnailUrl}
                alt={snap.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartSnapshots;
