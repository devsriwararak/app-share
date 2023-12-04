import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const ViewMember = ({ open, handleOpen, id, dataToModal }) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const options2 = [
    { value: "บิดดอกตาม", label: "บิดดอกตาม" },
    { value: "ดอกตาม", label: "ดอกตาม" },
    { value: "ขั้นบันได", label: "ขั้นบันได" },
    { value: "บิดลดต้น (ลดต้นงวดถัดไป)", label: "บิดลดต้น (ลดต้นงวดถัดไป)" },
    { value: "บิดลดต้น (ลดต้นงวดที่บิด)", label: "บิดลดต้น (ลดต้นงวดที่บิด)" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Dialog open={open} size="md" handler={handleOpen}>
      <DialogHeader className="bg-gray-200 flex gap-2 rounded-lg">
        <HiOutlineDesktopComputer /> ข้อมูลพนักงาน : {dataToModal?.code}
      </DialogHeader>
      <DialogBody className=" py-10 h-96 overflow-scroll md:h-full md:overflow-auto ">

        <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
            <b className=" font-semibold text-black">รหัส : </b>
            <span className="text-black">{dataToModal?.code}</span>
          </div>
          <div className="w-full">
            <b className=" font-semibold text-black" >ชื่อ : </b>
            <span className="text-black">{dataToModal?.f_name}</span>
          </div>
          <div className="w-full">
            <b className=" font-semibold text-black">สกุล : </b>
            <span className="text-black">{dataToModal?.l_nane}</span>
          </div>
        
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="w-full">
            <b className=" font-semibold text-black" >username : </b>
            <span className="text-black">{dataToModal?.username}</span>
          </div>
          <div className="w-full">
            <b className=" font-semibold text-black">เบอร์โทรศัพท์ : </b>
            <span className="text-black">{dataToModal?.tel}</span>
          </div>
          <div className="w-full">
            <b className=" font-semibold text-black">line ID  : </b>
            <span className="text-black">{dataToModal?.line}</span>
          </div>
        </div>

        <div className="w-full mt-4">
            <b className=" font-semibold text-black">ที่อยู่  : </b>
            <span className="text-black">{dataToModal?.address}</span>
          </div>

 


        <div className="flex justify-end mt-4">
          <Button onClick={() => handleOpen()} color="gray">
            ออก
          </Button>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default ViewMember;

