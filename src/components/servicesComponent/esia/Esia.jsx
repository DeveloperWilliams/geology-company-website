import React from "react";
import "./esia.css";

function Esia() {
  return (
    <>
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
              <h6>
                We're East Africa's leading solar installation specialists,
                transforming solar potential into sustainable energy solutions.
              </h6>
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
