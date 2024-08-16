import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9zipbjn",
        "template_88cysyl",
        e.target,
        "kuMtsRqMku0V5E3nr"
      )
      .then((result) => {
        console.log(result.text);
        toast.success("Form submitted successfully!");
      })
      .catch((error) => {
        console.log(error.text);
        toast.error("There was an error submitting the form.");
      });

    e.target.reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Phone number, email address, and location of GeoTruth Consult. Contact us for borehole drilling, mineral exploration, geological surveys, ground survey, and solar system installations."
        />
      </Helmet>
      <div className="contanct-home">
        <ToastContainer />
        <div className="top">
          <h3>Get In Touch</h3>
        </div>
        <div className="bottom">
          <div className="left">
            <form onSubmit={sendEmail}>
              <h6>Send Us a Message</h6>
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Names"
                  maxLength="35"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Your Phone Number"
                  maxLength="14"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  maxLength="35"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
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
                <img src="./telephone.webp" alt="Telephone" />
                +254 - 731 - 440843
              </Link>

              <Link to="mailto:info@geotruthconsult.org" target="_blank">
                <img src="./email.webp" alt="Email" />
                info@geotruthconsult.org
              </Link>
              <Link to="mailto:geotruthconsult@gmail.com" target="_blank">
                <img src="./gmail.png" alt="Email" />
                geotruthconsult@gmail.com
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
                  <img src="./youtube.webp" alt="YouTube" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/geotruth-consult-5052371a5/?originalSubdomain=ke"
                  target="_blank"
                >
                  <img src="./linkedin.webp" alt="LinkedIn" />
                </Link>
                <Link
                  to="https://www.facebook.com/geotruthconsult1/"
                  target="_blank"
                >
                  <img src="./facebook.webp" alt="Facebook" />
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
