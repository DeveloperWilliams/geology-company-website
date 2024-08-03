import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("home");
  const [isMenuVisible, setMenuVisibility] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    
    if (path === "/" || path === "/about-us" || path === "/contact") {
      setActive(path.substring(1) || "home");
    } else if (path.includes("/ground-water-management") ||
               path.includes("/geology-and-minerals") ||
               path.includes("/solar-system") ||
               path.includes("/grid-survey")) {
      setActive("services");
    } else {
      setActive("/");
    }
  }, [location]);
  

  const handleClick = (item) => {
    setActive(item);
    setMenuVisibility(false);
    localStorage.setItem("activeLink", item);
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
              className={active === "about-us" ? "active" : ""}
              onClick={() => handleClick("about-us")}
            >
              About Us
            </Link>
          </li>
          <li className={`services ${active === "services" ? "active" : ""}`}>
            Services
            <ul className="serviceUl">
              <li>
                <Link
                  className="serviceLinks"
                  to="/ground-water-management"
                  onClick={CloseUl}
                >
                  Groundwater Management
                </Link>
              </li>
              <li>
                <Link
                  className="serviceLinks"
                  to="/geology-and-minerals"
                  onClick={CloseUl}
                >
                  Geology and Minerals
                </Link>
              </li>
              <li>
                <Link
                  className="serviceLinks"
                  to="/solar-system"
                  onClick={CloseUl}
                >
                  Solar System
                </Link>
              </li>
              <li>
                <Link
                  className="serviceLinks"
                  to="/grid-survey"
                  onClick={CloseUl}
                >
                  Grid Survey
                </Link>
              </li>
            </ul>
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

      {/* Smaller Devices */}
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
          <li className={`services ${active === "services" ? "active" : ""}`}>
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
