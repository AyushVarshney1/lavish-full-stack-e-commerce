import React from "react";
import { BiSolidErrorCircle } from "react-icons/bi";
import {GrClose} from "react-icons/gr";
import { IconContext } from "react-icons";
import { useAppContext } from "../context/appContext";

const Alert = () => {

  const {closeAlert,alertText} = useAppContext()
  return (
    <IconContext.Provider
      value={{ color: "#842029", className: "boldAlertTextIcon" }}
    >
      <div className= 'alertContainer'>
      <div className="alert">
        <BiSolidErrorCircle />
        <p className="boldAlertText">Error :</p>
        <p className="alertText">{alertText}</p>
      </div>
      <div>
        <GrClose className = "alertCloseIcon" onClick = {()=>closeAlert()}/>
      </div>
      </div>
    </IconContext.Provider>
  );
};

export default Alert;
