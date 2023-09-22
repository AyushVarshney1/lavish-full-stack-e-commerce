import React from 'react'
import Wrapper from '../assets/wrappers/NavbarWrapper.js'
import { IconContext } from "react-icons";
import {CgProfile} from 'react-icons/cg'
import {BsCart3} from 'react-icons/bs'
import SearchContainer from './SearchContainer.js';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext.js';

const Navbar = () => {
  const navigate = useNavigate()
  const {removeFilters} = useAppContext()
  
  const navigateToHome = () =>{
    removeFilters()
    navigate('/')
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use 'auto' for instant scrolling
    });
  }
  const navigateToProducts = () =>{
    navigate('/products')
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use 'auto' for instant scrolling
    });
  }

  const navigateToContact = () =>{
    removeFilters()
    navigate('/contact')
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use 'auto' for instant scrolling
    });
  }

  return (
    <Wrapper>
        <img src = '/assets/images/logo_transparent.png' alt = "logo" className = 'logo'  onClick = {navigateToHome} />
        <div className = 'navbarLinks' onClick = {navigateToHome}>Home</div>
        <div className = 'navbarLinks' onClick = {navigateToProducts}>Shop</div>
        <div className = 'navbarLinksBig' onClick = {navigateToContact}>Contact Us</div>
        <SearchContainer />
        <IconContext.Provider value={{ size: "1.5em", className: "profileIcon" }}>
          <CgProfile />
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.5em", className: "cartIcon" }}>
          <BsCart3 />
        </IconContext.Provider>
    </Wrapper>
  )
}



export default Navbar