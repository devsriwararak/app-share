import React, { useContext, useEffect, useState } from "react";
import { AiOutlineEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContent } from "../../auth/AuthWrapper";
import toast, { Toaster } from "react-hot-toast";

const Login = ({ setToken }) => {
  const [dataLogin, setDataLogin] = useState({});
  const navigate = useNavigate();
  // const {setToken} = useContext(AuthContent)

  const handleChange = (e) => {
    setDataLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const setTokenData = 123456;

    if(dataLogin?.username === "admin1") {
       setToken(setTokenData),
      localStorage.setItem("Token", setTokenData),
      navigate('/admin')
    }else {
      toast.error("รหัสผ่านไม่ถูกต้อง !!");

    }

      
  };

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center ">

        <Toaster position="top-right" reverseOrder={false} />
        
        {/* Container */}
        <div className="p-5 bg-gray-200 flex rounded-2xl shadow-lg max-w-5xl border border-gray-200 py-16">
          {/* form */}
          <div className="sm:w-1/2 px-10 flex flex-col justify-center   ">
            <h2 className="font-bold text-2xl text-purple-800">เข้าสู่ระบบ</h2>
            <p className="text-sm mt-4">รายละเอียดด เดี๋ยวค่อยใส่</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border focus:ring-gray-200"
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => handleChange(e)}
              />
              <div className="relative">
                <input
                  className="p-2  rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => handleChange(e)}
                />
                <AiOutlineEye
                  className="absolute top-1/2 right-3 -translate-y-1/2  "
                  size={20}
                />
              </div>
              <button
                type="submit"
                className=" bg-purple-700 text-white rounded-xl py-2 hover:scale-105 duration-300"
              >
                เข้าสู่ระบบ
              </button>
            </form>

            <div className="mt-5 grid grid-cols-3 items-center">
              <hr className="border-gray-300" />
              <p className="text-center text-gray-400">หรือ</p>
              <hr className="border-gray-300" />
            </div>

            <Link to="/register">
              <button className=" w-full  text-purple-700 border border-purple-700 font-bold rounded-xl py-2 hover:scale-105 duration-300 mt-5">
                สมัครสมาชิก
              </button>
            </Link>

            <ul className="mt-4">
              <li>- MAIN ADMIN : admin1 / 1234</li>
              <li>- ADMIN : admin2 / 1234</li>
              <li>- บ้านแชร์ A-001 : member / 1234</li>
              <li>- พนักงานในบ้านแชร์ A-001 : memberwork / 1234</li>
              <li>- ลูกค้า : user / 1234</li>
            </ul>
          </div>

          {/* image */}
          <div className="w-1/2 hidden sm:block md:flex justify-center px-5  ">
            <img
              src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&q=80&w=1431&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-2xl object-cover w-auto    "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
