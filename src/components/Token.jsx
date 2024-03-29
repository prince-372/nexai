import React from "react";
import UtilityImg from "../assets/image/hand-with-ai.webp";
import Commanbtn from "./Commanbtn";
import right from "../assets/image/left-elipes.webp";
const Token = () => {
  return (
    <div id="Tokens" className=" relative overflow-x-clip">
      <img className=" absolute right-0" src={right} alt="right" />
      <img className=" absolute right-0 bottom-[10%]" src={right} alt="right" />
      <div className=" absolute w-[228px] h-[245px] blur-[124px] bg-[#02CDCF] right-[-15%] top-[30%] hidden md:block"></div>
      <div className=" absolute w-[228px] h-[245px] blur-[124px] bg-[#02CDCF] left-[-15%] top-0 hidden md:block"></div>
      <div className="max-w-[1140px] sm:pt-[160px] pt-8 mx-auto px-3 overflow-x-clip">
        <h2
          data-aos="zoom-in"
          className="text-[#02CDCF] sm:text-[40px] text-[31px] font-recharge font-bold sm:leading-[50px] leading-[42px] text-center"
        >
          NexAI Token & utility
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="relative ">
            <div className="relative overflow-hidden before:absolute before:mix-blend-color before:z-20  before:top-0 lg:before:left-0 before:left-[62px]   before:w-[511px] before:h-[511px] before:bg-[#02CDCF] after:absolute after:mix-blend-hue  after:top-0 after:left-[55px] after:z-[1] after:w-[511px] after:h-[511px] after:bg-[#02CDCF] ">
              <img
                data-aos="zoom-in"
                className="lg:ml-[-100px] ml-0 overflow-hidden  relative z-[2]"
                src={UtilityImg}
                alt="Utility-Img"
              />
            </div>
          </div>
          <div className="ps-2 my-[63px] h-[512px] overflow-y-scroll my-scroll">
            <div className="after:flex after:w-[10px] relative after:absolute after:top-0 after:h-full after:rounded-full after:bg-[#02CDCF] flex flex-col after:z-0">
              <div className="min-[567px]:mb-[60px] mb-[20px] relative before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:-left-[6px] before:top-1/2 before:-translate-y-1/2 pl-[42px] sm:pl-20 before:z-10">
                <h3 className=" min-[567px]:text-2xl text-[18px] min-[567px]:pb-4 font-bold font-recharge leading-6 text-white">
                  Purchasing Nexai Products
                </h3>
                <p className="min-[567px]:text-base text-[12px] font-poppins min-[567px]:leading-[25px] font-normal text-[#B4B4B4]">
                  Nex AI tokens will be the primary currency for acquiring
                  Nexai's extensive range of software solutions, hardware
                  devices, including drones and sensors, and other smart home
                  products available on the Nexai marketplace. Users can
                  confidently make purchases using Nex tokens, enjoying the
                  convenience and flexibility of a token-based payment system.
                </p>
              </div>
              <div className="min-[567px]:mb-[60px] mb-[20px] relative before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:-left-[6px] before:top-1/2 before:-translate-y-1/2 pl-[42px] sm:pl-20 before:z-10">
                <h3 className=" min-[567px]:text-2xl text-[18px] min-[567px]:pb-4 font-bold font-recharge leading-6 text-white">
                  Accessing Exclusive Content
                </h3>
                <p className="min-[567px]:text-base text-[12px] font-poppins min-[567px]:leading-[25px] font-normal text-[#B4B4B4]">
                  By holding Nex AI tokens, users will gain privileged access to
                  exclusive content within the Nexai platform. These tokens will
                  unlock premium features, advanced functionalities, and
                  specialized services, enabling users to fully explore and
                  enjoy the enhanced capabilities of Nexai's ecosystem.
                </p>
              </div>
              <div className="min-[567px]:mb-[60px] mb-[20px] relative before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:-left-[6px] before:top-1/2 before:-translate-y-1/2 pl-[42px] sm:pl-20 before:z-10">
                <h3 className=" min-[567px]:text-2xl text-[18px] min-[567px]:pb-4 font-bold font-recharge leading-6 text-white">
                  Loyalty and Rewards
                </h3>
                <p className="min-[567px]:text-base text-[12px] font-poppins min-[567px]:leading-[25px] font-normal text-[#B4B4B4]">
                  The Nexai ecosystem will feature a robust loyalty program,
                  rewarding users with Nex AI tokens for their active
                  engagement, ongoing participation, and dedicated usage of
                  Nexai's products and services. Token holders will have the
                  opportunity to redeem their accumulated rewards for discounts,
                  incentives, or exclusive offers, fostering a strong sense of
                  loyalty and encouraging continued involvement.
                </p>
              </div>
              <div className="min-[567px]:mb-[60px] mb-[20px] relative before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:-left-[6px] before:top-1/2 before:-translate-y-1/2 pl-[42px] sm:pl-20 before:z-10">
                <h3 className=" min-[567px]:text-2xl text-[18px] min-[567px]:pb-4 font-bold font-recharge leading-6 text-white">
                  Participating in Governance{" "}
                </h3>
                <p className="min-[567px]:text-base text-[12px] font-poppins min-[567px]:leading-[25px] font-normal text-[#B4B4B4]">
                  Nex AI token holders will play a vital role in the governance
                  of the Nexai ecosystem. Through voting mechanisms, token
                  holders will have a direct say in the decision-making process.
                  They can express their opinions, vote on proposed changes or
                  improvements, and actively contribute to shaping the future
                  development and direction of the Nexai ecosystem.
                </p>
              </div>
              <div className="min-[567px]:mb-[60px] mb-[20px] relative before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:-left-[6px] before:top-1/2 before:-translate-y-1/2 pl-[42px] sm:pl-20 before:z-10">
                <h3 className=" min-[567px]:text-2xl text-[18px] min-[567px]:pb-4 font-bold font-recharge leading-6 text-white">
                  Peer-to-Peer Transactions{" "}
                </h3>
                <p className="min-[567px]:text-base text-[12px] font-poppins min-[567px]:leading-[25px] font-normal text-[#B4B4B4]">
                  Nex AI tokens will enable seamless peer-to-peer transactions
                  within the Nexai community. Users will have the ability to
                  exchange tokens with others for various purposes, such as
                  purchasing pre-owned Nexai devices, engaging in token trading
                  activities, or conducting value exchanges directly within the
                  ecosystem, all with the utmost security and convenience.
                </p>
              </div>
              <div className="min-[567px]:mb-[60px] mb-[20px] relative before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:-left-[6px] before:top-1/2 before:-translate-y-1/2 pl-[42px] sm:pl-20 before:z-10">
                <h3 className=" min-[567px]:text-2xl text-[18px] min-[567px]:pb-4 font-bold font-recharge leading-6 text-white">
                  Token Staking and Rewards{" "}
                </h3>
                <p className="min-[567px]:text-base text-[12px] font-poppins min-[567px]:leading-[25px] font-normal text-[#B4B4B4]">
                  Nex AI tokens will support staking mechanisms, allowing users
                  to lock up their tokens for a specified period. By staking
                  their tokens, users will earn additional rewards, such as
                  interest, dividends, or other incentives, further
                  incentivizing token holding and fostering long-term engagement
                  and loyalty.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center sm:mt-[287px] mt-0 pb-[65px]">
          <div data-aos="zoom-in" className="max-md:pb-5">
            <h2 className="sm:text-[40px] text-[31px] font-recharge font-bold sm:leading-[52px] leading-[36px] text-white text-center lg:text-start">
              Ready to get started
            </h2>
            <h2 className=" sm:text-[40px] text-[31px] font-recharge text-[#02CDCF] font-bold sm:leading-[52px] leading-[36px] text-center lg:text-start">
              Talk to us Today
            </h2>
          </div>
          <div data-aos="zoom-in">
            <Commanbtn text="Get Started" />
          </div>
        </div>
      </div>
      <div className=" absolute w-[228px] h-[245px] blur-[124px] bg-[#02CDCF] right-[-15%] bottom-[-5%] hidden md:block"></div>
      <div className=" absolute w-[228px] h-[245px] blur-[124px] bg-[#02CDCF] left-[-15%] bottom-[8%] hidden md:block"></div>
    </div>
  );
};

export default Token;
