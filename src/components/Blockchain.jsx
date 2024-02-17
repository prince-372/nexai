import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import right from "../assets/image/left-elipes.webp";
import Slider from "react-slick";

const Blockchain = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className=" relative overflow-x-clip">
      <div className=" absolute w-[302px] h-[262px] blur-[171px] bg-[#02CDCF] right-[-10%] top-[10%] hidden md:block"></div>
      <div className=" absolute w-[302px] h-[262px] blur-[171px] bg-[#02CDCF] left-[-10%] top-[21%] hidden md:block"></div>
      <img className=" absolute right-0" src={right} alt="right" />
      <div className=" max-w-[1164px] mx-auto px-3">
        <h2
          data-aos="zoom-in"
          className=" sm:text-[40px] text-[31px] font-bold sm:leading-[50px] leading-[42px] font-recharge text-[#02CDCF] text-center sm:pt-[160px] pt-8"
        >
          Blockchain & AI technology
        </h2>
        <p
          data-aos="zoom-in"
          className=" text-base font-normal leading-[25px] font-poppins text-[#B4B4B4] text-center pt-4"
        >
          Nexai is an advanced home assistant that will revolutionize the way we
          interact with our smart devices at home. Powered by sophisticated
          artificial intelligence, it leverages blockchain technology to offer a
          secure and efficient user experience.
        </p>
        <p
          data-aos="zoom-in"
          className=" font-bold text-[20px] leading-[32px] font-recharge text-center text-[#fff] max-w-[684px] mx-auto pt-4 sm:pt-[96px]"
        >
          By building the software on blockchain, Nexai provides the following
          advantages
        </p>
      </div>
      <div
        data-aos="zoom-in"
        className=" sm:pb-[100px] pb-7 mx-auto lg:mx-0 lg:ms-auto max-w-[1264px] pt-[60px]"
      >
        <Slider {...settings}>
          <div className="">
            <div className=" bg-poligunbg bg-no-repeat bg-center flex flex-col items-center justify-center max-w-full w-[350px] h-[350px]">
              <div className=" w-[58px] h-[58px] flex flex-col items-center justify-center rounded-full text-white   circle-shadow text-center">
                <p className=" font-bold font-recharge text-[32px] leading-[51px]">
                  1
                </p>
              </div>
              <div>
                <p className="font-bold font-recharge text-[20px] leading-[32px] text-[#fff] text-center max-w-[212px] mx-auto">
                  Security and Privacy
                </p>
              </div>
            </div>
          </div>
          <div className="  pt-[50px]">
            <div className=" bg-poligunbg bg-no-repeat bg-center flex flex-col items-center justify-center max-w-full w-[350px] h-[350px]">
              <div className=" w-[58px] h-[58px] flex flex-col items-center justify-center rounded-full text-white  circle-shadow text-center">
                <p className=" font-bold font-recharge text-[32px] leading-[51px]">
                  2
                </p>
              </div>
              <div>
                <p className="font-bold font-recharge text-[20px] leading-[32px] text-[#fff] text-center max-w-[212px] mx-auto">
                  Transparent and Reliable Data Management
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" bg-poligunbg bg-no-repeat bg-center flex flex-col items-center justify-center max-w-full w-[350px] h-[350px]">
              <div className=" w-[58px] h-[58px] flex flex-col items-center justify-center rounded-full text-white  circle-shadow text-center">
                <p className=" font-bold font-recharge text-[32px] leading-[51px]">
                  3
                </p>
              </div>
              <div>
                <p className="font-bold font-recharge text-[20px] leading-[32px] text-[#fff] text-center max-w-[212px] mx-auto">
                  Self-learning and Personalization
                </p>
              </div>
            </div>
          </div>
          <div className=" pt-[50px]">
            <div className=" bg-poligunbg bg-no-repeat bg-center flex flex-col items-center justify-center max-w-full w-[350px] h-[350px]">
              <div className=" w-[58px] h-[58px] flex flex-col items-center justify-center rounded-full text-white  circle-shadow text-center">
                <p className=" font-bold font-recharge text-[32px] leading-[51px]">
                  4
                </p>
              </div>
              <div>
                <p className="font-bold font-recharge text-[20px] leading-[32px] text-[#fff] text-center max-w-[212px] mx-auto">
                  Automated and Transparent Transactions
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Blockchain;
