import React, { useState } from "react";
import logo from "../images/Logo .svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/">
        <img src={logo} alt="little lemon logo"></img>
      </a>

      <FontAwesomeIcon className='menu-icon' onClick={toggleMenu} aria-label="navigation button" icon={faBars} />

      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Booking</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>

    </nav>
  );
};

export default Nav;