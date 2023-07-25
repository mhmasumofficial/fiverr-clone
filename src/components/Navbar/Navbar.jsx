import React, { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);

  

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <span className="logo-text">fiverr</span>
            <span className="dot">.</span>
          </div>
          <div className="nav-links">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Become a Seller</span>
            <span>Sign In</span>
            <button>Join</button>
          </div>
        </div>
      </div>

      <hr />
      <div className="menu">
        <span>Graphics & Design</span>
        <span>Video & Animation</span>
        <span>Writing & Translation</span>
        <span>AI Services</span>
        <span>Digital Marketing</span>
        <span>Music & Audio</span>
        <span>Programming & Tech</span>
        <span>Business</span>
        <span>Lifestyle</span>
      </div>
    </div>
  );
}

export default Navbar;
