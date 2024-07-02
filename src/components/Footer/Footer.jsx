import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about-us">About</Link>
              <Link to="/">Services</Link>
              <Link to="/contact">Contacts</Link>
            </ul>
          </div>
          <div className="Fservices">
            <h3>Services</h3>
            <ul>
              <Link to="/ground-water-management">Groundwater Management</Link>
              <Link to="/geology-and-minerals">Geology and Minerals</Link>
              <Link to="/solar-system">Solar System</Link>
              <Link to="/grid-system">Grid Systems</Link>
            </ul>
          </div>
          <div className="conta">
            <h3>Contacts</h3>
            <ul>
              <Link to="tel:+254731440843">
                <img src="./telephone.webp" alt="Whats" />
                +254 731 440843
              </Link>
              <Link to="http://wa.link/402pta" target="_blank">
                <img src="./whatsapp.webp" alt="Whats" />
                +254 731 440843
              </Link>
              <Link to="mailto:nfo@geotruthconsult.org" target="_blank">
                <img src="./email.webp" alt="Email" />
                info@geotruthconsult.org
              </Link>
              <Link
                to="https://maps.app.goo.gl/gtXgnGNKSHwtEcgPA"
                target="_blank"
              >
                <img src="./placeholder.webp" alt="Location" />
                Forest Line Road, Nairobi
              </Link>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h6>Follow Us</h6>
            <ul>
              <Link
                to="https://www.youtube.com/@geotruthconsult1318"
                target="_blank"
              >
                <img src="./youtube.webp" alt="Youtube" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/geotruth-consult-5052371a5/?originalSubdomain=ke"
                target="_blank"
              >
                <img src="./linkedin.webp" alt="Location" />
              </Link>
              <Link
                to="https://www.facebook.com/geotruthconsult1/"
                target="_blank"
              >
                <img src="./facebook.webp" alt="Location" />
              </Link>
            </ul>
          </div>
          <hr />
          <div>
            <p>
              Copyright @ 2024 Geotruth Consult <br />{" "}
              <em>
                Designed by{" "}
                <Link to="http://wa.link/uy0uvo" target="_blank">
                  William Achuchi
                </Link>
              </em>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
