import React, { useState, useRef } from "react";
import { melange_logo2, linkedin, instagram, web } from "../../assets/images";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#fff]">
      <div className="max-container pt-10 font-nunito px-5 lg:px-[100px]">
        <div className=" max-container flex lg:space-x-32 flex-col lg:flex-row text-white items-start ml-4 md:ml-0">
          <div className="flex flex-col justify-between ">
            <div>
              <img
                src={melange_logo2}
                alt=""
                className="mb-6 md:mb-0 w-24 h-24"
              />
              <div className="lg:w-[100%]  text-[#1a1a1a] text-base lg:font-semibold font-nunito leading-normal lg:mt-5 mt-2 ">
                We're a team of skilled and experienced filmmakers, producers,
                strategists, digital marketing analysts, and influencer project
                managers who specialize in crafting high-quality content &
                visuals that tell your brand’s story and give measurable
                results. We bring your brand’s vision to life by offering
                end-to-end services, from concept development to
                post-production. Let’s tell your story together.
              </div>
            </div>
          </div>
        </div>

        {/* Down links  */}
        <div className="mt-3 h-0.5 bg-[#564f4f]"></div>
        <div className=" text-white py-5 font-nunito text-right bg-[#fff]">
          <p className="text-sm md:text-base text-black">
            &copy; {new Date().getFullYear()} Mélange Digital. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
