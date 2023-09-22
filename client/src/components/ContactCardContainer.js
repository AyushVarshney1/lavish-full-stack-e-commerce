import React, { useState } from "react";
import Wrapper from "../assets/wrappers/ContactCardWrapper";
// import { MdPhoneInTalk } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { PiChatsFill } from "react-icons/pi";
import { IconContext } from "react-icons";

const ContactCardContainer = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handlePhoneClick = () => {
    setSelectedContact("phone");
  };

  const handleChatClick = () => {
    setSelectedContact("chat");
  };

  return (
    <Wrapper>
      <h3 className="contactCardContainerTitle">
        How would you like us to contact you?
      </h3>
      <div className="contactCardsContainer">
        <div
          className={
            selectedContact === "phone" ? "contactCard active" : "contactCard"
          }
          onClick={handlePhoneClick}
        >
          <IconContext.Provider
            value={{ size: "3em", className: "contactIcon" }}
          >
            <RiCustomerService2Fill />
          </IconContext.Provider>
          <h3 className = "contactCardTitle">Talk through call</h3>
          <p className = "contactCardText">A customer service representative will get in touch with you</p>
        </div>
        <div
          className={
            selectedContact === "chat" ? "contactCard active" : "contactCard"
          }
          onClick={handleChatClick}
        >
          <IconContext.Provider
            value={{ size: "3em", className: "contactIcon" }}
          >
            <PiChatsFill />
          </IconContext.Provider>
          <h3 className = "contactCardTitle">Talk through live chat</h3>
          <p className = "contactCardText">Our support team will get in touch with you on whatsapp</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactCardContainer;
