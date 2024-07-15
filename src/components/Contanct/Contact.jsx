import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contanct-home">
        <div className="top">
          <h3>Get In Touch</h3>
        </div>
        <div className="bottom">
          <div className="left">
            <form>
              <h6>Send Us a Message</h6>
              <div>
                <input
                  type="text"
                  placeholder="Full Names"
                  maxLength="35"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  maxLength="14"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email Addres"
                  maxLength="35"
                  required
                />
              </div>
              <div>
                <textarea
                  name="msg"
                  placeholder="Leave Your Message..."
                  maxLength="500"
                  required
                />
              </div>
              <div>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
          <div className="right">
            <h6>Talk With Us</h6>
            <ul>
              <Link to="tel:+254731440843">
                <img src="./telephone.webp" alt="Whats" />
                +254 - 731 - 440843
              </Link>
              <Link to="http://wa.link/402pta" target="_blank">
                <img src="./whatsapp.webp" alt="Whats" />
                +254 - 731 - 440843
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
            <div className="follow">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
