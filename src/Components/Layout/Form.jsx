import React, { useState, useRef } from "react";
import { ff1, ff2, ff3, ff4 } from "../../assets/images";
// import emailjs from '@emailjs/browser'
import { ProgressBar } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  // const [need, setNeed] = useState("");
  // const [budget, setBudget] = useState("");
  // const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    validateEmail(inputEmail);
  };

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|us)$/;
    const isValid = emailRegex.test(inputEmail);
    setIsValidEmail(isValid);
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleCompanyChange = (e) => {
    setCompanyName(e.target.value);
  };

  const formField = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidEmail) {
      try {
        setLoader(true);

        const formData = {
          fullName,
          email,
          phoneNumber,
          companyName,
          // need,
          // budget,
          // message,
        };

        // Replace 'http://localhost:3001' with your actual Node.js server URL
        const nodeServerURL =
          "https://confused-tuna-jacket.cyclic.app/submit-form";

        // Send data to Node.js backend
        const response = await axios.post(nodeServerURL, formData);

        // Reset form fields
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setCompanyName("");
        // setNeed("");
        // setBudget("");
        // setMessage("");

        setLoader(false);
        navigate("/thankyou");
        // Handle the response from the backend as needed
        console.log("Node.js Backend Response:", response.data);

        // Redirect or perform any other action after successful submission
      } catch (error) {
        console.error("Error submitting form to backend:", error);
        setLoader(false);
        setError("Error submitting form. Please try again later.");
      }
    } else {
      console.log("Please enter valid email");
    }
  };

  return (
    <div className="contactBG">
      {" "}
      <div
        className="  flex flex-col lg:flex-row lg:space-x-6 max-container lg:px-20 py-10 lg:py-0  px-5 font-nunito relative"
        id="contactus"
      >
        {" "}
        <div className="flex flex-col lg:w-[55%] items-left justify-center">
          <h3 className="headings lg:w-[589px] text-white text-[28px] lg:text-5xl font-semibold">
            Ready To Take Your <br className="lg:hidden block" /> Business To
            The Next Level?
          </h3>
          <p className="my-3 font-nunito text-white lg:w-[509px] text-base lg:text-lg">
            Talk to our video experts and discuss your business goals. We will
            help your brand achieve great awareness, leads and sales through our
            video content. Let's connect!
          </p>
          <p className="font-bold text-[24px] mt-[22px] lg:mt-[44px] mb-[11px] lg:mb-[22px] text-white">
            Our Top Clients:
          </p>
          <div className="flex items-end space-x-4 lg:space-x-8 object-cover">
            <img
              src={ff1}
              alt=""
              className="lg:w-[112px] h-[22px] lg:h-[37px]"
            />
            <img
              src={ff2}
              alt=""
              className="lg:w-[91px] h-[32px] lg:h-[47px]"
            />
            <img
              src={ff3}
              alt=""
              className="lg:w-[143px] h-[22px] lg:h-[32px]"
            />
            <img
              src={ff4}
              alt=""
              className="lg:w-[113px] h-[22px] lg:h-[28px]"
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="lg:w-[45%] my-10 lg:my-0 "
          ref={formField}
        >
          <div className="w-[100%] lg:w-[535px] rounded-[20px] lg:rounded-none bg-white py-10 bg-opacity-15">
            <div className="text-center text-white lg:text-[40px] headings  text-3xl font-semibold lg:leading-[48px] leading-[34px]">
              Contact Us
            </div>
            <div className="lg:px-[15%] text-center text-white lg:text-base mt-2 text-base font-normal lg:leading-[30px]">
              (Fill the form & get estimate within 24 hours)
            </div>
            <div className="px-5  max-container transition-all grid grid-cols-1  lg:gap-6 lg:gap-y-8 gap-y-6 lg:mt-9 mt-6 lg:px-[8%]">
              <input
                value={fullName}
                onChange={handleNameChange}
                required
                type="text"
                placeholder="Full Name*"
                className="w-full lg:w-[470px] outline-none rounded-[10px] font-nunito lg:h-12 h-[50px]  bg-white border border-white bg-opacity-5 p-3 text-[#fff] placeholder-[#fff]"
              />

              <input
                value={email}
                onChange={handleEmailChange}
                required
                type="email"
                placeholder="Email id*"
                className="w-full lg:w-[470px]  outline-none  transition-all font-nunito  lg:h-12 h-[50px] rounded-[10px]  bg-white border border-white bg-opacity-5 p-3 text-[#fff] placeholder-[#fff]"
              />

              {!isValidEmail && (
                <p
                  className="mt-0 absolute top-[18.3rem] text-[12px] text-left text-white"
                  id="email-error"
                >
                  Please enter a valid email address
                </p>
              )}
              <input
                value={phoneNumber}
                onChange={handlePhoneChange}
                required
                type="tel"
                placeholder="Phone no*"
                className="w-full lg:w-[470px] outline-none font-nunito transition-all  lg:h-12 h-[50px] rounded-[10px]  bg-white border-white bg-opacity-5 border p-3 text-[#fff] placeholder-[#fff]"
              />

              <input
                value={companyName}
                onChange={handleCompanyChange}
                required
                type="text"
                placeholder="Company Name*"
                className="w-full lg:w-[470px] outline-none rounded-[10px] font-nunito lg:h-12 h-[50px]  bg-white border border-white bg-opacity-5 p-3 text-[#fff] placeholder-[#fff]"
              />
              {/* 
              <select
                value={need}
                onChange={handleNeedChange}
                className="w-full lg:w-[470px] outline-none font-nunito transition-all lg:h-12 h-[39px] rounded-[10px]  bg-white bg-opacity-5 border border-white  px-2 text-[#fff]"
              >
                <option value="" disabled className="text-black">
                  What do you need*
                </option>
                <option value="Videography" className="text-black">
                  Videography
                </option>
                <option value="Photography" className="text-black">
                  Photography
                </option> */}
              {/* <option value="Audio">Audio</option>  */}
              {/* </select> */}

              {/* <select
                value={budget}
                onChange={handleBudgetChange}
                className="w-full lg:w-[470px] transition-all outline-none font-nunito lg:h-12 h-[39px] rounded-[10px]  bg-white border border-white bg-opacity-5 px-2 text-[#fff]"
              >
                <option value="" disabled className="text-black">
                  What is your budget*
                </option>
                <option value="1-3 Lakhs" className="text-black">
                  1-3 Lakhs
                </option>
                <option value="3-5 Lakhs" className="text-black">
                  3-5 Lakhs
                </option>
                <option value="6-9 Lakhs" className="text-black">
                  6-9 Lakhs
                </option>
                <option value="10 Lakhs & above" className="text-black">
                  10 Lakhs & above
                </option>
              </select> */}

              {/* <textarea
                value={message}
                onChange={handleMessageChange}
                placeholder="Your Brief*"
                className="w-full lg:w-[470px] transition-all
            outline-none font-nunito lg:h-[102px] h-[89px] rounded-[10px]
             border bg-white bg-opacity-5 border-white py-3 px-3
            text-[#fff] placeholder-[#fff] resize-none"
              ></textarea> */}
            </div>

            <div className="flex justify-center items-center lg:mt-8 mt-[19px]">
              {loader ? (
                <ProgressBar
                  height="80"
                  width="80"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass="progress-bar-wrapper"
                  borderColor="#800080"
                  barColor="#51E5FF"
                  loader={loader}
                />
              ) : (
                <button
                  type="submit"
                  className="w-full mx-5 lg:mx-8 h-11 px-[23px] py-0.5 bg-[#E0FF63] transition-all hover:text-white hover:bg-transparent border border-[#E0FF63] rounded-[100px] justify-center items-center gap-3 inline-flex font-nunito text-[#1a1a1a] text-xl font-semibold  leading-[35px]"
                >
                  Get Quote Within 24 Hours
                </button>
              )}
            </div>
            {/* {error && <p className="error">{error}</p>} */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
