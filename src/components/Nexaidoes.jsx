import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left from "../assets/image/right-elipes.webp";
import Slider from "react-slick";

const Nexaidoes = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase:'linear',
    autoplay: true,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    cssEase:'linear',
    autoplaySpeed: 0,
    rtl: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const settings3 = {
    dots: false,
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase:'linear',
    autoplay: true,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div id="About" className=" relative overflow-x-clip">
      <img className=" absolute left-[-1%] top-[-5%]" src={left} alt="left" />
      <div className=" absolute w-[233px] h-[233px] blur-[171px] bg-[#02CDCF] right-[-10%] top-[-1%] hidden md:block"></div>
      <h2
        data-aos="zoom-in"
        className=" font-bold sm:text-[40px] text-[31px] sm:leading-[50px] leading-[42px] font-recharge text-[#02CDCF] max-w-[760px] mx-auto sm:pt-[100px] pt-8 text-center lg:text-start"
      >
        NexAi does all this. And more.
      </h2>
      <p
        data-aos="zoom-in"
        className=" font-medium text-base leading-[25px] font-poppins text-[#B4B4B4] max-w-[912px] mx-auto text-center pt-4 pb-4 sm:pb-[90px]"
      >
        Nexai is an advanced home assistant that will revolutionize the way we
        interact with our smart devices at home. Powered by sophisticated
        artificial intelligence, it leverages blockchain technology to offer a
        secure and efficient user experience.
      </p>
      <Slider {...settings}>
        <div className=" px-3 py-3">
          <div className="px-[43px] h-[220px] shadow-cardshodow max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
            <p className=" font-bold text-[24px] leading-[38px] font-recharge text-white text-center">
              NexAi, Turn on light
            </p>
          </div>
        </div>
        <div className=" px-3 py-3">
          <div className="px-[43px] h-[220px] shadow-cardshodow max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
            <p className=" font-bold text-[24px] leading-[38px] font-recharge text-white text-center">
              NexAi, set alarm of 5:00 am{" "}
            </p>
          </div>
        </div>
        <div className=" px-3 py-3">
          <div className="px-[43px] h-[220px] shadow-cardshodow max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
            <p className=" font-bold text-[24px] leading-[38px] font-recharge text-white text-center">
              NexAi, measure this table
            </p>
          </div>
        </div>
        <div className=" px-3 py-3">
          <div className="px-[43px] h-[220px] shadow-cardshodow max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
            <p className=" font-bold text-[24px] leading-[38px] font-recharge text-white text-center">
              NexAi, Turn on music
            </p>
          </div>
        </div>
      </Slider>
      <Slider {...settings2}>
        <div className=" px-3 py-3">
          <div className="px-[43px] h-[220px] shadow-cardshodow max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
            <p className=" font-bold text-[24px] leading-[38px] font-recharge text-white text-center">
              NexAi, Turn on light
            </p>
          </div>
        </div>
        <div className=" px-3 py-3">
          <div className="px-[43px] h-[220px] shadow-cardshodow max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
            <p className=" font-bold text-[24px] leading-[38px] font-recharge text-white text-center">
              NexAi, set alarm of 5:00 am{" "}
            </p>
          </div>
        </div>
        <div className=" px-3 py-3">
          <div className="px-[43px] h-[220px] shadow-cardshodow max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
            <p className=" font-bold text-[24px] leading-[38px] font-recharge text-white text-center">
              NexAi, measure this table
            </p>
          </div>
        </div>
        <div className=" px-3 py-3">
          <div className="px-[43px] h-[220px] shadow-cardshodow max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
            <p className=" font-bold text-[24px] leading-[38px] font-recharge text-white text-center">
              NexAi, Turn on music
            </p>
          </div>
        </div>
      </Slider>
      <Slider {...settings3}>
        <div className=" px-3 py-3">
          <div className="px-[43px] h-[220px] shadow-cardshodow max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
            <p className=" font-bold text-[24px] leading-[38px] font-recharge text-white text-center">
              NexAi, Turn on light
            </p>
          </div>
        </div>
        <div className=" px-3 py-3">
          <div className="px-[43px] h-[220px] shadow-cardshodow max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
            <p className=" font-bold text-[24px] leading-[38px] font-recharge text-white text-center">
              NexAi, set alarm of 5:00 am{" "}
            </p>
          </div>
        </div>
        <div className=" px-3 py-3">
          <div className="px-[43px] h-[220px] shadow-cardshodow max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
            <p className=" font-bold text-[24px] leading-[38px] font-recharge text-white text-center">
              NexAi, measure this table
            </p>
          </div>
        </div>
        <div className=" px-3 py-3">
          <div className="px-[43px] h-[220px] shadow-cardshodow max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
            <p className=" font-bold text-[24px] leading-[38px] font-recharge text-white text-center">
              NexAi, Turn on music
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Nexaidoes;
