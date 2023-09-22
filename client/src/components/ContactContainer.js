import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/ContactWrapper";
import ContactCardContainer from "./ContactCardContainer";

const ContactContainer = () => {
  
  const navigate = useNavigate();
  const [showStatus, setShowStatus] = useState(false);
  
  const handleSubmit = () => {
    setShowStatus(true);
    setTimeout(() => {
      navigate("/");
      window.scrollTo({
        top: 0,
        behavior: "auto", // You can use 'auto' for instant scrolling
      });
    },3000)
  }
  
  return (
    <Wrapper>
      <h1 className="contactUsTitle">Contact Us</h1>
      <p className="contactUsText">
        Let's get this conversation started. Tell us a bit about yourself, and
        we'll get back in touch as soon as possible.
      </p>
      <div className="contactInfoContainer">
        <div className="contactInfoName">
          <label className="contactInfoText">First Name</label>
          <input className = "contactInfoNameInput" type="text" />
        </div>
        <div className="contactInfoName">
          <label className="contactInfoText">Last Name</label>
          <input className = "contactInfoNameInput" type="text" />
        </div>
        <div className="contactInfoEmail">
          <label className="contactInfoText">Email</label>
          <input className = "contactInfoNameInput" type="email" />
        </div>
        <div className="contactInfoPhone">
          <label className="contactInfoText">Phone Number</label>
          <input className = "contactInfoNameInput" type="number" />
        </div>
        <div className="contactInfoText">
          <label className="contactInfoDropdown">Query Type</label>
          <select className = "contactInfoNameInput">
            <option value="1">Returns</option>
            <option value="2">Shipping</option>
            <option value="3">Order Status</option>
            <option value="4">Payment Options</option>
            <option value="5">Other</option>
          </select>
        </div>
        <div className="contactInfoMessage">
          <label className="contactInfoText">Message</label>
          <textarea className = "contactInfoMessageInput" rows="4" cols="50" type="text" />
        </div>
      </div>
      <ContactCardContainer />
      <div className = "contactButtonContainer">
        <button className = "contactButton" onClick = {handleSubmit}>Submit</button>
        { showStatus && <><span>Form successfully Submitted!! We will get back to you soon</span>
        <span>Redirecting you to home page...</span></>}
      </div>
    </Wrapper>
  );
};

export default ContactContainer;
