import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ap1, ap2, ap3, ap4 } from "../../assets/images";

const Approch = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(360 < window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isMobile,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className="lg:-mt-[50px] bg-[#111822] z-0 relative lg:px-0 px-5"
      id="ourapproach"
    >
      <div className="flex justify-center items-center pt-10">
        <div className="headings">
          <span className="text-white lg:text-5xl text-[36px] font-bold font-source lg:leading-[56px]">
            Our{" "}
          </span>
          <span className="lg:text-5xl text-white text-[36px] font-bold lg:leading-[56px]">
            Approach
          </span>
        </div>
      </div>
      <div className="hidden  mt-20 lg:flex justify-center space-x-10 items-center">
        <img src={ap1} alt="" className="w-[270px] h-[304px]" />
        <img src={ap2} alt="" className="w-[270px] h-[304px]" />

        <img src={ap3} alt="" className="w-[270px] h-[304px]" />
        <img src={ap4} alt="" className="w-[270px] h-[304px]" />
      </div>
      <div className="max-container  lg:px-[150px]  lg:mt-[75px] mt-[40px] lg:pb-5 pb-[40px] ">
        {isMobile ? (
          <div className="lg:hidden block">
            <Slider {...sliderSettings}>
              <div>
                <img
                  src={ap1}
                  alt=""
                  className="lg:w-[270px] p-2  lg:h-[304px]"
                />
              </div>
              <div>
                <img
                  src={ap2}
                  alt=""
                  className="lg:w-[270px] p-2 lg:h-[304px]"
                />
              </div>
              <div>
                <img
                  src={ap3}
                  alt=""
                  className="lg:w-[270px] p-2 lg:h-[304px]"
                />
              </div>
              <div>
                <img
                  src={ap4}
                  alt=""
                  className="lg:w-[270px] p-2 lg:h-[304px]"
                />
              </div>
            </Slider>
          </div>
        ) : (
          <div className="lg:flex justify-center space-x-10 items-center">
            <img src={ap1} alt="" className="w-[270px] h-[304px]" />
            <img src={ap2} alt="" className="w-[270px] h-[304px]" />

            <img src={ap3} alt="" className="w-[270px] h-[304px]" />
            <img src={ap4} alt="" className="w-[270px] h-[304px]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Approch;
