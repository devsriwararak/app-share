import React, { useEffect, useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";

import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
// import HomeShareModal from "../../../components/modal/HomeShareModal";
import {
  HiOutlineHome,
  HiOutlineChatAlt2,
  HiOutlinePlusCircle,
  HiPencilAlt,
  HiTrash,
  HiOutlineDesktopComputer,
  HiOutlinePlusSm,
} from "react-icons/hi";
import WongShareModal from "../../../components/modal/Basic/WongShareModal";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import ViewWongShare from "../../../components/modal/Basic/ViewWongShare";
import axios from "axios";

const TABLE_HEAD = [
  "ลำดับ",
  "ชื่อวงแชร์",
  "รูปแบบวงแชร์",
  "จำนวนมือ",
  "เงินต้น",
  "แก้ไข/ลบ",
];

const TABLE_ROWS = [
  {
    img: "/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "นาย",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-google.svg",
    name: "Google",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

const BasicWong = () => {
  const [id, setId] = useState(null);

  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const handleOpen = (number) => (setOpen(!open), setId(number));
  const handleOpenView = (number) => (setOpenView(!openView), setId(number));

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [dataToModal, setDataToModal] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_API}/share/share-search?name=${search}`
      );
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: `ต้องการลบ ID : ${id}`,
      text: "คุณต้องการที่จะลบข้อมูลนี้ จริงหรือไม่ ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "gray",
      confirmButtonText: "ลบ",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRow(id);
      }
    });
  };

  const deleteRow = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_APP_API}/share/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      console.log(res.data);
      toast.success("ลบข้อมูลสำเร็จ");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectToModal = (item) => {
    handleOpen(1);
    if (item.id) {
      setDataToModal(item);
    }
  };

  const handleViewModal = (item)=>{
    handleOpenView(3)
    setDataToModal(item)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <WongShareModal
        handleOpen={handleOpen}
        open={open}
        id={id}
        fetchData={fetchData}
        dataToModal={dataToModal}
      />
      <ViewWongShare handleOpen={handleOpenView} open={openView} id={id} dataToModal={dataToModal} />

      <div className="flex flex-col md:flex-row   items-center  md:justify-between gap-4">
        <div className="flex gap-2">
          <span>
            <HiOutlineChatAlt2 size={24} color="black" />
          </span>{" "}
          <span className="text-xl text-black font-bold">
            {" "}
            จัดการข้อมูลวงค์แชร์
          </span>
        </div>

        <div className="flex gap-2 flex-col items-center   md:flex-row">
          <div className="w-72 bg-slate-50 rounded-md  bg-gray-50  ">
            <Input
              variant="outlined"
              label="ค้นหาวงค์แชร์"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="">
            <Button
              onClick={() => (handleOpen(null), setDataToModal(null))}
              variant="filled"
              color="purple"
              size="sm"
              className="text-sm  flex items-center gap-1 "
            >
              <HiOutlinePlusSm size={20} />
              สร้างวงค์แชร์
            </Button>
          </div>
        </div>
      </div>

      <Card className=" h-[550px]  w-full mx-auto   md:w-full  mt-8 shadow-lg ">
        <CardBody className="  px-2 overflow-scroll -mt-4">
          <table className=" w-full  min-w-max table-auto text-center">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none opacity-90"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => {
                const isLast = index === data.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index} className="hover:bg-gray-200">
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.p_share_name}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.p_share_maintain}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.p_share_hand}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        0000
                      </Typography>
                    </td>

                    <td className={classes}>
                      <div className="flex justify-center  gap-2 ">
                        <HiOutlineDesktopComputer
                          size={24}
                          color="white"
                          className="cursor-pointer bg-gray-900 rounded-full w-8 h-8 p-1.5 "
                          onClick={() => handleViewModal(item) }
                        />
                        <HiPencilAlt
                          size={24}
                          color="white"
                          className="cursor-pointer bg-purple-500 rounded-full w-8 h-8 p-1.5 "
                          onClick={() => handleSelectToModal(item)}
                        />
                        <HiTrash
                          size={24}
                          color="white"
                          className="cursor-pointer bg-red-500 rounded-full w-8 h-8 p-1.5 "
                          onClick={() => handleDelete(item.id)}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
  );
};

export default BasicWong;
