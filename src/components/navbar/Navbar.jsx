import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="./geotruth.webp" alt="Logo-Geotruth" />
          </Link>
        </div>
        <ul>
          <Link
            to="/"
            className={active === "home" ? "active" : ""}
            onClick={() => handleClick("home")}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={active === "about" ? "active" : ""}
            onClick={() => handleClick("about")}
          >
            About Us
          </Link>
          <Link className="services">
            Services
          </Link>
          <Link
            className={active === "contact" ? "active" : ""}
            onClick={() => handleClick("contact")}
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
