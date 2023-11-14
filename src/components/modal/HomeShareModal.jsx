import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { HiOutlineHome } from "react-icons/hi";
import Select from "react-select";
import { BankList } from "../data/BankList";

const options = [
  { value: "", label: "เลือกธนาคารที่ต้องการ" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const HomeShareModal = ({ open, handleOpen }) => {
  return (
    <Dialog open={open} size="lg" handler={handleOpen} >
      <DialogHeader className="bg-gray-200 flex gap-2">
        {" "}
        <HiOutlineHome /> สร้างบ้านแชร์
      </DialogHeader>
      <DialogBody className=" py-10 h-96 overflow-scroll md:h-full md:overflow-auto  ">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Input color="purple" label="รหัสบ้านแชร์" required />
          <Input color="purple" label="ชื่อบ้านแชร์" required />
          <Input color="purple" label="ชื่อ-สกุล (ท้าวแชร์)" />
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-5">
          <Input color="red" label="Username" error required />
          <Input color="red" label="Password" error required />
          <Input color="red" label="รหัสเข้าสู่ระบบ" error required />
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-5">
          <div className=" w-full md:w-3/5">
            <Input color="purple" label="ที่อยู่ (ท้าวแชร์)" required />
          </div>
          <div className="w-full md:w-2/5">
            <Input color="purple" label="เบอร์โทร" required />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4  justify-center mt-5">
          {/* <Input color="purple" label="ชื่อธนาคาร" /> */}
          <Select  options={BankList} className="w-full  " placeholder="เลือกธนาคาร" />
          <Input color="purple" label="หมายเลขบัญชี" className="w-full" />
          <Input color="purple" label="ชื่อบัญชี" className="w-full" />
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-5">
          <div className="w-full md:w-2/5">
            <Input color="purple" label="Line ID" />
          </div>
          <div className=" w-full md:w-3/5">
            <Input color="purple" label="หมายเหตุ" />
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="gradient"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>ยกเลิก</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleOpen}>
          <span>บันทึก</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default HomeShareModal;
