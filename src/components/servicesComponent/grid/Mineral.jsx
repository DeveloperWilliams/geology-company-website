import React from "react";
import "./mineral.css";

function Grid() {
  return (
    <>
      <div className="mineral">
        <div className="top">
          <h6>Our Services</h6>
          <h5>GRIDDING SURVEY</h5>
        </div>
        <div className="bottom">
          <div className="upper">
            <div className="one">
              <img src="./geo8.webp" />
            </div>
            <div className="two">
              <h6>
                Geotechnical Gridding Experts, turning your visions into
                reality.
              </h6>
              <p>
                Our geotechnical gridding services are designed to provide
                precise and reliable subsurface information for a variety of
                applications.
              </p>
              <ul>
                <li>
                  <img src="./checked.webp" />
                  Accurate Subsurface Mapping: Precise mapping for construction,
                  mining, and environmental projects.
                </li>
                <li>
                  <img src="./checked.webp" />
                  Soil and Rock Sampling: Detailed sampling to analyze
                  geotechnical properties for stability and safety.
                </li>
                <li>
                  <img src="./checked.webp" />
                  Ground Penetrating Radar (GPR): Detecting and mapping
                  underground utilities and structures without excavation.
                </li>
                <li>
                  <img src="./checked.webp" />
                  Seismic Refraction Surveys: Determining soil and rock layer
                  depths and compositions.
                </li>
                <li>
                  <img src="./checked.webp" />
                  Geotechnical Data Analysis: Comprehensive data analysis and
                  actionable reports.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
