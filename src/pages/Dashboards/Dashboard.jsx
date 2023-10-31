import React from "react";
import { Link } from "react-router-dom";
import DashboardStartGrid from "./DashboardStartGrid";
import TransactionChart from "./TransactionChart";
import BuyerProfileChart from "./BuyerProfileChart";

const Dashboard = () => {
  return (
    <>
      <div className="h-screen overflow-scroll">
        <div className="flex gap-4 w-full">
          <DashboardStartGrid />
        </div>

        <div className=" flex flex-col md:flex-row lg:flex-row gap-2 w-full container mx-auto justify-center">
          <TransactionChart />
          <BuyerProfileChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
