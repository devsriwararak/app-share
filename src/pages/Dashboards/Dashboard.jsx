import React from "react";
import { Link } from "react-router-dom";
import DashboardStartGrid from "./DashboardStartGrid";
import TransactionChart from "./TransactionChart";
import BuyerProfileChart from "./BuyerProfileChart";

const Dashboard = () => {


  return (
    <>


      <div className="h-screen ">
      <h1 className="text-xl font-bold m-4">สวัสดีผู้ใช้งานสิทธิ์ : {localStorage.getItem('status')}  </h1>
        <div className="flex gap-4 w-full">
          <DashboardStartGrid />
        </div>

        <div className=" flex flex-col md:flex-row lg:flex-row gap-2 w-full ">
          <TransactionChart />
          <BuyerProfileChart />
        </div>

       
      </div>
    </>
  );
};

export default Dashboard;
