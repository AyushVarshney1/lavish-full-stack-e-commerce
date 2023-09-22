import React from "react";
import { Link } from 'react-router-dom';
import Wrapper from "../assets/wrappers/FooterWrapper.js";
import {
  BsPinterest,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { IconContext } from "react-icons";
import { useAppContext } from "../context/appContext.js";

const Footer = () => {

  const {handleChange} = useAppContext();

  const onClickWindowTopMen = ()=>{
    handleChange({name: "category", value: "Men"})
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use 'auto' for instant scrolling
    });
  }
  const onClickWindowTopWomen = ()=>{
    handleChange({name: "category", value: "Women"})
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use 'auto' for instant scrolling
    });
  }
  const onClickWindowTopKid = ()=>{
    handleChange({name: "category", value: "Kid"})
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use 'auto' for instant scrolling
    });
  }
  const onClickWindowTopAccessory = ()=>{
    handleChange({name: "category", value: "Accessory"})
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use 'auto' for instant scrolling
    });
  }

  const onClickWindowTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use 'auto' for instant scrolling
    });
  }

  return (
    <Wrapper>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="/#">about us</a>
                </li>
                <li>
                  <a href="/#">our services</a>
                </li>
                <li>
                  <a href="/#">privacy policy</a>
                </li>
                <li>
                  <a href="/#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <Link to="/contact" onClick={onClickWindowTop}>FAQ</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={onClickWindowTop}>shipping</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={onClickWindowTop}>returns</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={onClickWindowTop}>order status</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={onClickWindowTop}>payment options</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <Link to="/products" onClick={onClickWindowTopMen}>Men's</Link>
                </li>
                <li>
                  <Link to="/products" onClick={onClickWindowTopWomen}>Women's</Link>
                </li>
                <li>
                  <Link to="/products" onClick={onClickWindowTopKid}>Kid's</Link>
                </li>
                <li>
                  <Link to="/products" onClick={onClickWindowTopAccessory}>Accessories</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconContext.Provider value={{ size: "1.5em" }}>
                    <BsFacebook />
                  </IconContext.Provider>
                </a>
                <a
                  href="https://twitter.com/home?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconContext.Provider value={{ size: "1.5em" }}>
                    <BsTwitter />
                  </IconContext.Provider>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconContext.Provider value={{ size: "1.5em" }}>
                    <BsInstagram />
                  </IconContext.Provider>
                </a>
                <a
                  href="https://in.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconContext.Provider value={{ size: "1.5em" }}>
                    <BsPinterest />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
