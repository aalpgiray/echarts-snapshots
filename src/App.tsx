import { Icon, Popover } from "antd";
import "antd/dist/antd.css";
import React from "react";
import Charts from "./Charts";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Popover placement="leftBottom" trigger="click" content={<Charts />}>
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            right: "16px",
            width: "40px",
            height: "40px",
            border: "3px solid gainsboro",
            background: "gainsboro",
            borderRadius: "4px",
            boxSizing: "border-box"
          }}
        >
          <Icon style={{ fontSize: "34px" }} type="area-chart" />
        </div>
      </Popover>
    </div>
  );
}
