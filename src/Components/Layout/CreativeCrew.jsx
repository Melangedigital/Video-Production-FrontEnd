import React from "react";
import {
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  cc1,
  creative,
  n1,
  n2,
  n3,
} from "../../assets/images";

const CreativeCrew = () => {
  return (
    <div className=" bg-[#111822] py-[20px] lg:py-[40px]">
      <div className="relative max-container font-nunito lg:mt-[100px] mt-[70px] pb-[60px] lg:pb-0 px-5 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-10">
          <div>
            <img
              src={creative}
              alt=""
              className="lg:w-[579px] my-10 lg:my-0 object-contain lg:h-[619px]"
            />
          </div>
          <div className="headings mt-5 lg:mt-0 text-white ">
            <span className=" text-[36px] lg:text-5xl font-semibold  leading-[28px] lg:leading-[56px]">
              Your{" "}
            </span>
            <span className="text-[36px] lg:text-5xl font-semibold leading-[28px] lg:leading-[56px]">
              Creative Crew
            </span>
            <p className="lg:w-[593px] font-nunito mt-[11px] mb-[50px]">
              We're the maestros of the visual symphony, turning your brand's
              dreams into cinematic reality!{" "}
              <span className="font-bold">Lights, camera, action</span> – let's
              make your story unforgettable!
            </p>
            <div className="space-y-5">
              <div>
                <p className="font-semibold font-nunito text-[18px] lg:text-[22px]">
                  Strategist:
                </p>
                <div className="relative">
                  <img src={c1} alt="" className="w-[524px] h-[6px]" />
                  {/* <img
                    src={n3}
                    alt=""
                    className="absolute top-[-35px] w-[43px] h-[25px] object-contain right-[30px] lg:right-[125px] "
                  /> */}
                </div>
              </div>
              <div>
                <p className="font-semibold font-nunito text-[18px] lg:text-[22px]">
                  Scriptwriter:
                </p>
                <div className="relative">
                  <img src={c2} alt="" className="w-[524px] h-[6px]" />
                  {/* <img
                    src={n1}
                    alt=""
                    className="absolute top-[-35px] w-[43px] h-[25px] object-contain right-[60px] lg:right-[154px] "
                  /> */}
                </div>
              </div>
              <div>
                <p className="font-semibold font-nunito text-[18px] lg:text-[22px]">
                  Cinematographer:
                </p>
                <div className="relative">
                  <img src={c3} alt="" className="w-[524px] h-[6px]" />
                  {/* <img
                    src={n2}
                    alt=""
                    className="absolute top-[-35px] w-[43px] h-[25px] object-contain right-[20px] lg:right-[104px] "
                  /> */}
                </div>
              </div>
              <div>
                <p className="font-semibold font-nunito text-[18px] lg:text-[22px]">
                  Photographer:
                </p>
                <div className="relative">
                  <img src={c3} alt="" className="w-[524px] h-[6px]" />
                  {/* <img
                    src={n2}
                    alt=""
                    className="absolute top-[-35px] w-[43px] h-[25px] object-contain right-[20px] lg:right-[104px] "
                  /> */}
                </div>
              </div>
              <div>
                <p className="font-semibold font-nunito text-[18px] lg:text-[22px]">
                  Editor:
                </p>
                <div className="relative">
                  <img src={c5} alt="" className="w-[524px] h-[6px]" />
                  {/* <img
                    src={n2}
                    alt=""
                    className="absolute top-[-35px] w-[43px] h-[25px] object-contain right-[20px] lg:right-[104px] "
                  /> */}
                </div>
              </div>
              <div>
                <p className="font-semibold font-nunito text-[18px] lg:text-[22px]">
                  Analyst:
                </p>
                <div className="relative">
                  <img src={c6} alt="" className="w-[524px] h-[6px]" />
                  {/* <img
                    src={n1}
                    alt=""
                    className="absolute top-[-35px] w-[43px] h-[25px] object-contain right-[60px] lg:right-[154px] "
                  /> */}
                </div>
              </div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <img
          src={cc1}
          alt=""
          className="absolute bottom-2 right-0 w-[167px] h-[33px]"
        />
        <img
          src={cc1}
          alt=""
          className="absolute top-[-50px] transform rotate-180 left-0 w-[167px] h-[33px]"
        />
      </div>
    </div>
  );
};

export default CreativeCrew;
