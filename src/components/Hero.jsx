import React from "react";
import Mynav from "./Mynav";
import Commanbtn from "./Commanbtn";

const Hero = () => {
  return (
    <div className=" bg-bg-hero bg-center bg-cover bg-no-repeat sm:min-h-[88vh] min-h-0 bg-[#040505] px-8">
      <Mynav />
      <div className=" max-w-[1140px] px-3 mx-auto">
        <h2 className=" font-bold sm:text-[60px] text-[31px] sm:leading-[75px] leading-[42px] font-recharge text-[#02CDCF] max-w-[577px] pt-12">
          Nexai{" "}
          <span className="text-[#fff]">
            is an advanced AI-powered home assistant
          </span>
        </h2>
        <p className=" text-[16px] font-medium leading-[25px] text-[#B3B5B6] font-poppins">
          Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla
          odio.
        </p>
        <div className=" mt-[51px] ps-5">
          <Commanbtn text="Know More" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
