import React from "react";
import { Clock, Line, Massage, Satting } from "./Icons";

const Unique = () => {
  return (
    <div
      id="features"
      className=" max-w-[1364px] px-3 mx-auto sm:pt-[120px] pt-8"
    >
      <div className=" bg-bgscroll bg-no-repeat bg-center bg-cover h-[800px] border rounded-[32px] sm:p-14 p-3 relative overflow-hidden">
        <div className=" absolute w-[302px] h-[262px] blur-[171px] bg-[#02CDCF] right-[-18%] top-[5%] hidden md:block"></div>
        <div className=" absolute w-[302px] h-[262px] blur-[171px] bg-[#02CDCF] left-[-18%] bottom-[5%] hidden md:block"></div>

        <h2
          data-aos="zoom-in"
          className="font-bold sm:text-[40px] text-[31px]  sm:leading-[50px] leading-[35px] font-recharge text-[#fff] text-center "
        >
          Unique features
        </h2>
        <p
          data-aos="zoom-in"
          className=" font-normal text-[16px] leading-[25px] font-poppins text-center text-[#B6B6B6] max-w-[397px] mx-auto pt-4"
        >
          ability to engage in natural, fluent conversations in over 15
          languages,
        </p>
        <div className=" h-[496px] overflow-y-scroll my-scroll">
          <div className="grid lg:grid-cols-2 pt-10 sm:pt-20 max-h-[650px] sm:max-h-[576px] my-scroll  overflow-y-scroll">
            <div className="flex flex-col max-lg:items-center">
              <div className="max-w-[364px] group  bg-white px-6 pt-[30px] pb-11 rounded-2xl mb-5 sm:mb-10 md:mb-20 lg:mb-[175px]">
                <Satting />
                <p className=" font-recharge group-hover:text-[#02CDCF] duration-300 font-bold text-xl leading-[32px] text-[#0B1010] pt-[30px]">
                  Remote Access and File Management
                </p>
                <p className=" font-normal text-base font-poppins leading-[25px] pt-[10px]">
                  {" "}
                  Imagine you're at work, and you realize you forgot to bring an
                  important file stored on your desktop computer at home. No
                  worries! Simply open the Nexai app on your phone, initiate a
                  call with Nexai, and request access to your computer.{" "}
                </p>
              </div>
              <div className="max-w-[364px] group duration-300 bg-white px-6 pt-[30px] pb-11 rounded-2xl">
                <Massage />
                <p className=" font-recharge group-hover:text-[#02CDCF] duration-300 font-bold text-xl leading-[32px] text-[#0B1010] pt-[30px]">
                  Autonomous and Natural Language Communication
                </p>
                <p className=" font-normal text-base font-poppins leading-[25px] pt-[10px]">
                  {" "}
                  Nexai goes beyond standard home assistants by taking proactive
                  initiatives and engaging in natural language conversations. It
                  communicates with you as if you're talking to a friend,{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col max-sm:mt-5 max-md:mt-20 max-lg:mt-[175px] lg:pt-[300px] items-center lg:items-end">
              <div className="max-w-[364px] group duration-300 bg-white px-6 pt-[30px] pb-11 rounded-2xl mb-5 sm:mb-10 md:mb-20 lg:mb-[175px]">
                <Clock />
                <p className=" font-recharge group-hover:text-[#02CDCF] duration-300 font-bold text-xl leading-[32px] text-[#0B1010] pt-[30px]">
                  Real-time Home Monitoring
                </p>
                <p className="font-normal text-base font-poppins leading-[25px] pt-[10px]">
                  {" "}
                  While you're out with your family, you may wonder if you
                  remembered to turn off the stove. Thanks to Nexai, this is no
                  longer a concern. Using the Nexai app, you can initiate a
                  video call with Nexai and activate the mini drone stationed in
                  your home.{" "}
                </p>
              </div>
              <div className="max-w-[364px] group duration-300 bg-white px-6 pt-[30px] pb-11 rounded-2xl">
                <Line />
                <p className=" font-recharge group-hover:text-[#02CDCF] duration-300 font-bold text-xl leading-[32px] text-[#0B1010] pt-[30px]">
                  Intelligent Contextual Awareness
                </p>
                <p className="font-normal text-base font-poppins leading-[25px] pt-[10px]">
                  Nexai utilizes the hardware sensors placed throughout your
                  home to understand your location and deliver relevant
                  information or actions. For instance, if you're in the bedroom
                  and there's a smart TV present, Nexai will automatically
                  display on the TV screen.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
