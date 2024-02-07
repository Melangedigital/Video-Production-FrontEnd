// import React from "react";

// const VideoProductionLeadForm = () => {
//   return (
//     <div className="flex font-nunito justify-center items-center">
//       <iframe
//         width="610px"
//         height="830px"
//         className="element"
//         src="https://bigin.zoho.in/crm/WebFormServeServlet?rid=bddca627edf9312b66b9efc8e208b2e9a1f9a094d9b3e6ae1f2cbf339ec5a0f829c7bdee3f43949b7249423d216ed245gidbbe134a7a844d3ed48ad4f2ae44760b8f0f960328b4e4867d0b4ba0feccf0389"
//       ></iframe>
//     </div>
//   );
// };

// export default VideoProductionLeadForm;

// YourFormComponent.jsx
import React, { useState } from "react";
import axios from "axios";

const YourFormComponent = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendDataToBackend(formData);
    console.log("SUCCESS!!!");
  };

  const sendDataToBackend = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/submit-form",
        data
      );
      console.log("Backend Response:", response.data);
    } catch (error) {
      console.error("Error submitting form to backend:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourFormComponent;
