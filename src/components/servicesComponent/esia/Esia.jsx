import React from "react";
import "./esia.css";
import { Helmet } from "react-helmet";

function Esia() {
  return (
    <>
      <Helmet>
        <title>Solar Systems</title>
        <meta
          name="description"
          content="GeoTruth Consult provides Solar Systems design and installation services, including Pumping solutions, domestic off-grid and hybrid systems. Contact us for sustainable solar energy management."
        />
      </Helmet>
      <div className="esia">
        <div className="top">
          <h6>Our Services</h6>
          <h5>Solar Systems</h5>
        </div>
        <div className="bottom">
          <div className="upper">
            <div className="one">
              <img src="./solar1.webp" />
            </div>
            <div className="two">
              <p>
                Our Solar Installation Services promote sustainable solar energy
                management, safeguarding assets across industries and advancing
                renewable energy initiative
              </p>
              <ul>
                <li>
                  <img src="./checked.webp" />
                  ESIA studies for proposed groundwater and development
                  projects.
                </li>
                <li>
                  <img src="./checked.webp" />
                  Energy Audits.
                </li>
                <li>
                  <img src="./checked.webp" />
                  Solar Systems design and installation: Pumping solutions;
                  domestic off-grid and hybrid systems.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Esia;
