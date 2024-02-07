import React from "react";
import {
  i1,
  i2,
  i10,
  i11,
  i12,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
} from "../../assets/images";

const IndustriesAutoScroll = () => {
  return (
    <div
      className=" pt-[60px] lg:pt-[144px] pb-[70px] lg:pb-[150px] flex flex-col justify-center items-center "
      id="industries"
    >
      <div className="headings mb-5 text-center lg:mb-[45px]">
        <span className="text-black lg:text-5xl  text-[36px] font-semibold leading-[50px]  lg:leading-[56px]">
          Industries We Served
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-[30px] gap-y-[24px]">
        <img src={i1} alt="" className="w-[170px] h-[117px]" />
        <img src={i2} alt="" className="w-[170px] h-[117px]" />
        <img src={i3} alt="" className="w-[170px] h-[117px]" />
        <img src={i4} alt="" className="w-[170px] h-[117px]" />
        <img src={i5} alt="" className="w-[170px] h-[117px]" />
        <img src={i11} alt="" className="w-[170px] h-[117px]" />
        <img src={i6} alt="" className="w-[170px] h-[117px]" />
        <img src={i7} alt="" className="w-[170px] h-[117px]" />
        <img src={i8} alt="" className="w-[170px] h-[117px]" />
        <img src={i9} alt="" className="w-[170px] h-[117px]" />
        <img src={i12} alt="" className="w-[170px] h-[117px]" />
        <img src={i10} alt="" className="w-[170px] h-[117px]" />
      </div>
    </div>
  );
};

export default IndustriesAutoScroll;
