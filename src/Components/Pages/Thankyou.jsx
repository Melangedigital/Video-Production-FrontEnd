import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { buttonArrow, check2 } from "../../assets/images";
// import { thankyouGif } from "../../assets/video";

const Thankyou = () => {
  return (
    <div className="bg-[#fafafa]">
      <div className="max-container">
        <div className="font-nunito  flex flex-col  text-center pt-10 justify-center items-center">
          <img src={check2} alt="" className="w-[50px] h-[50px]" />
          <h1 className="font-bold text-[#3858ff] font-nunito lg:text-6xl text-4xl mt-8">
            Thank You !
          </h1>
          <p className="font-semibold font-nunito lg:text-[23px]  leading-[35px] text-sm lg:mt-5">
            for filling out our form! We've received your information.
          </p>
        </div>
        <div className="flex lg:items-center lg:px-20 lg:mt-10">
          <div>
            <h3 className="font-semibold text-center  leading-[70px] text-[40px] headings">
              Have an urgent need?
            </h3>
            <p className="text-center lg:text-[20px] mt-2 font-nunito">
              Our team is ready to provide swift assistance. Let's Schedule a
              convenient time for a discussion.
            </p>
            {/* <p className="text-2xl font-nunito my-5">
            Have an urgent need? Our team is ready to provide swift assistance.
            Let's Schedule a convenient time for a discussion-
          </p> */}
            {/* <div className="mt-4"> */}
            {/* <a
            href="https://calendly.com/sanket_melangedigital/melange-digital-digital-strategy"
            target="_blank"
          >
            <button className="bg-[#E0FF63]  ctaButton flex text-[20px] items-center px-4 py-3 rounded-full font-nunito font-semibold">
              Schedule a Call{" "}
              <span>
                <img
                  src={buttonArrow}
                  alt=""
                  className="w-[25px] ml-2 h-[25px]"
                />
              </span>
            </button>
          </a> */}
            {/* // </div> */}
            <iframe
              width={1200}
              src="https://calendly.com/sanket_melangedigital/melange-digital-digital-strategy"
              scrolling="no"
              // frameborder="0"
              className="h-[110vh] w-full p-5 lg:w-[1200px] rounded  overflow-hidden"
            ></iframe>
          </div>
          {/* <div>
          <img src={thankyouGif} alt="" />
        </div>  */}
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
