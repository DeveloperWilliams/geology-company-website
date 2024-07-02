import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <Link className="content">
          <div className="top">
            <img src="" alt="" />
          </div>
          <div className="lower">
            <h6>Ground Water Management</h6>
          </div>
        </Link>
        <Link className="content">
          <div className="top">
            <img src="" alt="" />
          </div>
          <div className="lower">
            <h6>Geology and Minerals</h6>
          </div>
        </Link>
        <Link className="content">
          <div className="top">
            <img src="" alt="" />
          </div>
          <div className="lower">
            <h6>Grid System</h6>
          </div>
        </Link>
        <Link className="content">
          <div className="top">
            <img src="" alt="" />
          </div>
          <div className="lower">
            <h6>Grid System</h6>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
