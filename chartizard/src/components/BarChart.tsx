/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Bar } from "react-chartjs-2";

interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
}

interface BarChartProps {
  labels: string[];
  datasets: Dataset[];
  options?: any;
}

const BarChart: React.FC<BarChartProps> = ({ labels, datasets, options }) => {
  const data = {
    labels,
    datasets,
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
