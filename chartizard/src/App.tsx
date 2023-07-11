// import React from 'react';
import BarChart from "./components/BarChart";
import Dashboard from "./components/Dashboard";
import "./App.css";

const COLORS = [
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
];

function App() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const datasets = [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: COLORS[0],
    },
    {
      label: "Dataset 2",
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: COLORS[2],
    },
  ];
  const options = {
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

  return (
    <Dashboard totalPixelSize={600} numOfColumns={2} numOfRows={3}>
      <BarChart labels={labels} datasets={datasets} options={options} />
      <BarChart labels={labels} datasets={datasets} options={options} />
      <BarChart labels={labels} datasets={datasets} options={options} />
      <BarChart labels={labels} datasets={datasets} options={options} />
      {/* <BarChart labels={labels} datasets={datasets} options={options} /> */}
      {/* Add as many BarChart components as you need */}
    </Dashboard>
  );
}

export default App;
