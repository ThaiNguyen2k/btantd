import { Tooltip } from "antd";
import React, { PureComponent } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import styled from "styled-components";

const data = [
  {
    day: "05-01",
    temperature: [-1, 10],
  },
  {
    day: "05-02",
    temperature: [2, 15],
  },
  {
    day: "05-03",
    temperature: [3, 12],
  },
  {
    day: "05-04",
    temperature: [4, 12],
  },
  {
    day: "05-05",
    temperature: [12, 16],
  },
  {
    day: "05-06",
    temperature: [5, 16],
  },
  {
    day: "05-07",
    temperature: [3, 12],
  },
  {
    day: "05-08",
    temperature: [0, 8],
  },
  {
    day: "05-09",
    temperature: [-3, 5],
  },
];

const StyleChart = styled.div`
  border: 5px solid #f3fdff;
  width: 50%;
  height: 531px;
`;
const Chart = () => {
  return (
    <StyleChart>
      <h1>Money Allocation</h1>
      <BarChart
        width={730}
        height={250}
        data={data}
      >
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="temperature" fill="#8884d8" />
      </BarChart>
    </StyleChart>
  );
};

export default Chart;
