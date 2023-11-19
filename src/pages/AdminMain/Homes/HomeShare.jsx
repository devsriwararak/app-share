import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
  IconButton,
} from "@material-tailwind/react";
import Select from "react-select";
import HomeAdminModal from "../../../components/modal/HomeShare/HomeAdminModal";
import HomeMemberModal from "../../../components/modal/HomeShare/HomeMemberModal";

const HomeShare = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const TABLE_HEAD = ["Name", "Job", "Employed", ""];

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

  // Footer Table 1
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = TABLE_ROWS.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(TABLE_ROWS.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Modal
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen1 = () => setOpen1(!open1);
  const handleOpen2 = () => setOpen2(!open2);


  return (
    <>
      <HomeAdminModal handleOpen={handleOpen1} open={open1} />
      <HomeMemberModal handleOpen={handleOpen2} open={open2} />

      <Card className="mt-2 ">
        <CardBody className=" ">
          <div className="flex justify-between gap-4">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 w-1/2  md:w-8/12 "
            >
              ข้อมูลบ้านแชร์และพนักงาน (ทั้งหมด)
            </Typography>
            <div className="w-1/2 md:w-4/12">
              <Select options={options} placeholder="เลือกบ้านแชร์" />
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4">
        <div className="w-full">
          <Card className="mt-6 ">
            <CardBody>
              <div className="flex justify-between gap-4 items-center">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  ข้อมูลเจ้าของบ้านแชร์
                </Typography>
                <div className="flex-1">
                  <Input label="ค้นหาเจ้าของบ้านแชร์" />
                </div>
                <div className="">
                  <Button
                    onClick={handleOpen1}
                    className="text-sm"
                    size="sm"
                    color="purple"
                  >
                    เพิ่มเจ้าของบ้าน
                  </Button>
                </div>
              </div>

              <Card className="h-full w-full mt-6 overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
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
                      <tr key={index} className="even:bg-blue-gray-50/50">
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
              </Card>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                variant="outlined"
                size="sm"
                color="purple"
              >
                ก่อนหน้า
              </Button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <IconButton
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    variant="filled"
                    size="sm"
                    className={
                      currentPage == index + 1
                        ? "bg-purple-400"
                        : "bg-white text-black"
                    }
                  >
                    {index + 1}
                  </IconButton>
                ))}
              </div>
              <Button
                color="purple"
                onClick={() => handlePageChange(currentPage + 1)}
                variant="outlined"
                size="sm"
              >
                ถัดไป
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full">
          <Card className="mt-6 ">
            <CardBody>
              <div className="flex justify-between gap-4 items-center">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  ข้อมูลพนักงานบ้านแชร์
                </Typography>
                <div className="flex-1">
                  <Input label="ค้นหาเจ้าของบ้านแชร์" />
                </div>
                <div className="">
                  <Button onClick={handleOpen2} className="text-sm" size="sm" color="purple">
                    เพิ่มพนักงาน
                  </Button>
                </div>
              </div>

              <Card className="h-full w-full mt-6 overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
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
                      <tr key={index} className="even:bg-blue-gray-50/50">
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
              </Card>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                variant="outlined"
                size="sm"
                color="purple"
              >
                ก่อนหน้า
              </Button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <IconButton
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    variant="filled"
                    size="sm"
                    className={
                      currentPage == index + 1
                        ? "bg-purple-400"
                        : "bg-white text-black"
                    }
                  >
                    {index + 1}
                  </IconButton>
                ))}
              </div>
              <Button
                color="purple"
                onClick={() => handlePageChange(currentPage + 1)}
                variant="outlined"
                size="sm"
              >
                ถัดไป
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HomeShare;
