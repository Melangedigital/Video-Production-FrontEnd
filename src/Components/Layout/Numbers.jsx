import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CU, cl1, cl2, cl3, cl4 } from "../../assets/images";
// import ContactButton from "./ContactButton";
// import { campaigns, media, reach, clients } from "../../assets/images";

const CountingNumber = ({ value, duration }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = Math.ceil(value / (duration * 60));

      const timer = setInterval(() => {
        if (start >= value) {
          clearInterval(timer);
        } else {
          setCount(start);
          start += increment;
        }
      }, 1000 / 60);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const OurJourney = () => {
  return (
    <div className="bg-[#111822]">
      <div className="font-nunito flex flex-col lg:flex-row lg:justify-center lg:items-center px-5 lg:px-0 mt-16 lg:mt-[120px] max-container pr-[-20px] pt-10 lg:pt-[85px] lg:pl-[30px]  mx-auto ">
        <div className="lg:w-[50%]">
          <h2 className="lg:ml-20 text-center lg:text-left text-white font-semibold text-[36px] lg:text-5xl headings mb-10">
            Why Choose Us?
          </h2>
          <div className="flex flex-col  lg:flex-row justify-center lg:justify-evenly lg:items-center">
            <div className="w-auto md:w-full text-white  grid grid-cols-2 gap-y-4  gap-x-4 mx-0 md:mx-20 ">
              <div className="text-center bg-white border border-gray-400 py-8 rounded-[10px] bg-opacity-10 ">
                {/* <img src={clients} alt="" className="mb-3 w-20 h-16 mx-auto" /> */}
                <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">
                  <img
                    src={cl1}
                    alt=""
                    className="w-[72px] mb-1 h-[72px] mx-auto"
                  />
                  <CountingNumber value={501} duration={2} />{" "}
                  <span className="-ml-1 lg:-ml-2">+</span>
                </h2>
                <p className="text-base">Projects Delivered</p>
              </div>

              <div className="text-center border border-gray-400 bg-white py-8 rounded-[10px] bg-opacity-10 ">
                <img
                  src={cl2}
                  alt=""
                  className="w-[72px] h-[72px] mb-1 mx-auto"
                />
                <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">
                  <span>0</span>
                  <CountingNumber value={9} duration={2} />{" "}
                  <span className="-ml-1 lg:-ml-2">+</span>
                </h2>
                <p className=" text-base">Years of Experience</p>
              </div>
              <div className="text-center bg-white  border border-gray-400 py-8 rounded-[10px] bg-opacity-10 ">
                <img
                  src={cl3}
                  alt=""
                  className="w-[72px] h-[72px] mb-1 mx-auto"
                />
                <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">
                  <CountingNumber value={101} duration={2} />{" "}
                  <span className="-ml-1 lg:-ml-2">+</span>
                </h2>
                <p className=" text-base">Brands</p>
              </div>
              <div className="text-center bg-white py-8  border border-gray-400 rounded-[10px] bg-opacity-10  ">
                <img
                  src={cl4}
                  alt=""
                  className="w-[72px] h-[72px] mb-1 mx-auto"
                />
                <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">
                  <CountingNumber value={4} duration={2} />{" "}
                  <span className="-ml-1 lg:-ml-2">B+</span>
                </h2>
                <p className="text-base  ">Views</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] lg:ml-20 mt-10 lg:mt-0 ">
          <img
            src={CU}
            alt=""
            className="lg:w-[642px] object-cover lg:h-[765px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
