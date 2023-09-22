import React from "react";
import Wrapper from "../assets/wrappers/PageButtonWrapper.js";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { IconContext } from "react-icons";
import { useAppContext } from "../context/appContext";

const PageButtonContainer = () => {
  const { page, numOfPages, changePage } = useAppContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    changePage(newPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    changePage(newPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePageButtonClick = (pageNumber) =>{
    changePage(pageNumber)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Wrapper>
      <button className="prevButton" onClick={prevPage}>
        <IconContext.Provider
          value={{ size: "2em", className: "prevIconContainer" }}
        >
          <HiOutlineChevronLeft className="prevIcon" />
        </IconContext.Provider>
      </button>
      <div className="buttonContainer">
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={
                pageNumber === page ? "pageButton active" : "pageButton"
              }
              onClick={() => handlePageButtonClick(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className="nextButton" onClick={nextPage}>
        <IconContext.Provider value={{ size: "2em", className: "nextIcon" }}>
          <HiOutlineChevronRight />
        </IconContext.Provider>
      </button>
    </Wrapper>
  );
};

export default PageButtonContainer;
