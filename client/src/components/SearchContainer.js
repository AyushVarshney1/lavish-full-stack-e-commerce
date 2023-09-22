import React, { useState } from "react";
import Wrapper from "../assets/wrappers/SearchWrapper.js";
import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useAppContext } from "../context/appContext.js";
import { useNavigate } from "react-router-dom";

const SearchContainer = () => {
  const {handleChange} = useAppContext();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleChange({ name: "search", value: searchInput });
      navigate("/products");
      window.scrollTo({
        top: 0,
        behavior: "auto", // You can use 'auto' for instant scrolling
      });
    }
  };

  return (
    <Wrapper>
      <IconContext.Provider
        value={{ color: "#616161", size: "1.20em", className: "searchIcon" }}
      >
        <AiOutlineSearch />
      </IconContext.Provider>
      <input
        type="text"
        placeholder="Search for products"
        value={searchInput}
        onChange={handleSearchChange}
        onKeyDown={handleEnter}
      />
    </Wrapper>
  );
};

export default SearchContainer;
