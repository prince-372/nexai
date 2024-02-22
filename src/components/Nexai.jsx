import React from "react";
import Commanbtn from "./Commanbtn";
import ai from "../assets/image/AI-img.webp";

const Nexai = () => {
  return (
    <div
      id="nexchat"
      className=" max-w-[1310px] px-3 mx-auto sm:pt-[160px] pt-8 "
    >
      <div
        data-aos="zoom-in"
        className="bg-bg-sec bg-no-repeat bg-center bg-cover bg-[#101219] border rounded-[24px] relative"
      >
        <div className=" absolute w-[302px] h-[262px] blur-[171px] bg-[#02CDCF] right-[7%] top-[33%] hidden md:block"></div>
        <div className="sm:px-[100px] px-3 sm:py-[163px] py-3">
          <div className=" grid lg:grid-cols-2 grid-cols-1 ">
            <div className=" order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start">
              <h2 className="font-bold sm:text-[40px] text-[31px] sm:leading-[50px] leading-[42px] font-recharge text-[#02CDCF] text-center lg:text-start">
                What is NexAi?
              </h2>
              <p className="text-[16px] leading-[25px] font-medium text-[#B4BCBD] max-w-[490px] pt-4 font-poppins text-center lg:text-start">
                Beyond its convenience, Nexai revolutionizes the way you
                interact with your home environment. It enhances productivity,
                efficiency, and overall well-being. From managing your schedules
                to transforming the way you experience smart living, Nexai opens
                up a world of possibilities.
              </p>
              <p className="text-[16px] leading-[25px] font-medium text-[#B4BCBD] max-w-[485px] pt-4 font-poppins text-center lg:text-start">
                Nexai's software can be installed on all your smart devices,
                including smartphones, computers, smart TVs, and kitchen
                appliances. It acts as a centralized control hub, allowing you
                to manage and interact with all your devices seamlessly. Whether
                it's adjusting the temperature, turning on appliances, or even
                accessing files on your home computer from anywhere, Nexai
                empowers you with effortless control.
              </p>
              <div className=" sm:mt-[40px] mt-2">
                <Commanbtn text="Learn More" />
              </div>
            </div>
            <div className=" relative order-1 lg:order-2 flex justify-center items-center lg:items-start">
              <img className=" mix-blend-lighten" src={ai} alt="ai" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nexai;
