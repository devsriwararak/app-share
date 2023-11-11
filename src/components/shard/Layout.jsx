import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useContext } from "react";
import { AuthContent } from "../../auth/AuthWrapper";

const Layout = () => {
  const [openSidebar, setOpenSideBar] = useState(false);
  const testData = useContext(AuthContent);

  if (!testData?.token) {
    return <Login setToken={testData?.setToken} />;
  }

  useEffect(() => {}, []);

  return (
    // <div className="flex flex-row  h-screen  w-screen overflow-y-scroll ">
    //   <Sidebar openSidebar={openSidebar} setOpenSideBar={setOpenSideBar} />

    //   <div className=" flex-1   ">
    //     <Header openSidebar={openSidebar} setOpenSideBar={setOpenSideBar} />

    //     <div className="p-4 bg-gray-200  pt-2 md:pt-24   ">
    //       <div>{<Outlet />}</div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="flex h-screen   ">
        <div className="   md:w-2/12  bg-gray-900 text-white    ">
          <Sidebar openSidebar={openSidebar} setOpenSideBar={setOpenSideBar} />
        </div>

        <div className=" w-10/12   text-white    ">
          <Header openSidebar={openSidebar} setOpenSideBar={setOpenSideBar} />

          <div className=" p-4 overflow-y-scroll pt-24   h-screen  w-full ">
            {<Outlet />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
