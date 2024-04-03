import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logoimg.svg";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setConfirmPassword] = useState(false);

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <header>
        <div className="w-[15vw] sm:w-[80px] h-auto mt-14 mx-auto">
          <img src={Logo} className="w-[100%]" alt="Logo" />
        </div>
      </header>

      <section className="w-[85%] sm:w-[70%] md:w-[60%] h-auto flex flex-col border-t-2 border-indigo-500 rounded-md mt-14 mx-auto shadow-2xl	">
        <p className="text-15px mt-6 ml-5">
          {" "}
          <Link to={"/"}>
            <span className="text-[#4737FF] cursor-pointer">Home</span>
          </Link>{" "}
          / <span>Sign-up</span>
        </p>

        <h1 className="text-15px font-semibold mt-6 mx-5">Sign-up</h1>
        <p className="mx-5 mt-2">Register yourself to do something on Lidia.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center mt-7  mx-4">
          <div className="mx-1 mt-2">
            <label className="text-12px font-semibold">
              Full name
            </label>
            <input
              type="text"
              placeholder="Salina Alfianchi"
              className=" text-[15px] w-full py-2 px-3 mt-2 border-2 rounded hover:border-[blue] focus:outline-[blue]"
            />
          </div>
          <div className="mx-1 mt-2">
            <label className="text-12px font-semibold">
              NIK
            </label>
            <input
              type="text"
              placeholder="e.g. 1050241708900001"
              className="w-full text-[15px] py-2 px-3 mt-2 border-2 rounded hover:border-[blue] focus:outline-[blue]"
            />
          </div>
          <div className="mx-1 mt-2">
            <label className="text-12px font-semibold">
              Username
            </label>
            <input
              type="text"
              placeholder="e.g. alfianchii"
              className="w-full py-2 px-3 text-[15px] mt-2 border-2 rounded hover:border-[blue] focus:outline-[blue]"
            />
          </div>
          <div className="mx-1 mt-2">
            <label className="text-12px font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="alfian.ganteng@gmail.com"
              className="w-full py-2 px-3 text-[15px] mt-2 border-2 rounded hover:border-[blue] focus:outline-[blue]"
            />
          </div>
          <div className="mx-1 mt-2">
            <label className="text-12px font-semibold">
              Phone
            </label>
            <input
              type="text"
              placeholder="e. g. 082384673478"
              className="w-full py-2 px-3 text-[15px] mt-2 border-2 rounded hover:border-[blue] focus:outline-[blue]"
            />
          </div>
          <div className="mx-1 mt-2">
            <label className="font-semibold">
              Born
            </label>
            <input
              type="date"
              placeholder="e.g. 1050241708900001"
              className="w-full py-2 px-3 text-[15px] mt-2 border-2 rounded hover:border-[blue] focus:outline-[blue]"
            />
          </div>
          <div className="mx-1 mt-2">
            <label className="font-semibold">
              Address
            </label>
            <input
              type="text"
              className="w-full py-2 px-3 mt-2 border-2 rounded hover:border-[blue] focus:outline-[blue]"
            />
          </div>
          <div className="mx-1 mt-2">
            <label className="font-semibold">
              Gender
            </label>
            <div className="flex items-center gap-5 w-full py-2 px-2 ">
            <div className="flex items-center pt-1">
              <input id="default-radio-1" type="radio" value="" name="Gender" className=" w-4 h-4 cursor-pointer"/>
              <label className="ms-2">Male</label>
            </div>
            <div className="flex items-center pt-1">
              <input checked id="default-radio-2" type="radio" value="" name="Gender" className="w-4 h-4 cursor-pointer" />
              <label className="ms-2">Female</label>
            </div>
          </div>
          </div>
          <div className="mx-1 mt-2">
            <label className="text-12px font-semibold">
              Password
            </label>
            <div className="flex items-center justify-between w-full py-2 px-2 mt-2 border-2 rounded hover:border-[blue] focus:outline-[blue]">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="e.g. 4kuBu7uhM3dklt"
              className="w-[90%] focus:border-none outline-none overflow-scroll"
            />
            <button onClick={togglePasswordVisibility} className="">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            </div>
          </div>
          <div className="mx-1 mt-2">
            <label className="text-12px font-semibold">
              Confirm Password
            </label>
            <div className="flex items-center justify-between w-full py-2 px-2 mt-2 border-2 rounded hover:border-[blue] focus:outline-[blue]">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="e.g. 4kuBu7uhM3dklt"
              className="w-[90%] focus:border-none outline-none"
            />
            <button onClick={toggleConfirmPasswordVisibility} className="">
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            </div>
          </div>
        </div>

        <button className="bg-[#4475F2] mx-5 my-7 py-2 rounded-md text-white font-semibold">
          Sign-up
        </button>
      </section>

      <footer className="text-center text-[10px] my-9">
        © 2024 Lidia. All rights reserved.
      </footer>
    </div>
  );
};

export default Register;
