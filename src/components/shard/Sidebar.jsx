import React, { useEffect } from "react";
import { FaBeer } from "react-icons/fa";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/consts/Navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";

const linkClasses =
  "flex item-center gap-2 font-light px-3 py-2 hover:bg-purple-500 hover:text-white  rounded-sm ";

const Sidebar = ({openSidebar, setOpenSideBar}) => {



  
  return (
    <div className={openSidebar ? "flex flex-col bg-white  md:w-60 p-3 text-white shadow-md border border-r-2  " : "hidden"}  >
      
      <div className="flex items-center gap-2 px-1 py-2 justify-center ">
        <FaBeer fontSize={24} color="purple" />
        <span className="text-gray-700 font-bold text-lg">APP-SHARE</span>
      </div>

      <div className="flex-1 py-5 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item}  >
            {item.label}
          </SidebarLink>
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-gray-400">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        
        <div className={classNames('text-red-500 cursor-pointer', linkClasses)}>
            <span className="text-xl">
                <HiOutlineLogout/>
            </span>
            Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "bg-purple-400 " : "text-gray-700",
        linkClasses
      )}

      
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
