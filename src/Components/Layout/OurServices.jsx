// TagSwitcher.js
import React, { useState } from "react";
import {
  service1,
  service2,
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  v7,
  v8,
  v9,
  ph1,
  ph2,
  ph3,
  ph4,
  ph5,
  ph6,
} from "../../assets/images";
import { service1Video } from "../../assets/video";

const TagSwitcher = () => {
  return (
    <div className="bg-[#151721] w-full ">
      <div id="services" className="max-container lg:mt-32">
        <div className="text-center text-white font-nunito mb-16 pt-16">
          <span className=" text-[36px] lg:text-5xl font-semibold headings leading-[56px]">
            Our{" "}
          </span>
          <span className=" text-[36px] lg:text-5xl font-semibold headings leading-[56px]">
            Services
          </span>
        </div>
        <div className="flex flex-col lg:flex-row font-nunito px-5 lg:px-20 mb-[50px] my-5 lg:items-center lg:space-x-12">
          <img
            src={service1Video}
            className="lg:w-[536px] bg-none h-auto scale-[1.1] lg:scale-100"
          />
          {/* <img src={service1} alt=""  /> */}
          <div>
            <div className="relative mt-20 lg:mt-0">
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-white font-nunito">
                Videography
              </h2>
              <div className="headBg absolute w-[150px] lg:w-[240px]  h-3 bottom-[-2px] opacity-75"></div>
            </div>
            <p className="text-white lg:w-[519px] font-light my-[15px] lg:my-[30px]">
              With every frame, our videography transforms reality into a visual
              journey, where each moment tells a story of its own.
            </p>
            <div className="grid text-white font-semibold text-[18px] gap-y-[30px] gap-x-[0px] grid-cols-1 lg:grid-cols-2">
              <p className="flex">
                {" "}
                <img src={v1} alt="" className="w-[30px] h-[30px] mr-2" />{" "}
                Product Videos
              </p>
              <p className="flex">
                <img src={v2} alt="" className="w-[30px] h-[30px] mr-2" />{" "}
                Influencer Marketing Videos
              </p>
              <p className="flex">
                <img src={v3} alt="" className="w-[30px] h-[30px] mr-2" />{" "}
                Digital Ads
              </p>
              <p className="flex">
                <img src={v4} alt="" className="w-[30px] h-[30px] mr-2" /> Live
                or Virtual Events Filming
              </p>
              <p className="flex">
                <img src={v5} alt="" className="w-[30px] h-[30px] mr-2" /> Brand
                Videos
              </p>
              <p className="flex">
                <img src={v6} alt="" className="w-[30px] h-[30px] mr-2" />{" "}
                Animation & Motion Graphics
              </p>
              <p className="flex">
                <img src={v7} alt="" className="w-[30px] h-[30px] mr-2" />{" "}
                Explainer Videos
              </p>
              <p className="flex">
                <img src={v8} alt="" className="w-[30px] h-[30px] mr-2" />{" "}
                Social Media Videos
              </p>
              <p className="flex">
                <img src={v9} alt="" className="w-[30px] h-[30px] mr-2" />{" "}
                Corporate Films
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row font-nunito px-5 lg:px-24 my-12 pb-20 lg:items-center lg:space-x-12">
          <div>
            <div className="relative mt-5 lg:mt-0">
              <h2 className="text-[28px] lg:text-[40px]  font-semibold  text-white font-nunito">
                Photography
              </h2>
              <div className="headBg absolute w-[170px] lg:w-[240px] h-3 bottom-[-2px] opacity-75"></div>
            </div>
            <p className="text-white lg:w-[519px] font-light my-[30px]">
              Beyond pixels and prints, our photography weaves stories,
              capturing not just images but the magic in every frame.
            </p>
            <div className="grid lg:w-[115%] text-white font-semibold text-[18px] gap-y-[30px] gap-x-[12px] grid-cols-1 lg:grid-cols-2">
              <p className="flex items-center">
                {" "}
                <img src={ph1} alt="" className="w-[30px] h-[30px] mr-2" />{" "}
                Industrial Photography
              </p>
              <p className="flex items-center">
                <img src={ph2} alt="" className="w-[30px] h-[30px] mr-2" />{" "}
                Fashion Phtography
              </p>
              <p className="flex items-center">
                <img src={ph3} alt="" className="w-[30px] h-[30px] mr-2" />{" "}
                Leadership Photography
              </p>
              <p className="flex items-center">
                <img src={ph4} alt="" className="w-[30px] h-[30px] mr-2" />
                Product Photography
              </p>
              <p className="flex items-center">
                <img src={ph5} alt="" className="w-[30px] h-[30px] mr-2" />
                Food Photography
              </p>
              <p className="flex items-center">
                <img src={ph6} alt="" className="w-[30px] h-[30px] mr-2" />{" "}
                E-commerce Photography
              </p>
            </div>
          </div>
          <img src={service2} alt="" className="lg:w-[582px] lg:h-[430px]" />
        </div>
      </div>
    </div>
  );
};

export default TagSwitcher;
