import moment from "moment";
import React from "react";

const DashboardUser = () => {
  return (
    <div>
      <h1 className="text-black text-2xl mx-6">สรุปรายรับ/รายจ่าย (ประจำวัน) งวด 3/3 </h1>
      <div className="flex flex-col md:flex-row gap-4 text-gray-900 mt-5 m-4">
        <div className="w-full bg-blue-700 hover:bg-blue-500 mx-2 px-4 py-4 rounded-lg">
          <h2 className="text-3xl text-white">177,069</h2>
          <hr className="mt-2 border-gray-500" />
          <div className="flex flex-col mt-3 text-white gap-4 items-end">
            <p>[ยอดส่ง + หักรับ + ค่าดูแล]</p>
            <h3 className="text-xl">รายรับรวม</h3>
          </div>
        </div>

        <div className="w-full bg-yellow-700 hover:bg-yellow-500 mx-2 px-4 py-4 rounded-lg">
          <h2 className="text-3xl ">176,920</h2>
          <hr className="mt-2 border-gray-500" />
          <div className="flex flex-col mt-3  gap-4 items-end">
            <p>[ยอดรับ + เงินแถม]</p>
            <h3 className="text-xl">รายจ่ายรวม</h3>
          </div>
        </div>
        <div className="w-full bg-green-700 hover:bg-green-500 mx-2 px-4 py-4 rounded-lg text-white">
          <h2 className="text-3xl ">+149</h2>
          <hr className="mt-2 border-gray-500" />
          <div className="flex flex-col mt-3  gap-4 items-end">
            <p>[รายรับรวม - รายจ่ายรวม]</p>
            <h3 className="text-xl">สรุปยอด</h3>
          </div>
        </div>
      </div>

      <small className="text-black flex justify-end text-sm">
        {" "}
        ข้อมูล ณ วันที่ {moment().format("DD-M-YYYY")}
      </small>
    </div>
  );
};

export default DashboardUser;
