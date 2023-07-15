// import React from 'react';
// import BarChart from "./components/BarChart";
// import Dashboard from "./components/Dashboard";
// import "./App.css";
// import { useEffect, useState } from "react";

// const URL = "http://localhost:8000/dataset";

// function App() {
//   const [dataset, setDataset] = useState<Dataset | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(URL);
//       const data: Dataset = (await response.json()) as Dataset;
//       setDataset(data);
//     };
//     void fetchData();
//   }, []);

//   return (
//     <Dashboard totalPixelSize={600} numOfColumns={2} numOfRows={3}>
//       <BarChart
//         dataset={dataset || { legend: "", labels: [], values: [] }}
//         options={options}
//       />
//     </Dashboard>
//   );
// }

// import { MantineProvider, Text } from "@mantine/core";
// import {
//   AppShell,
//   Navbar,
//   Header,
//   useMantineTheme,
//   MediaQuery,
//   Burger,
// } from "@mantine/core";
// import { MainLinks } from "./components/Appshell/_main_links";
// import { User } from "./components/Appshell/_user";
import AppShell from "./components/Appshell/AppShell";
interface DashboardProps {
  name: string;
  icon: string;
}
const dashboards: DashboardProps[] = [
  {
    name: "Dashboard",
    icon: "test",
  },
];

function App() {
  return (
    <AppShell>
      <p>hi there</p>
    </AppShell>
  );
}

export default App;
