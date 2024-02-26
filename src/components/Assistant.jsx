import React from "react";
import hand from "../assets/image/home-with-hand.webp";
import Commanbtn from "./Commanbtn";

const Assistant = () => {
  return (
    <div className="bg-[#040404] sm:pt-[80px] pt-5 relative overflow-x-clip">
      <div className=" absolute w-[228px] h-[153px] blur-[124px] bg-[#02CDCF] right-[-10%] bottom-[30%] hidden md:block"></div>
      <div className=" max-w-[1180px] px-3 mx-auto ">
        <div className=" grid md:grid-cols-2 grid-cols-1 items-center sm:gap-12 gap-0">
          <div className=" pb-[51px] flex justify-center lg:justify-start relative">
            <img data-aos="zoom-in" src={hand} alt="hand" />
            <div className=" absolute w-[231px] h-[153px] blur-[153px] bg-[#02CDCF] md:left-[10%] left-[12%] md:bottom-[30%] bottom-[40%] hidden md:block"></div>
          </div>
          <div
            data-aos="zoom-in"
            className=" flex flex-col items-center md:items-start text-center md:text-start"
          >
            <h2 className=" font-bold sm:text-[40px] text-[31px]  leading-[50px] font-recharge text-[#02CDCF]">
              Ai-Powered Home Assistant
            </h2>
            <p className=" text-[16px] leading-[25px] font-medium text-[#B4BCBD] max-w-[517px] pt-4 font-poppins">
              Nexai is an advanced AI-powered home assistant that brings the
              future to your fingertips. With its ability to engage in natural,
              fluent conversations in over 15 languages,
            </p>
            <p className=" text-[16px] leading-[25px] font-medium text-[#B4BCBD] max-w-[517px] pt-2 font-poppins">
              Nexai offers an incredibly futuristic experience. It can take the
              initiative to ask about your day, schedule meetings, provide
              timely reminders
            </p>
            <p className=" text-[16px] leading-[25px] font-medium text-[#B4BCBD] max-w-[505px] pt-2 font-poppins">
              assist with cooking by suggesting ingredients, track your fitness
              and nutrition goals, and even handle bill payments.
            </p>
            <div className=" mt-[51px] ">
              <Commanbtn text="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
