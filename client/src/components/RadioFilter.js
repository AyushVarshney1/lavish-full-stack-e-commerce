import React from "react";
import Wrapper from "../assets/wrappers/RadioFilterWrapper.js";

const RadioFilter = ({categoryItems, header, handleFilter, name}) => {
  return (
    <Wrapper>
      <h4 className="filterHeader">{header}</h4>
      {categoryItems.map((item, index) => {
        return (
          <label key = {index} className="container">
            {item}
            <input type="radio" name= {name} value = {item} onChange={handleFilter}/>
            <span className="checkmark"></span>
          </label>
        );
      })}
    </Wrapper>
  );
};

export default RadioFilter;
