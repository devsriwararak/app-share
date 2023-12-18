import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import React from "react";

const UserData = () => {
  return (
    <>
      <Card className="w-full mt-8 md:mt-0">
        <CardHeader className="flex justify-center py-2.5 bg-purple-400 text-white font-semibold">
          ข้อมูลลูกแชร์
        </CardHeader>
        <CardBody>
          <div className="flex-col ">
            <div>
              <b className="text-gray-800 ">รหัสลูกแชร์ :</b> <span>11111</span>
            </div>
            <div className="mt-3">
              <b className="text-gray-800">ชื่อ-สกุล :</b> <span>11111</span>
            </div>
            <div className="mt-3">
              <b className="text-gray-800">Username :</b> <span>11111</span>
            </div>
            <div className="mt-3">
              <b className="text-gray-800">เบอร์โทรศัพท์ :</b>{" "}
              <span>11111</span>
            </div>
            <div className="mt-3">
              <b className="text-gray-800">ที่อยู่ :</b> <span>11111</span>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className="w-full mt-8 md:mt-0">
        <CardHeader className="flex justify-center py-2.5 bg-purple-400 text-white font-semibold">
          วันที่กิจกรรม
        </CardHeader>

        <CardBody>1111</CardBody>
      </Card>

      <Card className="w-full mt-8 md:mt-0">
        <CardHeader className="flex justify-center py-2.5 bg-purple-400 text-white font-semibold">
          วันที่จบวงแชร์
        </CardHeader>

        <CardBody>1111</CardBody>
      </Card>
    </>
  );
};

export default UserData;
