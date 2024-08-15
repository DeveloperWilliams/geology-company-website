import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn more about GeoTruth Consult, We provide Borehole drilling, Mineral exploration, Geological surveys, Ground survey, and Solar system installations. Your trusted partner in sustainable resource management and energy solutions."
        />
      </Helmet>
      <div className="about-div">
        <div className="top">
          <h5>About Us</h5>
          <h4>Who We Are</h4>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="vision">
              <h6>Our Vision</h6>
              <p>GeoTruth Consult aims to be recognised as:</p>
              <ul>
                <li>
                  <img className="mark" src="./checked.webp" />A partner of
                  choice by our clients;
                </li>
                <li>
                  <img className="mark" src="./checked.webp" />
                  Delivering services based on real needs;
                </li>
                <li>
                  <img className="mark" src="./checked.webp" />
                  Technologically advanced in our fields of expertise while
                  remaining practical and business oriented;
                </li>
                <li>
                  <img className="mark" src="./checked.webp" />
                  Being worthy of clients’ confidence by remaining accountable
                  for our actions
                </li>
                <li>
                  <img className="mark" src="./checked.webp" />
                  Adding value to clients’ projects;
                </li>
              </ul>
            </div>
            <div className="mission">
              <h6>Our Mission</h6>
              <p>
                GeoTruth Consult provides expert advice and solutions for
                clients requiring specialised services, mainly in the fields of
                groundwater quality and quantity evaluation, geotechnics,
                renewable energy, wastewater management and the environment.
              </p>
            </div>
            <div>
              <Link>Contanct Us</Link>
            </div>
          </div>
          <div className="right">
            <img src="./ground.webp" />
          </div>
        </div>

        {/** lower */}

        <div className="lower">
          <div className="philosophy">
            <h6>Our Philosophy</h6>
            <div>
              <p>
                <em>Clients:</em> GeoTruth Consult believes that their success
                is intertwined with the success of their clients. They emphasize
                that every project they undertake is crucial and contributes to
                their overall success, ensuring that each client's project
                succeeds.
              </p>
              <p>
                <em>Staff:</em> The firm’s performance and abilities are only as
                good as the staff we are able to attract, develop and retain.
              </p>
              <p>
                <em>Technology:</em> A cornerstone of GeoTruth Consult’s
                philosophy is to develop and embrace new technologies and
                methodologies to the advantage of our clients and our business.
              </p>
              <p>
                <em>Co-operation:</em>
                GeoTruth Consult fosters collaboration and communication among
                its human resources and stakeholders, partnering locally and
                internationally for optimal client benefit.
              </p>
              <p>
                <em>Growth:</em> It is GeoTruth Consult’s view that growth of
                our business must be in response to the requirements of clients.
                Growth can only be pursued with a carefully selected team.
              </p>
            </div>
          </div>
          <div className="policies">
            <div className="left">
              <img src="./policies.webp" />
            </div>
            <div className="right">
              <h6>Our Policy</h6>
              <p>
              </p>
              <ul>
                <li>
                  <div>
                    <img className="mark" src="./checked.webp.png" />
                  </div>
                  <em>1.</em> Identifying and meeting customer requirements
                </li>
                <li>
                  <div>
                    <img className="mark" src="./checked.webp" />
                  </div>
                  <em>2.</em> Ensuring compliance with all applicable
                  regulations and requirements regarding the services provided;
                </li>
                <li>
                  <div>
                    <img className="mark" src="./checked.webp" />
                  </div>
                  <em>3.</em> Recruiting highly qualified staff and improving
                  the skills of employees in order to maintain the quality of
                  products and services that meet, or exceed, customer
                  expectations;
                </li>
                <li>
                  <div>
                    <img className="mark" src="./checked.webp" />
                  </div>
                  <em>4.</em> Optimizing the performance and maintaining strict
                  monitoring protocols of the project throughout its duration in
                  order to meet desired requirements;
                </li>
                <li>
                  <div>
                    <img className="mark" src="./checked.webp" />
                  </div>
                  <em>5.</em> Continually identifying, assessing and
                  implementing measures and steps that improve the firm’s
                  Quality Management System.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/** lower */}

        {/** WhatsApp */}

      </div>
    </>
  );
}

export default About;
