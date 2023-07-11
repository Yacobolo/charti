import React, { ReactNode } from "react";

interface DashboardProps {
  children: ReactNode;
  totalPixelSize: number;
  numOfColumns: number;
  numOfRows: number;
}

const Dashboard: React.FC<DashboardProps> = ({
  children,
  totalPixelSize,
  numOfColumns,
  numOfRows,
}) => {
  // Calculate the width and height of each cell
  const cellWidth = totalPixelSize / numOfColumns;
  const cellHeight = totalPixelSize / numOfRows;

  // Set the grid template columns and rows based on the number of columns and rows
  const gridTemplateColumns = `repeat(${numOfColumns}, ${cellWidth}px)`;
  const gridTemplateRows = `repeat(${numOfRows}, ${cellHeight}px)`;

  // Set the style of the dashboard
  const style = {
    display: "grid",
    gridTemplateColumns: gridTemplateColumns,
    gridTemplateRows: gridTemplateRows,
    gap: "20px",
  };

  return (
    <div className="dashboard" style={style}>
      {children}
    </div>
  );
};

export default Dashboard;
