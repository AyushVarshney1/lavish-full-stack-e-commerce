import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import {AiOutlineClockCircle} from 'react-icons/ai'
import {RiSecurePaymentFill} from 'react-icons/ri'
import Wrapper from "../assets/wrappers/PromiseWrapper.js";
import { IconContext } from "react-icons";

const Promises = () => {
  return (
    <div className = 'mainPromisesContainer'>
    <Wrapper>
      <div className = 'promiseContainer'>
        <IconContext.Provider value={{ size: "4em" }}>
          <LiaShippingFastSolid />
        </IconContext.Provider>
        <div className="promiseTextContainer">
          <p className="boldPromise">Free Shipping</p>
          <p className="promiseText">For orders above ₹500</p>
        </div>
      </div>
      <div className = 'promiseContainer'>
        <IconContext.Provider value={{ size: "4em" }}>
          <AiOutlineClockCircle />
        </IconContext.Provider>
        <div className="promiseTextContainer">
          <p className="boldPromise">Delivery On Time</p>
          <p className="promiseText">We keep promises</p>
        </div>
      </div>
      <div className = 'promiseContainer noRightBorder'>
        <IconContext.Provider value={{ size: "4em" }}>
          <RiSecurePaymentFill />
        </IconContext.Provider>
        <div className="promiseTextContainer ">
          <p className="boldPromise">Secure Payment</p>
          <p className="promiseText">No fraud guarantee</p>
        </div>
      </div>
    </Wrapper>
    </div>
  );
};

export default Promises;
