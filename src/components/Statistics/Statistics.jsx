import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const data = [
    { name: "A-1", mark: "59" },
    { name: "A-2", mark: "60" },
    { name: "A-3", mark: "60" },
    { name: "A-4", mark: "60" },
    { name: "A-5", mark: "60" },
    { name: "A-6", mark: "60" },
    { name: "A-7", mark: "60" },
    { name: "A-8", mark: "60" },
  ];
  return (
    <div>
      <div className="bg-violet-50 py-10">
        <h2 className="text-3xl text-center font-bold">My Assignment marks</h2>
      </div>
      <div className="container mx-auto flex h-96 items-center justify-center">
        <AreaChart
          width={380}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="mark"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
