import React, { useEffect, useState } from "react";

const Priloder = () => {
  const [loder, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3500);
  }, []);
  {
    if (loder === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }
  return (
    <div>
      {loder ? (
        <section
          style={{ zIndex: "999999999" }}
          className="bg-[#040C0C] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
        >
          <div className="flex justify-center items-center flex-col text-center animate-bounce">
            <h2 className=" font-bold sm:text-[60px] text-[31px] sm:leading-[75px] leading-[42px] font-recharge text-[#02CDCF] max-w-[577px] pt-12">
              Ne<span className=" text-white">xai</span>{" "}
              <div
                aria-label="Loading..."
                role="status"
                className="flex items-center space-x-2"
              >
                <svg
                  className="h-20 w-20 animate-spin stroke-gray-500"
                  viewBox="0 0 256 256"
                >
                  <line
                    x1="128"
                    y1="32"
                    x2="128"
                    y2="64"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="195.9"
                    y1="60.1"
                    x2="173.3"
                    y2="82.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="224"
                    y1="128"
                    x2="192"
                    y2="128"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="195.9"
                    y1="195.9"
                    x2="173.3"
                    y2="173.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="128"
                    y1="224"
                    x2="128"
                    y2="192"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="195.9"
                    x2="82.7"
                    y2="173.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="32"
                    y1="128"
                    x2="64"
                    y2="128"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="60.1"
                    x2="82.7"
                    y2="82.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                </svg>
                <span className="text-4xl font-medium text-gray-500">
                  Loading...
                </span>
              </div>
            </h2>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default Priloder;
