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

import AppShell from "./components/Appshell/AppShell";

import { MantineProvider } from "@mantine/core";
import { SpotlightProvider } from "@mantine/spotlight";
import type { SpotlightAction } from "@mantine/spotlight";
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
} from "@tabler/icons-react";

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

const actions: SpotlightAction[] = [
  {
    title: "Home",
    description: "Get to home page",
    onTrigger: () => console.log("Home"),
    icon: <IconHome size="1.2rem" />,
  },
  {
    title: "Dashboard",
    description: "Get full information about current system status",
    onTrigger: () => console.log("Dashboard"),
    icon: <IconDashboard size="1.2rem" />,
  },
  {
    title: "Documentation",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
    icon: <IconFileText size="1.2rem" />,
  },
];

function App() {
  return (
    <MantineProvider>
      <SpotlightProvider
        actions={actions}
        searchIcon={<IconSearch size="1.2rem" />}
        searchPlaceholder="Search..."
        shortcut={["mod + P", "mod + K", "/"]}
        nothingFoundMessage="Nothing found..."
      >
        <AppShell>
          <p>hi there</p>
        </AppShell>
      </SpotlightProvider>
    </MantineProvider>
  );
}

export default App;
