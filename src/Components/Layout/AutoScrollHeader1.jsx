import React from "react";
// import { useSpring, animated } from "react-spring";

const AutoScrollHeader1 = ({ images, title }) => {
  return (
    <div className="pt-[50px] lg:pt-[80px] " id="clients">
      <div className="text-center">
        <span className="text-black px-2 lg:px-0 lg:text-5xl text-[36px] font-bold headings lg:leading-[56px]">
          Trusted by 100+ Clients
        </span>
      </div>
      <div className="marquee lg:mt-8">
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup1">
              <img src={el} className="imaGe" />
            </div>
          ))}
        </div>
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup1">
              <img src={el} className="imaGe" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScrollHeader1;
