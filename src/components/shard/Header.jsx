import { Popover, Transition, Menu } from "@headlessui/react";
import classNames from "classnames";
import React, { Fragment } from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
  HiOutlineMenu
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";


const Header = ({setOpenSideBar, openSidebar}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
     <HiOutlineMenu size={24} className="mr-4 cursor-pointer" onClick={()=>setOpenSideBar( ! openSidebar)}/>
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search"
          className="text-sm  focus:outline-none h-10 w-[10rem] md:w-[20rem] border border-gray-300 rounded-lg pl-11 pr-4  "
        />
      </div>
      <div className="flex items-center gap-2 mr-6">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-200",
                  "p-1.5 inline-flex items-center text-gray-700 hover:text-opacity-none active:bg-gray-100"
                )}
              >
                <HiOutlineChatAlt fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-e-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Messages
                    </strong>
                    <div className="mt-2">This is messages panel</div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-200",
                  "p-1.5 inline-flex items-center text-gray-700 hover:text-opacity-none active:bg-gray-100"
                )}
              >
                <HiOutlineBell fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-e-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Messages
                    </strong>
                    <div className="mt-2">This is messages panel</div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Menu as="div" className="relative ">
          <div>
            <Menu.Button className="ml-2 inline-flex rounded-full focus:ring-2 focus:ring-neutral-400 ">
              <span className="sr-only">Oprn user menu</span>
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/80x80?face")',
                }}
              >
                <span className="sr-only">Hi Jackson</span>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5  ">
              <Menu.Item className="">
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-gray-200",
                      "text-gray-800 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                    )}
                    onClick={() => navigate("/profile")}
                  >
                    ข้อมูลส่วนตัว
                  </div>
                )}
              </Menu.Item>
              <Menu.Item className="">
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-gray-200",
                      "text-gray-800 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                    )}
                    onClick={() => navigate("/setting")}
                  >
                    ตั้งค่า
                  </div>
                )}
              </Menu.Item>
              <Menu.Item className="">
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-gray-200",
                      "text-gray-800 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                    )}
                    onClick={() => navigate("/logout")}
                  >
                    ออกจากระบบ
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Header;