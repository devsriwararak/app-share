import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { HiOutlineHeart, HiOutlineUserAdd } from "react-icons/hi";
import Select from "react-select";
import { toast } from "react-toastify";

const TABLE_HEAD = ["ลำดับ", "บ้านแร์", "วงค์แชร์", "สถานะ"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

const AddToWongShare = () => {
  const [btnDisable, setBtnDisable] = useState(true);
  const [data, setData] = useState({});

  const options = [
    { value: "", label: "ไม่เลือก" },
    { value: "บ้านแชร์-001", label: "บ้านแชร์-001" },
    { value: "บ้านแชร์-002", label: "บ้านแชร์-002" },
  ];

  const options2 = [
    { value: "วงค์-001", label: "วงค์-001" },
    { value: "วงค์-002", label: "วงค์-002" },
    { value: "วงค์-003", label: "วงค์-003" },
    { value: "วงค์-004", label: "วงค์-004" },
  ];

  const handleChange_1 = (e) => {
    const text = e.value;
    if (text === "") {
      setBtnDisable(true);
      setData({});
    } else {
      setBtnDisable(false);
      setData((prev) => ({
        ...prev,
        home: text,
      }));
    }
  };

  const handleChange_2 = (e) => {
    const text = e.value;
    setData((prev) => ({
      ...prev,
      wong: text,
    }));
  };

  const handleAddWong = () => {
    toast.success("บันทึกสำเร็จ ");
  };

  return (
    <div>
      <div className="grid grid-rows-1 md:grid-cols-2 gap-4 ">
        <div>
          <Card className="m-4 ring-1 ring-gray-300 shadow-lg">
            <CardBody>
              <h2 className="text-lg font-bold text-black flex items-center gap-2">
                <HiOutlineUserAdd />
                ขอเข้าวงค์แชร์
              </h2>
              <div className="grid grid-rows-1 md:grid-cols-2 gap-4 mt-8">
                <Select
                  options={options}
                  placeholder="เลือกบ้านแชร์"
                  onChange={(e) => handleChange_1(e)}
                />
                <Select
                  isDisabled={btnDisable}
                  options={options2}
                  placeholder="เลือกวงค์แชร์"
                  onChange={(e) => handleChange_2(e)}
                />
              </div>

              <div className="grid grid-rows-1 md:grid-cols-2 gap-4 mt-8">
                <div>
                  <b>ชื่อบ้านแชร์ : </b> <span> {data.home} </span>
                </div>
                <div>
                  <b>ชื่อวงค์แชร์ : </b> <span> {data.wong} </span>
                </div>
              </div>

              <div className="grid grid-rows-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <b>รูปแบบวงค์แชร์ : </b> <span>{data.home}</span>
                </div>
                <div>
                  <b>จำนวนเงินต้น : </b> <span>{data.wong}</span>
                </div>
              </div>

              <div className="grid grid-rows-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <b>ค่าดูแลวงค์ : </b> <span>{data.home}</span>
                </div>
                <div>
                  <b>จำนวนมือ : </b> <span>{data.wong}</span>
                </div>
              </div>

              <div className="mt-4">
                <b>หมายเหตุ : </b> <span>{data.home}</span>
              </div>

              <div className="flex justify-end mt-5">
                <Button color="purple" variant="filled" onClick={handleAddWong} disabled={!data.wong}>
                  เข้าร่วม
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="m-4  ring-1 ring-gray-300 shadow-lg">
            <CardBody>
              <div className="flex justify-between ">
                <h2 className="text-lg font-bold text-black flex items-center gap-2 w-full ">
                  <HiOutlineHeart />
                  วงค์แชร์ของฉัน
                </h2>
                <Input
                  label="ค้นหารหัส หรือ วงค์แชร์"
                  color="purple"
                  className="w-full "
                />
              </div>

              <table className="w-full min-w-max table-auto text-center mt-4">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map(({ name, job, date }, index) => (
                    <tr key={name} className="even:bg-blue-gray-50/50">
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {job}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          Edit
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddToWongShare;
