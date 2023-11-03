import React, { useState } from "react";
import BasicHome from "./BasicComponent/BasicHome";
import BasicWong from "./BasicComponent/BasicWong";
import { Button } from "@material-tailwind/react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const Basic = () => {
  const [status, setStatus] = useState(1);
  return (
    <div className=" overflow-scroll w-[360px] md:w-full  ">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-b-2  ">
        <div className="flex flex-row justify-center md:justify-normal gap-4">
          <Button className="flex items-center gap-3 text-sm" size="sm"  onClick={() => setStatus(1)}>
            <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> <span>ข้อมูลบ้านแชร์</span>
          </Button>

          <Button className="flex items-center gap-3 text-sm" size="sm"  onClick={() => setStatus(2)}>
            <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> <span>ข้อมูลวงค์แชร์</span>
          </Button>

        </div>

        <div className="mt-5">
          {status === 1 && <BasicHome />}
          {status === 2 && <BasicWong />}
        </div>
      </div>
    </div>
  );
};

export default Basic;
