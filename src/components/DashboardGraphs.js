import "../App.css";
import React from "react";

import { PieChart, Pie, Tooltip } from "recharts";
import { Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { ComposedChart, Line, Area, Scatter } from "recharts";

export const DashboardGraphs = () => {
  const data = [
    { name: "Project A", value: 400 },
    { name: "Project B", value: 800 },
    { name: "Project C", value: 500 },
    { name: "Project D", value: 900 },
    { name: "Project E", value: 300 },
    { name: "Project F", value: 700 },
  ];

  const data2 = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];

  return (
    <>
      <div className="col-md-5 col-sm-12 col-md-offset-1">
        <PieChart
          width={400}
          height={400}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>

      <div className="col-md-5 col-sm-12 ">
        {/* <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          style={{ top: "25px" }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Usage" fill="#000" background={{ fill: "#eee" }} />
        </BarChart> */}
        <ComposedChart
          width={500}
          height={400}
          data={data2}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          style={{ top: "25px" }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </div>
    </>
  );
};
