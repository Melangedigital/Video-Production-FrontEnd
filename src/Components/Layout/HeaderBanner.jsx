import React, { useState, useEffect, useRef } from "react";
import { bannerVideo } from "../../assets/video";
import { buttonArrow } from "../../assets/images";
import Typewriter from "typewriter-effect";

const HeaderBanner = () => {
  return (
    <div className="lg:max-w-[1440px] w-auto flex flex-col lg:flex-row lg:items-center lg:justify-center mx-auto px-5 lg:px-16 pt-28 lg:pt-20">
      <div className=" lg:w-[55%]">
        <div className="">
          <div className="space-y-5">
            <div
              id="typewriter-text"
              className="font-source relative w-auto mt-2"
            >
              <h1 className="headings text-left text-[28px] lg:text-[45px] font-semibold lg:font-bold">
                India's Leading <br className="lg:block hidden" />
              </h1>
              <h1 className="headings flex items-start justify-start -mt-3 text-[28px] text-left lg:text-[45px] font-semibold lg:font-bold whitespace-nowrap ">
                {" "}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Content")
                      .pauseFor("2000")
                      .deleteAll()
                      .typeString("Video")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Audio")
                      .pauseFor(2000)
                      .start();
                  }}
                  options={{ loop: true }} // Set loop option here
                />
                Production Agency
              </h1>
              <div className="w-[220px] lg:w-[380px] absolute left-2 lg:left-0 bottom-2 -z-10 h-3 bg-[#E0FF63]"></div>
            </div>
            <p className="font-nunito text-[18px] text-left lg:w-[596px]">
              At Mélange Digital, we redefine video production, seamlessly
              blending creativity with strategy. Our mission goes beyond the
              ordinary, ensuring each frame serves a dual purpose – an aesthetic
              delight and a solution-driven connection with your audience.{" "}
            </p>
            <p className="font-nunito text-[18px] text-left lg:w-[596px]">
              Let's collaborate to bring your brand's visual story to life, with
              the perfect blend of motion, video, audio, aesthetics, and
              strategy.
            </p>
            <div className="mt-4 flex justify-start">
              <a href="#contactus">
                <button className="bg-[#E0FF63] ctaButton flex text-[20px] items-center px-4 py-3 rounded-full font-nunito font-semibold">
                  Get Started{" "}
                  <span>
                    <img
                      src={buttonArrow}
                      alt=""
                      className="w-[25px] ml-2 h-[25px]"
                    />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] mt-10 lg:mt-0 mb-20 lg:mb-0">
        <video
          className="lg:w-[633px] scale-[1.1] lg:h-[533px]"
          src={bannerVideo}
          autoPlay
          loop
          // playsInline
          muted
        ></video>
      </div>
    </div>
  );
};

export default HeaderBanner;
