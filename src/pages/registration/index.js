import React from "react";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/2 justify-center flex flex-col items-end mr-[69px] ">
          <div
            className="w-[560
            px] ml-16"
          >
            <h2 className="font-nunito font-bold text-4xl ">
              Get Started With Easily Register
            </h2>
            <p className="font-nunito font-bold text-xl mt-2.5 ">
              Free Register You can enjoy it!
            </p>
            <div className="relative">
              <input
                type="text"
                className="w-full border border-solid border-black rounded-lg px-16 py-6 mt-9 outline-0"
              />
              <p className="font-nunito font-semibold font-sm absolute top-6 left-8 bg-white px-2.5">
                Full Name
              </p>
            </div>

            <div className="relative">
              <input
                type="email"
                className="w-full border border-solid border-black rounded-lg px-16 py-6 mt-9 outline-0"
              />
              <p className="font-nunito font-semibold font-sm absolute top-6 left-8 bg-white px-2.5">
                Email Address
              </p>
            </div>
            <div className="relative">
              <input
                type="password"
                className="w-full border border-solid border-black rounded-lg px-16 py-6 mt-9 outline-0"
              />
              <p className="font-nunito font-semibold font-sm absolute top-6 left-8 bg-white px-2.5">
                Password
              </p>
            </div>
            <button className="w-full text-center mt-12 bg-primary rounded-[86px] py-5 font-nunito font-semibold font-xl text-white">
              Sign Up
            </button>
            <p className="font-nunito font-regular font-xs mt-6 w-full text-center">
              Already have an account ?{" "}
              <Link className="font-bold text-[#ea6c00]" to="/login">
                Sing In
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

export default Registration;
