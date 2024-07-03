import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="hero">
        <h3>Our Services</h3>
        <div className="home">
          <Link className="content">
            <div className="top">
              <img src="./hole.webp" alt="borehole" />
            </div>
            <div className="lower">
              <h6>Ground Water Management</h6>
              <p>
                We specialize in efficient ground water management and borehole
                drilling to secure a sustainable water supply
              </p>
            </div>
          </Link>
          <Link className="content">
            <div className="top">
              <img src="./mine.webp" alt="Ground" />
            </div>
            <div className="lower">
              <h6>Geology and Minerals</h6>
              <p>
                Our geology and mineral services offer detailed analysis and
                exploration to uncover valuable natural resources.
              </p>
            </div>
          </Link>
          <Link className="content">
            <div className="top">
              <img src="./solar.webp" alt="solar" />
            </div>
            <div className="lower">
              <h6>Solar Systems</h6>
              <p>
                We provide expert solar installation services to harness clean
                and renewable energy for your home or business.
              </p>
            </div>
          </Link>
          <Link className="content">
            <div className="top">
              <img src="./sv.webp" alt="survey" />
            </div>
            <div className="lower">
              <h6>Griding Survey</h6>
              <p>
                Our precision griding survey services ensure accurate land
                measurements for your projects.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
