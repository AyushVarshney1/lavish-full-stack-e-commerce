import React from "react";
import Wrapper from "../assets/wrappers/FilterWrapper.js";
import RadioFilter from "./RadioFilter.js";
import CheckboxFilter from "./CheckboxFilter.js";
import Ratings from "./Ratings.js";
import { useAppContext } from "../context/appContext.js";
import { AiFillDelete } from "react-icons/ai";
import { IconContext } from "react-icons";

const Filter = () => {
  const { handleChange, removeFilters } = useAppContext();

  const handleFilter = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for instant scrolling
    });
    handleChange({
      name: e.target.name,
      value: e.target.value.replaceAll(" ", ""),
    });
  };

  const handleRemoveFilters = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for instant scrolling
    });
    removeFilters()
  }

  const categoryItems = ["Men", "Women", "Kid", "Accessory"];
  const brandItems = [
    "Armani",
    "Calvin Klein",
    "Levi",
    "Louis Philippe",
    "Nike",
    "U.S. Polo Assn.",
  ];
  const typeItems = [
    "Tshirt",
    "Pant",
    "Shoe",
    "Underwear",
    "Bag",
    "Cap",
    "Wallet",
  ];
  const priceBracketItems = [
    "Under ₹1000",
    "₹1000 - ₹3000",
    "₹3000 - ₹5000",
    "Over ₹5000",
  ];
  return (
    <Wrapper>
      <div className="header">FILTERS</div>
      <div className="filterContainer">
        <RadioFilter
          categoryItems={categoryItems}
          header="CATEGORIES"
          handleFilter={handleFilter}
          name="category"
        />
        <CheckboxFilter checkboxItems={typeItems} header="TYPES" name="types" />
        <Ratings />
        <CheckboxFilter
          checkboxItems={brandItems}
          header="BRANDS"
          name="brands"
        />
        <RadioFilter
          categoryItems={priceBracketItems}
          header="PRICE"
          handleFilter={handleFilter}
          name="price"
        />
        <div className = "removeFilterButtonContainer">
          <button className="button-22" onClick = {handleRemoveFilters}>
            <IconContext.Provider value={{ size: "1.25em", className: "filterRemoveIcon" }}>
              <AiFillDelete />
            </IconContext.Provider>  
            Remove Filters
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Filter;
