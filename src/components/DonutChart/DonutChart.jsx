import React from "react";
import { Circle } from "rc-progress";
export default function DonutChart({ data }) {
  return (
    <div className="DonutChart">
      <Circle
        percent={(data.value / data.total) * 100}
        strokeColor="#0598fa"
        strokeWidth={10}
        trailColor="#5c0af5"
        trailWidth={10}
        className="circular-bar"
      ></Circle>
    </div>
  );
}
