import React from "react";
import Logo from "../assets/Logoimg.svg";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
     <header>
        <div className="w-[15vw] sm:w-[80px] h-auto mt-14 mx-auto">
          <img src={Logo} className="w-[100%]" alt="Logo" />
        </div>
      </header>

      <section className="w-[80%] sm:w-[50%] md:w-[30%] h-auto flex flex-col border-t-2 border-indigo-500 rounded-md mt-14 mx-auto shadow-2xl	">
        <p className="text-15px mt-6 mx-5">
          {" "}
          <Link to={"/"}>
            <span className="text-[#4737FF]">Home</span>
          </Link>{" "}
          / <span>Login</span>
        </p>

        <h1 className="text-15px font-semibold mt-6 mx-5">Login</h1>
        <p className="mx-5 mt-2">Input your username and password.</p>

        <div className="flex flex-col mx-5 mt-7 ">
        <div className="mx-1 mt-2">
            <label className="text-12px font-semibold">
              Username
            </label>
            <input
              type="text"
              placeholder="Salina Alfianchi"
              className=" text-[15px] w-full py-2 px-3 mt-2 border-2 rounded hover:border-[blue] focus:outline-[blue]"
            />
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

          </div>

        <button className="bg-[blue] mx-5 my-7 py-2 rounded-md text-white font-semibold">Login</button>
      </section>

    <p className="text-center my-10">Dont have an account? <Link to={"/register"}><span className="text-[blue]">Create one!</span></Link></p>

    <footer className="text-center text-[10px]">© 2024 Lidia. All rights reserved.</footer>
    </div>
  );
};

export default Login;
