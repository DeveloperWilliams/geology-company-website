import React from "react";
import "./hire.css";
import { Link } from "react-router-dom";

const Hire = () => {
  return (
    <>
      <div className="hire">
        <div className="left">
          <h3> Lease top-notch equipment from GeoTruth <br className="myBr" />today!</h3>
        </div>
        <div className="right">
         <Link>Lease Equipment Now</Link>
        </div>
      </div>
    </>
  );
};

export default Hire;
