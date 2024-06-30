import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const handleClick = (item) => {
    setActive(item);
    setMenuVisibility(false)
  };

  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  return (
    <>
      {/* Larger Devices */}
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
          <Link className="services">Services</Link>
          <Link
            className={active === "contact" ? "active" : ""}
            onClick={() => handleClick("contact")}
          >
            Contact Us
          </Link>
        </ul>
      </div>

      {/* Smaller Devices Devices */}
      <div className="container-small">
        <div className="top">
          <img className="my-logo" src="./geotruth.webp" alt="Logo-Geotruth" />
          <img src="./menu.webp" alt="Menu" onClick={toggleMenu} />
        </div>
        <div className={`menu-content ${isMenuVisible ? "visible" : ""}`}>
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
          <Link className="services">Services</Link>
          <Link
            className={active === "contact" ? "active" : ""}
            onClick={() => handleClick("contact")}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
