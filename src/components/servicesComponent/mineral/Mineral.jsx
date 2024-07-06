import React from "react";
import "./mineral.css";

function Mineral() {
  return (
    <>
      <div className="mineral">
        <div className="top">
          <h6>Our Services</h6>
          <h5>MINING & GEOLOGY</h5>
        </div>
        <div className="bottom">
          <div className="upper">
            <div className="one">
              <img src="./mine1.webp" />
            </div>
            <div className="two">
              <h6>
                East Africa's Premier Mineral Prospecting and Resource Mapping
                Experts: Transforming Prospects into Assets.
              </h6>
              <p>
                Our mineral prospecting and resource mapping services ensure
                sustainable management of resources, securing valuable assets
                for various industries. Our expertise includes:
              </p>
              <ul>
                <li>
                  <img src="./checked.webp" />
                  Industrial minerals and rocks; construction rocks quarry
                  assessments and valuation.
                </li>
                <li>
                  <img src="./checked.webp" />
                  Hydrocarbons; geothermal vents.
                </li>
                <li>
                  <img src="./checked.webp" />
                  Heavy Metals such as gold, copper, etc.
                </li>
                <li>
                  <img src="./checked.webp" />
                  Rare Earth Elements (REEs).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mineral;
