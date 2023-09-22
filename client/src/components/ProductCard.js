import React, { useState } from "react";
import Wrapper from "../assets/wrappers/ProductCardWrapper.js";
import { IconContext } from "react-icons";
import { BsStarFill } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useAppContext } from "../context/appContext.js";

const ProductCard = ({ _id, Url, brand, name, price, rating, reviews }) => {

  const {handleChange, wishlisted} = useAppContext();
  const [wishlist, setWishlist] = useState(false);

  const handleWishlist = (_id) => {
    setWishlist(!wishlist);
    if (!wishlist) {
      handleChange({ name: "wishlisted", value: [...wishlisted, _id] });
    } else {
      handleChange({
        name: "wishlisted",
        value: wishlisted.filter((id) => id !== _id),
      });
    }
  };

  return (
    <Wrapper>
      <div className="productImageContainer">
        <div className="productReviewContainer">
          <p>{rating}</p>
          <IconContext.Provider value={{ color: "#FFB302", size: "15px" }}>
            <BsStarFill />
          </IconContext.Provider>
          |<p>{reviews}</p>
        </div>
        <IconContext.Provider value={{ className: "wishlistIcon" }}>
          {wishlist ? (
            <FaHeart onClick={() => handleWishlist(_id)} />
          ) : (
            <FaRegHeart onClick={() => handleWishlist(_id)} />
          )}
        </IconContext.Provider>

        <img src={Url} alt="" />
      </div>
      <div className="productInfo">
        <div className="productBrand">{brand}</div>
        <div className="productName">{name}</div>
        <div className="productPriceInfoContainer">
          <div className="productDiscountedPrice">₹{price}</div>
          <div className="productPrice">₹{price + 1000}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
