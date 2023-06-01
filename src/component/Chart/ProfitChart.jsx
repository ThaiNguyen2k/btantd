import { Tooltip } from "antd";
import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const data = [
  {
    name: "Bank",
    uv: 75,
    fill: "#F3BA2F",
  },
  {
    name: "Token",
    uv: 40,
    fill: "#54C2C1",
  },
  {
    name: "Cash",
    uv: 70,
    fill: "#0F0F3F",
  },
  {
    name: "Stock",
    uv: 25,
    fill: "#9020E9",
  },
];


const StyleChart = styled.div`
  border: 5px solid #f3fdff;
  width: 50%;
  height: 531px;
`;
const ProfitChart = () => {
  return (
    <StyleChart>
      <h1>Profit</h1>
      <RadialBarChart
        width={830}
        height={350}
        innerRadius="50%"
        outerRadius="100%"
        data={data}
        startAngle={90}
        endAngle={450}
        barSize={100}
      >
        <RadialBar
          minAngle={15}
          background={{ fill: "#DEDEDE" }}
          clockWise={true}
          dataKey="uv"
        />
        <Legend
          iconSize={15}
          width={150}
          height={150}
          verticalAlign="middle"
          align="center"
          layout="horizontal"
        />
      </RadialBarChart>
    </StyleChart>
  );
};

export default ProfitChart;
