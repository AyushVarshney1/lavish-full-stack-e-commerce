import React from "react";
import Wrapper from "../assets/wrappers/ProductContainerWrapper.js";
import ProductCard from "./ProductCard.js";
import { useAppContext } from "../context/appContext";

const ProductContainer = () => {
  const { products, totalProducts, handleChange, wishlisted} = useAppContext();

  const onClickHandler = () => {
    console.log(wishlisted);
  };

  const selectHandler = (e) =>{
    let value = e.target.value
    if(value==="Price: Low to High"){
        value = "LowToHigh"
    }
    if(value==="Price: High to Low"){
        value = "HighToLow"
    }
    handleChange({name: "sort", value: value})
  }

  return (
    <Wrapper>
      <span className="productContainerHeader">Results</span>
      <div className="productSortContainer">
        <div className="numberOfItems" onClick={onClickHandler}>
          {totalProducts} {totalProducts > 1 ? "items" : "item"}
        </div>
        <div className="sortSelect">
          <select className="selectClass" defaultValue="" onChange = {selectHandler}>
            <option className="paddingSelect" value="" disabled>
              Sort By:
            </option>
            <option className="paddingSelect" value="Price: Low to High" >
              Price: Low to High
            </option>
            <option className="paddingSelect" value="Price: High to Low">
              Price: High to Low
            </option>
            <option className="paddingSelect" value="Ratings">
              Ratings
            </option>
          </select>
        </div>
      </div>
      <div className="products">
        {products.map((product) => {
          return (
            <ProductCard
              _id={product._id}
              rating={product.rating}
              reviews={product.reviews}
              brand={product.brand}
              name={product.name}
              price={product.price}
              Url={`/assets/productImages/${product.productURL}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ProductContainer;
