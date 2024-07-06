// src/SpinningImage.js

import React from "react";
import "./loader.css";

const Loader = ({ imageUrl }) => {
  return (
    <>
      <div className="loader">
        <div className="spinning-border">
          <img src="./geotruth.webp" alt="Logo" className="spinning-image" />
        </div>
      </div>
    </>
  );
};

export default Loader;
