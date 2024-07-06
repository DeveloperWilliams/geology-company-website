import React from "react";
import "./loader.css"; // 

const Loader = () => {
  return (
    <div className="loader">
      <div className="outer">
        <div className="inner">
          <img src="./geotruth.webp" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
