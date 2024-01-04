import React from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="nav-items">
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Navbar;