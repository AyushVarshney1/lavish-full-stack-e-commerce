import React from "react";
import Wrapper from "../assets/wrappers/RatingWrapper.js";
import { IconContext } from "react-icons";
import { BsStarFill, BsStar } from "react-icons/bs";
import { useAppContext } from "../context/appContext.js";

const Ratings = () => {
  const {handleChange} = useAppContext()

  const onClickHandler = (stars) =>{
    handleChange({name: "rating", value: stars})
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can use 'auto' for instant scrolling
    });
  }

  return (
    <Wrapper>
      <h4 className="filterHeader">CUSTOMER RATINGS</h4>
      <div className="ratings 4" onClick={() => onClickHandler(4)}>
        <IconContext.Provider value={{ color: "#FFB302", size: "20px" }}>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStar />
        </IconContext.Provider>
        <span className="ratingText">& Up</span>
      </div>
      <div className="ratings 3 top-margin" onClick={() => onClickHandler(3)}>
        <IconContext.Provider value={{ color: "#FFB302", size: "20px" }}>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStar />
          <BsStar />
        </IconContext.Provider>
        <span className="ratingText">& Up</span>
      </div>
      <div className="ratings 2 top-margin" onClick={() => onClickHandler(2)}>
        <IconContext.Provider value={{ color: "#FFB302", size: "20px" }}>
          <BsStarFill />
          <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
        </IconContext.Provider>
        <span className="ratingText">& Up</span>
      </div>
      <div className="ratings 1 top-margin" onClick={() => onClickHandler(1)}>
        <IconContext.Provider value={{ color: "#FFB302", size: "20px" }}>
          <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </IconContext.Provider>
        <span className="ratingText">& Up</span>
      </div>
    </Wrapper>
  );
};

export default Ratings;
