import { Tooltip } from "antd";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import styled from "styled-components";

const data = [
  {
    name: "12:00",
    uv: 4000,
    pv: 55,
  },
  {
    name: "1:00",
    uv: 3000,
    pv: 40,
  },
  {
    name: "2:00",
    uv: 2000,
    pv: 65,
  },
  {
    name: "3:00",
    uv: 2780,
    pv: 35,
  },
  {
    name: "4:00",
    uv: 1890,
    pv: 75,
  },
  {
    name: "5:00",
    uv: 2390,
    pv: 50,
  },
  {
    name: "6:00",
    uv: 3490,
    pv: 70,
  },
  {
    name: "7:00",
    uv: 3000,
    pv: 90,
  },
  {
    name: "8:00",
    uv: 2000,
    pv: 30,
  },
  {
    name: "9:00",
    uv: 2780,
    pv: 65,
  },
  {
    name: "10:00",
    uv: 1890,
    pv: 40,
  },
  {
    name: "11:00",
    uv: 2390,
    pv: 50,
  },
];

const StyleLineChart = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  border: 5px solid #f3fdff;
`;
const StyleCenter = styled.h1`
  text-align: center;
`;
const color = styled.div`
  background: linear-gradient(90deg, #9747ff 0%, #14f4c9 107.68%);
  width: 10px;
`;

const Linechart = () => {
  return (
    <>
      <StyleCenter>Token Price</StyleCenter>
      <StyleLineChart>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#9747FF" />
              <stop offset={`107.68%`} stopColor="#14F4C9" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeWidth={1} vertical={false} stroke="#DEDEE7" />
          <XAxis
            tickLine={false}
            stroke="#DEDEE7"
            tick={{ fill: "#A4A4B3", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickCount={5}
            stroke="#DEDEE7"
            tick={{ fill: "#A4A4B3", fontSize: 12 }}
          />
          <Tooltip />
          <Legend />
          <Line
            strokeWidth={5}
            dot={false}
            type="monotone"
            dataKey="pv"
            stroke="url(#colorUv)"
            legendType="none"
            // color="red"
          />
        </LineChart>
      </StyleLineChart>
    </>
  );
};

export default Linechart;
