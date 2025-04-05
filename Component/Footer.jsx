import React from "react";
import "./Footer.css"; // Import CSS
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - Brand Info */}
        <div className="footer-section">
          <h2>TastyBites</h2>
          <p>Delicious food delivered fast & fresh. Your cravings, our priority!</p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="Home.jsx">Home</a></li>
            <li><a href="Menu.jsx">Menu</a></li>
            <li><a href="About.jsx">About</a></li>
            <li><a href="Contact.jsx">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Follow Us */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Column 4 - Newsletter */}
        <div className="footer-section">
          <h3>Subscribe</h3>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
  <p>© 2025 TastyBites | All Rights Reserved.</p>
  <p>Designed by <span className="designer-name">Samruddhi Amravatkar</span></p>
</div>
    </footer>
  );
};

export default Footer;
