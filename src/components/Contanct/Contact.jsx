import React from "react";
import "./contact.css";

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
                  placeholder="Your Message"
                  maxLength="500"
                  required
                />
              </div>
              <div>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
          <div className="right">Right</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
