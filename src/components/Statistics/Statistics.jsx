import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: "A-1", mark: 59 },
    { name: "A-2", mark: 60 },
    { name: "A-3", mark: 60 },
    { name: "A-4", mark: 60 },
    { name: "A-5", mark: 60 },
    { name: "A-6", mark: 60 },
    { name: "A-7", mark: 60 },
    { name: "A-8", mark: 60 },
];



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
      <PieChart width={400} height={400}>
          <Pie
            dataKey="mark"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
