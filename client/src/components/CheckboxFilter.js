import React from "react";
import Wrapper from "../assets/wrappers/CheckboxWrapper.js";
import { useAppContext } from "../context/appContext.js";

const CheckboxFilter = ({ checkboxItems, header, name }) => {
  const { types, brands, handleChange } = useAppContext();

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const filterName = e.target.name;
    const selectedArray = filterName === "types" ? types : brands;
    if (e.target.checked) {
      handleChange({ name: filterName, value: [...selectedArray, value] });
    } else {
      handleChange({
        name: filterName,
        value: selectedArray.filter((type) => type !== value),
      });
    }
  };

  return (
    <Wrapper>
      <h4 className="filterHeader">{header}</h4>
      {checkboxItems.map((item, index) => {
        return (
          <label key={index} className="container">
            {item}
            <input
              type="checkbox"
              value={item}
              checked={
                name === "types"
                  ? types.includes(`${item}`)
                  : brands.includes(`${item}`)
              }
              onChange={handleCheckboxChange}
              name={name}
            />
            <span className="checkmark"></span>
          </label>
        );
      })}
    </Wrapper>
  );
};

export default CheckboxFilter;
