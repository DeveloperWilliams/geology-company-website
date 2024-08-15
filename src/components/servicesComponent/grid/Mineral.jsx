import React from "react";
import "./mineral.css";
import YouTubeEmbed from "../Youtube/Youtube";
import { Helmet } from "react-helmet";

function Grid() {
  return (
    <>
      <Helmet>
        <title>Gridding Survey</title>
        <meta
          name="description"
          content="Get specialized Gridding Survey services from GeoTruth Consult, where our experts provide precise and professional solutions tailored to your specific needs."
        />
      </Helmet>
      <div className="mineral">
        <div className="top">
          <h6>Our Services</h6>
          <h5>GRIDDING SURVEY</h5>
        </div>
        <div className="bottom">
          <div className="upper">
            <div className="one">
              <img src="./gri.webp" />
            </div>
            <div className="two">
              <h6></h6>
              <ul>
                <p>
                  No single project will have an exact outcome. As such, we
                  understand that different environmental settings will pose
                  different challenges to the project implementation. Thus, we
                  employ specific or a combination of tools and geophysical
                  techniques to study a site for more accurate and actionable
                  deductions. Most notably, we conduct gridding surveys. <br />
                  <br />
                  <em> Why Gridding Surveys?</em>
                </p>
                <p>
                  3D Gridding surveys involve conducting closely spaced
                  soundings in a grid format (see Fig), covering the target
                  area, to delineate subsurface conditions. This scope,
                  recommended for properties larger than 2 acres, is more
                  refined, and highest resolution depicting the distribution of
                  target aquifers and their variation is achieved for higher
                  confidence. The technique is best for detecting the geometry
                  of saline water intrusion or fractured aquifers in low success
                  areas.
                </p>
                <p>
                  The images are excerpts from aquifer characterisation studies
                  conducted at Thitani, Mwingi Subcounty, Kitui County in the
                  recent past. The 80-acre property was gridded at 20m intervals
                  on both the x- and y- planes to map the geometry of the
                  underlying aquifer after three drilling attempts yielded
                  undesirable results: first two attempts turned DRY; third
                  attempt tapped into an aquifer discharging 2m<sup>3</sup>hr
                  <sup>-1</sup>&nbsp;of saline water
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="yt">
        <YouTubeEmbed videoId="dk9Xvl6r9bs" />
      </div>
    </>
  );
}

export default Grid;
