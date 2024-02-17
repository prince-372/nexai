import React from "react";
import Commanbtn from "./Commanbtn";
import ai from "../assets/image/AI-img.webp";

const Nexai = () => {
  return (
    <div className=" max-w-[1310px] px-3 mx-auto sm:pt-[160px] pt-8">
      <div data-aos="zoom-in" className="bg-bg-sec bg-no-repeat bg-center bg-cover bg-[#101219] border rounded-[24px]">
        <div className="sm:p-[100px] p-3">
          <div className=" grid lg:grid-cols-2 grid-cols-1 ">
            <div className=" order-2 lg:order-1 flex flex-col justify-center  ">
              <h2 className="font-bold sm:text-[40px] text-[31px] sm:leading-[50px] leading-[42px] font-recharge text-[#02CDCF]  ">
                What is NexAi?
              </h2>
              <p className="text-[16px] leading-[25px] font-medium text-[#B4BCBD] max-w-[517px] pt-4 font-poppins text-start">
                Beyond its convenience, Nexai revolutionizes the way you
                interact with your home environment. It enhances productivity,
                efficiency, and overall well-being. From managing your schedules
                to transforming the way you experience smart living, Nexai opens
                up a world of possibilities.
              </p>
              <p className="text-[16px] leading-[25px] font-medium text-[#B4BCBD] max-w-[517px] pt-4 font-poppins text-start">
                Nexai's software can be installed on all your smart devices,
                including smartphones, computers, smart TVs, and kitchen
                appliances. It acts as a centralized control hub, allowing you
                to manage and interact with all your devices seamlessly. Whether
                it's adjusting the temperature, turning on appliances, or even
                accessing files on your home computer from anywhere, Nexai
                empowers you with effortless control.
              </p>
              <div className=" mt-[40px]">
                <Commanbtn text="Learn More" />
              </div>
            </div>
            <div className=" relative order-1 lg:order-2">
              <img className=" mix-blend-lighten" src={ai} alt="ai" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nexai;
