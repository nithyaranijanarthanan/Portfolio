import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <p className="section-description">
          Feel free to get in touch with me. I’m open to opportunities,
          collaborations!
        </p>

        <div className="contact-wrapper">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <div className="info-box">
              <h4>Address</h4>
              <p>Madurai, Tamil Nadu</p>
            </div>
            <div className="info-box">
              <h4>Phone</h4>
              <p>+91 9361618502</p>
            </div>
            <div className="info-box">
              <h4>Email</h4>
              <p>nithyajanarthanan2@gmail.com</p>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="contact-map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=9.9145067,78.1156448&hl=en&z=15&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
