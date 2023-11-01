import React from "react";
import { AiOutlineEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* Container */}
        <div className="p-5 bg-gray-200 flex rounded-2xl shadow-lg max-w-5xl border border-gray-200 py-16">
          {/* form */}
          <div className="sm:w-1/2 px-10 flex flex-col justify-center   ">
            <h2 className="font-bold text-2xl text-purple-800">สมัครสมาชิก</h2>
            <p className="text-sm mt-4">กำลังปรับปรุง !! </p>

            <form action="#" className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-2 justify-center items-center mt-4 ">
                <div className="">
                  <input
                    className="p-2 mt-2 rounded-xl border w-full  focus:ring-gray-200"
                    type="text"
                    name="username"
                    placeholder="Username"
                  />
                </div>

                <div className="relative ">
                  <input
                    className="p-2 w-full mt-2  rounded-xl border "
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <AiOutlineEye
                    className="absolute top-1/2 right-3  -translate-y-35   "
                    size={20}
                  />
                </div>
              </div>

              <input
                className="p-2 mt-2  rounded-xl border focus:ring-gray-200"
                type="text"
                name="username"
                placeholder="โทรศัพท์"
              />

              <button className=" bg-purple-700 text-white rounded-xl mt-4 py-2 hover:scale-105 duration-300">
                สมัครสมาชิก
              </button>
            </form>

            <div className="mt-5 grid grid-cols-3 items-center">
              <hr className="border-gray-300" />
              <p className="text-center text-gray-400">หรือ</p>
              <hr className="border-gray-300" />
            </div>

            <Link to="/login">
              <button className=" w-full  text-purple-700 border border-purple-700 font-bold rounded-xl py-2 hover:scale-105 duration-300 mt-5">
                เข้าสู่ระบบ
              </button>
            </Link>
          </div>

          {/* image */}
           <div className="w-1/2 hidden sm:block md:flex justify-center px-5  ">
            <img
              src="https://images.unsplash.com/photo-1489356395365-8ea69611f75a?auto=format&fit=crop&q=80&w=1631&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-2xl object-cover w-auto    "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
