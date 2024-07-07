import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(
    localStorage.getItem("activeLink") || "home"
  );
  const [isMenuVisible, setMenuVisibility] = useState(false);

  useEffect(() => {
    localStorage.setItem("activeLink", active);
  }, [active]);

  const handleClick = (item) => {
    setActive(item);
    setMenuVisibility(false);
  };

  const CloseUl = () => {
    setMenuVisibility(false);
  };

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
          <li>
            <Link
              to="/"
              className={active === "home" ? "active" : ""}
              onClick={() => handleClick("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={active === "about" ? "active" : ""}
              onClick={() => handleClick("about")}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link className="services">
              Services
              <ul className="serviceUl">
                <li>
                  <Link className="serviceLinks" to="/ground-water-management">
                    Groundwater Management
                  </Link>
                </li>
                <li>
                  <Link className="serviceLinks" to="/geology-and-minerals">
                    Geology and Minerals
                  </Link>
                </li>
                <li>
                  <Link className="serviceLinks" to="/solar-system">
                    Solar System
                  </Link>
                </li>
                <li>
                  <Link className="serviceLinks" to="/grid-survey">
                    Griding Survey
                  </Link>
                </li>
              </ul>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={active === "contact" ? "active" : ""}
              onClick={() => handleClick("contact")}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Smaller Devices Devices */}
      <div className="container-small">
        <div className="top">
          <img className="my-logo" src="./geotruth.webp" alt="Logo-Geotruth" />
          <img src="./app.webp" alt="Menu" onClick={toggleMenu} />
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
          <li className="services">
            Services{" "}
            <div className="serviceUl">
              <Link
                onClick={CloseUl}
                className="serviceLinks"
                to="/ground-water-management"
              >
                Groundwater Management
              </Link>
              <Link
                onClick={CloseUl}
                className="serviceLinks"
                to="/geology-and-minerals"
              >
                Geology and Minerals
              </Link>
              <Link
                onClick={CloseUl}
                className="serviceLinks"
                to="/solar-system"
              >
                Solar System
              </Link>
              <Link
                onClick={CloseUl}
                className="serviceLinks"
                to="/grid-survey"
              >
                Grid Survey
              </Link>
            </div>
          </li>
          <Link
            to="/contact"
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
