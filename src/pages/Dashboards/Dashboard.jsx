import React from "react";
import { Link } from "react-router-dom";
import DashboardStartGrid from "./DashboardStartGrid";

const Dashboard = () => {
  return (
    <div className="flex gap-4">
      <DashboardStartGrid/>
    </div>
  );
};

export default Dashboard;
