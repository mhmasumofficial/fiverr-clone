import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
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
    </div>
  );
}

export default Navbar;
