/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Bar } from "react-chartjs-2";

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    datalabels: {
      color: "white",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

interface Dataset {
  legend: string; // This can serve as the legend
  labels: string[]; // Define your X-axis data here
  values: number[]; // Define your Y-axis data here
  backgroundColor?: string;
}

interface BarChartProps {
  dataset: Dataset; // Single dataset
  options?: any;
}

const BarChart: React.FC<BarChartProps> = ({ dataset, options }) => {
  const data = {
    labels: dataset.labels,
    datasets: [
      {
        label: dataset.legend,
        data: dataset.values,
        backgroundColor: dataset.backgroundColor || "#4dc9f6",
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options || defaultOptions} />
    </div>
  );
};

export default BarChart;
