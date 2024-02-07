import React from "react";
// import { useSpring, animated } from "react-spring";

const AutoScrollHeader1 = ({ images, title }) => {
  return (
    <div className="lg:pt-[20px] pt-[10px] ">
      <div className="marquee">
        <div className="marqueeGroupSec">
          {images.map((el, index) => (
            <div key={index} className="imageGroup2">
              <img src={el} className="imaGe2" />
            </div>
          ))}
        </div>
        <div className="marqueeGroupSec">
          {images.map((el, index) => (
            <div key={index} className="imageGroup2">
              <img src={el} className="imaGe2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScrollHeader1;
