import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

const Layout = () => {

  const [openSidebar, setOpenSideBar] = useState(false);



  return (
    <div className="flex flex-row  h-screen w-screen overflow-hidden ">
      <Sidebar openSidebar={openSidebar} setOpenSideBar={setOpenSideBar} />

      <div className="flex-1 ">
        <Header openSidebar={openSidebar} setOpenSideBar={setOpenSideBar} />

        <Toaster position="top-right" reverseOrder={false} />

        <div className="p-4 bg-gray-200 w-full  ">
          <div>{<Outlet />}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

