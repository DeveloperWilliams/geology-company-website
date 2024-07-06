// src/SpinningImage.js

import React from "react";
import "./loader.css";

const Loader = ({ imageUrl }) => {
  return (
    <>
      <div className="loader">
        <div className="outer">
          <div className="inner"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
