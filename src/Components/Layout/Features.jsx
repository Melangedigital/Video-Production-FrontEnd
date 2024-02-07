import React from "react";
import { fe1, fe2, fe3, fe4 } from "../../assets/images";

const Features = () => {
  return (
    <div className="pt-[70px] lg:pt-[140px]">
      <h2 className="headings text-center font-semibold text-[44px] lg:text-[48px]">
        Our Key Features
      </h2>
      <div className="grid font-nunito max-container grid-cols-1 gap-[30px] pt-9 px-5 lg:px-24 lg:grid-cols-2">
        <div className="w-auto space-y-3 shadowDrop rounded-[12px] h-auto lg:h-[200px] p-6">
          <img src={fe1} alt="" className="w-[44px] h-[44px]" />
          <h3 className="font-bold text-2xl">Highest Quality Output</h3>
          <p className="text-lg">
            Deployment of industry's most cutting-edge equipment for{" "}
            <br className="lg:block hidden" /> production.
          </p>
        </div>
        <div className="w-auto space-y-3 shadowDrop rounded-[12px] h-auto lg:h-[200px] p-6">
          <img src={fe2} alt="" className="w-[44px] h-[44px]" />
          <h3 className="font-bold text-2xl">Cost-effective Solutions</h3>
          <p className="text-lg">
            Cost-optimization using advanced pre-production + post-production
            tools and techniques.
          </p>
        </div>
        <div className="w-auto space-y-3 shadowDrop rounded-[12px] h-auto lg:h-[200px] p-6">
          <img src={fe3} alt="" className="w-[44px] h-[44px]" />
          <h3 className="font-bold text-2xl">Swiftest Turnaround Time</h3>
          <p className="text-lg">
            Well-defined processes + perfectly-aligned teams for quickest
            deliveries.
          </p>
        </div>
        <div className="w-auto space-y-3 shadowDrop rounded-[12px] h-auto lg:h-[200px] p-6">
          <img src={fe4} alt="" className="w-[44px] h-[44px]" />
          <h3 className="font-bold text-2xl">
            Complimentary Strategy and Content Inputs
          </h3>
          <p className="text-lg">
            Data-driven content-optimization suggestions by leading
            industry-experts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
