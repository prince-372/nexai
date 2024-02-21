import layer from "../assets/image/hero-gradiunt.webp";
import Commanbtn from "./Commanbtn";
import Mynav from "./Mynav";

function Hero() {

  return (
    <div className="lg:px-12 px-5 pt-2 relative z-[1] min-h-screen overflow-hidden">
      <div className="pt-[13px] bg-bg-hero flex bg-center flex-col bg-cover xl:bg-BgSize object-cover bg-no-repeat min-h-[95vh] z-10">
       <Mynav/>
        <div className="flex-grow flex justify-center flex-col" id="home">
          <div className="max-w-[1140px] px-3 xl:pl-36 ">
            <h2 className="font-recharge  font-normal text-white lg:text-[60px] sm:text-6xl text-4xl lg:leading-[75px] max-w-[577px]">
              <span className=" text-[#02CDCF] ">Nexai</span> is an advanced
              AI-powered home assistant
            </h2>
            <p className="font-poppins font-normal text-sm sm:text-base text-[#b3b7bb] pt-3 pb-12">
              Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla
              odio.
            </p>
            <Commanbtn text="Know More" />
          </div>
        </div>
      </div>
      <img src={layer} alt="layer" className="absolute  bottom-[-2%] " />
      <div className="w-[262px] h-[262px] bg-[#02CDCF]  blur-[200px] rounded-full absolute left-0 top-[12%]  lg:block hidden"></div>
      <div className="w-[262px] h-[262px] bg-[#02CDCF]  blur-[200px] rounded-full absolute right-[9%] top-[50%] z-[1]  lg:block hidden"></div>
    </div>
  );
}
export default Hero;
