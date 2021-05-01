/** @format */

import React from "react";
import "./Navbar2.css";
import cat from "../../assets/cat.svg";
import dogs from "../../assets/walking-the-dog.svg";
import others from "../../assets/alien.svg";
import logo from "../../assets/pawprint.svg";

const Navbar2 = () => {
  return (
    <nav className="navbar2">
      <ul className="navbar2-nav">
        <li className="logo">
          <a href="#" className="nav-link">
            <span className="link-text logo-text">Fireship</span>
            <img src={logo} alt="backcpack" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src={cat} alt="cat" />
            <span className="link-text">Cats</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src={dogs} alt="cat" />
            <span className="link-text">Dogs</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src={others} alt="cat" />
            <span className="link-text">Others</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
