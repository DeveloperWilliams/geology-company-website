import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="logo">Logo</div>
        <ul>
          <Link>Home</Link>
          <Link>About Us</Link>
          <Link>Services</Link>
          <Link>Contanct Us</Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
