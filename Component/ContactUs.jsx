import React from "react";
import "./ContactUs.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-section">
      <h1 className="contact-title">📩 Contact Us</h1>
      <p className="contact-subtext">We’re here to help! Reach out to us anytime.</p>

      <div className="contact-details">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <h3>Call Us</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <h3>Email Us</h3>
          <p>hello@yourbusiness.com</p>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Visit Us</h3>
          <p>456, Food Street, Pune, India</p>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
