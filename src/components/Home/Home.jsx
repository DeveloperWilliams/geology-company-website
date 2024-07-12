import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <Link to="/ground-water-management">
          <div className="myservices">
            <img src="groundwater.webp" alt="Sample Image"></img>
            <div className="txt">
              <h1>Groundwater Management</h1>
            </div>
          </div>
        </Link>
        <Link to="/geology-and-minerals">
          <div className="myservices">
            <img src="mine1.webp" alt="Sample Image"></img>
            <div className="txt">
              <h1>Geology and Mineral</h1>
            </div>
          </div>
        </Link>
        <Link to="/solar-system">
          <div className="myservices">
            <img src="solar1.webp" alt="Sample Image"></img>
            <div className="txt">
               <h1>Solar System</h1>
            </div>
          </div>
        </Link>
        <Link to="/grid-survey">
          <div className="myservices">
            <img src="sv.webp" alt="Sample Image"></img>
            <div className="txt">
              <h1>Gridding Survey</h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
