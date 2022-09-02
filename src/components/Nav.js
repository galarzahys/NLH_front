import { useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


function Nav() {

  const [showMobileMenu, setShowMobileMenu] = useState("mobileMenuOff");


  const HandleMobileMenu = () => {
    if (showMobileMenu === "mobileMenuOff") {
      setShowMobileMenu("mobileMenuOn");
    } else {
      setShowMobileMenu("mobileMenuOff");
    }
  };
  return (
    <>
      <div className="navBar">
        <figure className="logo-container">
        <a href="#home">
            <img className="img-logo" src='./images/logo.png' alt="logo NLH" />
        </a>
        </figure>

        {/* Responsive Icons */}
        {showMobileMenu === "mobileMenuOff" ? (
          <FaBars className="hamburger" onClick={HandleMobileMenu} />
        ) : (
          <FaTimes className="hamburger" onClick={HandleMobileMenu} />
        )}

        <ul className={showMobileMenu + " ul-nav"}>
               <li><a className="li-nav" href="#about">About</a></li>
               <li><a className="li-nav" href="#tips">Hunters Tips</a></li>
               <li><a className="li-nav" href="#testimonials">Testimonials</a></li>
               <li><a className="li-nav" href="#contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
