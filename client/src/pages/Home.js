import React from "react";
import {
  Navbar,
  CardContainer,
  Promises,
  FashionBlogContainer,
  BrandContainer,
  Footer,
} from "../components";
import img from "../assets/images/Website_Banner.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="frontPageBannerContainer">
        <img src={img} alt="" className="frontPageBanner" />
        <button className="button-74" onClick = {() => navigate("/products")}>Shop Now</button>
      </div>
      <CardContainer /> 
      <BrandContainer />
      <FashionBlogContainer />
      {/* <div>Hello {user.name}</div> */}
      <Promises />
      <Footer />
    </>
  );
};

export default Home;
