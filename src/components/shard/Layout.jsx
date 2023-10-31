import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  const [openSidebar , setOpenSideBar] = useState(window.innerWidth >= 768)

  useEffect(()=>{
    const handleResize = () => {
      setOpenSideBar(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen  overflow-hidden">
      <Sidebar openSidebar={openSidebar} setOpenSideBar={setOpenSideBar} />
      <div className="flex-1">
        <Header setOpenSideBar={setOpenSideBar} openSidebar={openSidebar} />
        <div className="p-4">
          <div>{<Outlet />}</div>
        </div>
      </div>
      
    </div>
  );
};

export default Layout;