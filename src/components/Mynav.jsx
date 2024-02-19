import React, { useState } from "react";
import Commanbtn from "./Commanbtn";

const Mynav = () => {
  const [nav, setNav] = useState(false);
  function show() {
    setNav(!nav);
    if (nav === false) {
      document.body.classList.add("max-lg:!overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:!overflow-hidden");
    }
  }
  return (
    <>
      <nav className=" py-[24px]">
        <div className="max-w-[1140px] mx-auto px-3 flex items-center justify-between">
          <div>logo</div>
          <ul
            className={`${
              nav ? "left-0" : "left-[-100%]"
            } flex items-center gap-[28px] mobileView duration-300`}
          >
            <li>
              <a
                onClick={show}
                className="text-[16px] font-medium text-[#FFFFFF] font-poppins no-underline leading-[100%] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-white after:h-[3px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={show}
                className="text-[16px] font-medium text-[#FFFFFF] font-poppins no-underline leading-[100%] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-white after:h-[3px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear"
                href="#Marketplace"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                onClick={show}
                className="text-[16px] text-[#ffffff] font-medium font-poppins no-underline leading-[100%] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-white after:h-[3px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear"
                href="#About"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={show}
                className=" text-[16px] text-[#ffffff] font-medium font-poppins no-underline leading-[100%] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-white after:h-[3px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear"
                href="#NexChat"
              >
                NexChat
              </a>
            </li>
            <li>
              <a
                onClick={show}
                className="text-[16px]  font-medium text-[#FFFFFF] font-poppins no-underline leading-[100%] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-white after:h-[3px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear"
                href="#Tokens"
              >
                Tokens
              </a>
            </li>
            <li>
              <a className="sm:hidden" onClick={show} href="#">
                <Commanbtn text="Sign Up" />
              </a>
            </li>
          </ul>
          <div className="relative items-center lg:gap-5">
            <div className="hidden sm:flex ">
              <div>
                <Commanbtn text="Sign Up" />
              </div>
            </div>
          </div>
          <label className="lg:hidden" onClick={show}>
            {nav ? (
              <div className="relative z-40">
                <span className=" flex w-6 h-1 bg-white duration-300 rounded-2xl rotate-45 mb-1"></span>
                <span className=" flex w-6 h-1 bg-white duration-300 rounded-2xl absolute top-0 -rotate-45 mb-1"></span>
              </div>
            ) : (
              <div className="relative z-40">
                <span className=" flex w-6 h-1 bg-white duration-300 rounded-2xl mb-1"></span>
                <span className=" flex w-6 h-1 bg-white duration-300 rounded-2xl mb-1"></span>
                <span className=" flex w-6 h-1 bg-white duration-300 rounded-2xl"></span>
              </div>
            )}
          </label>
        </div>
      </nav>
    </>
  );
};

export default Mynav
