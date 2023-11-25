import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { HiOutlineUserAdd } from "react-icons/hi";
import MyWongHome from './MyWongHome'
import MyWongWong from './MyWongWong'
import MyWongActivity from './MyWongActivity'

const TABLE_HEAD = ["ลำดับ", "บ้านแชร์", "เลือก"];

const TABLE_ROWS = [
  {
    name: "1",
    job: "บ้านแชร์-001",
  },
  {
    name: "2",
    job: "บ้านแชร์-002",
  },
  {
    name: "3",
    job: "ไม่เลือก",
  },
];

const TABLE_ROWS_2 = [
    {
      name: "1",
      job: "วงค์ทดสอบ-001",
    },
    {
      name: "2",
      job: "วงค์ทดสอบ-002",
    },
    {
      name: "3",
      job: "ไม่เลือก",
    },
  ];

const MyWong = () => {
    const [data, setData] = useState({})
    const [showComponent , setShowComponent] = useState(1)

    const handleClick_1 =(index)=>{
        setData((prev)=>({
            ...prev,
            home :  index == 2 ? "" : TABLE_ROWS[index].job,
        }))
    }

    const handleClick_2 =(index)=>{
        setData((prev)=>({
            ...prev,
            wong :  index == 2 ? "" : TABLE_ROWS_2[index].job,
        }))
    }

    const HandleSelectBtn = (number)=>{
        setShowComponent(number)
    }

  return (
    <div>
      <div className="flex flex-col  md:flex-row gap-4">
        <div className="w-full md:w-3/12 ">
          <Card className="ring-1 ring-gray-200">
            <CardBody>
              <h2 className="text-lg font-bold text-black flex items-center gap-2">
                <HiOutlineUserAdd />
                บ้านแชร์ (2)
              </h2>

              <table className="w-full mt-5 table-auto text-left">
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
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                          onClick={()=>handleClick_1(index)}
                        >
                          เลือก
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <hr className="mt-8 border-gray-300 "/>

              <div className={ data.home ? "block overflow-x-scroll w-full" : "hidden"} >
              <h2 className="text-lg font-bold text-black flex items-center gap-2 mt-5">
                <HiOutlineUserAdd />
                วงค์แชร์ (4) 
                ({data.home})
              </h2>
              <table className=" mt-5 table-auto text-left " >
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
                  {TABLE_ROWS_2.map(({ name, job, date }, index) => (
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
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                          onClick={()=>handleClick_2(index)}
                        >
                          เลือก
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="w-full md:w-9/12 ">
          <Card className="ring-1 ring-gray-200">
            <CardBody>
                <div className="flex flex-col md:flex-row gap-4">
                    <Button color="green" onClick={()=>HandleSelectBtn(1)}>ข้อมูลบ้านแชร์</Button>
                    <Button color="blue" onClick={()=>HandleSelectBtn(2)}>ข้อมูลวงค์แชร์</Button>
                    <Button color="orange" onClick={()=>HandleSelectBtn(3)}>ข้อมูลกิจกรรม</Button>
                </div>

                <div className="mt-8">
                {showComponent === 1 && <MyWongHome data={data} />}
                {showComponent === 2 && <MyWongWong  data={data}/>}
                {showComponent === 3 && <MyWongActivity />}
                </div>

            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyWong;
