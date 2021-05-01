/** @format */

import React, { useState } from "react";
import "./NavbarNr1.css";

const NavbarNr1 = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const handleOpenAndCloseNavbar = () => {
    setOpenNavbar(!openNavbar);
  };
  return (
    <nav className="navbar">
      <div className="brand-title">Brand Name</div>
      <a onClick={handleOpenAndCloseNavbar} href="#" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={openNavbar ? "navbar-links active" : "navbar-links"}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarNr1;
