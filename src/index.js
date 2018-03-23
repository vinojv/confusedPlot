import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

// render(<App />, document.getElementById('root'));

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];
class SimpleLineChart extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis yAxisId="0" orientation="left" />
          <YAxis yAxisId="1" orientation="right" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line yAxisId="0" dataKey="pv" stroke="#8884d8" />
          <circle r={4} x={34} y={200} fill={"red"} />
          <Line
            yAxisId="1"
            dataKey="uv"
            stroke="transparent"
            isAnimationActive={false}
            dot={{ stroke: "none", fill: "#ff7300", r: 6 }}
            activeDot={{ stroke: "none", fill: "#ff7300", r: 6 }}
          />
        </LineChart>
      </div>
    );
  }
}
class Test extends React.Component {
  render() {
    return (
      <svg width={200} height={200} style={{ background: "black" }}>
        <defs>
          <linearGradient id="legend-weather" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0" stop-color="#2c7bb6" />
            <stop offset="0.11111111111111109" stop-color="#00a1c9" />
            <stop offset="0.22222222222222218" stop-color="#00c4c1" />
            <stop offset="0.3333333333333333" stop-color="#69e1a8" />
            <stop offset="0.44444444444444436" stop-color="#cef88f" />
            <stop offset="0.5555555555555556" stop-color="#fcea73" />
            <stop offset="0.6666666666666666" stop-color="#f7bf47" />
            <stop offset="0.7777777777777778" stop-color="#f09227" />
            <stop offset="0.8888888888888887" stop-color="#e66118" />
            <stop offset="1" stop-color="#d7191c" />
          </linearGradient>
        </defs>
        <g transform="scale(0.8) translate(10, 10)">
          {[0, 1, 2].map(i => [
            <rect
              fill="white"
              x={`${0 * 100 / 3}%`}
              y={`${i * 100 / 3}%`}
              stroke="black"
              width={`${100 / 3}%`}
              height={`${100 / 3}%`}
            />,
            <rect
              x={`${1 * 100 / 3}%`}
              y={`${i * 100 / 3}%`}
              fill="white"
              stroke="black"
              width={`${100 / 3}%`}
              height={`${100 / 3}%`}
            />,
            <rect
              x={`${2 * 100 / 3}%`}
              y={`${i * 100 / 3}%`}
              fill="white"
              stroke="black"
              width={`${100 / 3}%`}
              height={`${100 / 3}%`}
            />
          ])}
        </g>
        <rect
          width={`10%`}
          height={`90%`}
          fill="url(#legend-weather)"
          x="90%"
          y="0"
        />
      </svg>
    );
  }
}
render(<Test />, document.getElementById("root"));
