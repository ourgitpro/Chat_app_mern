import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/2 justify-center flex flex-col items-end mr-[69px] ">
          <div
            className="w-[560
            px] ml-16"
          >
            <h2 className="font-nunito font-bold text-4xl ">
              Login To Your Account!
            </h2>
            <picture>
              <img className="mt-5 cursor-pointer" src="images/google.png" alt="" />
            </picture>

            <div className="relative">
              <input
                type="email"
                className="w-full border-b border-solid border-black   py-6 mt-9 outline-0"
              />
              <p className="font-nunito font-semibold font-sm absolute top-6 left-0 bg-white px-2.5">
                Email Address
              </p>
            </div>
            <div className="relative">
              <input
                type="password"
                className="w-full border-b border-solid border-black   py-6 mt-9 outline-0"
              />
              <p className="font-nunito font-semibold font-sm absolute top-6 left-0 bg-white px-2.5">
                Password
              </p>
            </div>
            <button className="w-full text-center mt-12 bg-primary rounded-md py-5 font-nunito font-semibold font-xl text-white">
             Login To Continue
            </button>
            <p className="font-nunito font-regular font-xs mt-6 w-full text-left">
              Don't have an account ?{" "}
              <Link className="font-bold text-[#ea6c00]" to="/registration ">
                Register
              </Link>
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <picture>
            <img
              className="h-screen w-full  object-cover"
              src="images/registrationimg.webp"
              alt=""
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default Login;
