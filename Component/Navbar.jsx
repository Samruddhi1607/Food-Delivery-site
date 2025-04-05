import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHome, FaUtensils, FaInfoCircle, FaPhone, FaSignInAlt, FaBars, FaTimes , FaStar} from "react-icons/fa"; // Import Icons
import "./Navbar.css";

function Navbar({ isLoggedIn, cartItemCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-container">
      <nav className="navbar-container">
        {/* Brand Name */}
        <div className="brand-name">
          <h1><FaUtensils /> TastyBites</h1>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}><FaHome /> Home</Link></li>
          <li><Link to="/menu" onClick={() => setMenuOpen(false)}><FaUtensils /> Menu</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}><FaInfoCircle /> About</Link></li>
          <li><Link to="/ContactUs" onClick={() => setMenuOpen(false)}><FaPhone /> Contact Us</Link></li>
          <li><Link to="/Testimonial" onClick={() => setMenuOpen(false)}><FaStar /> Review</Link></li>
        </ul>

        {/* Cart & Login */}
        <div className="nav-buttons">
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={22} />
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </Link>
          {isLoggedIn ? (
            <button className="logout-btn">Logout</button>
          ) : (
            <Link to="/login">
              <button className="login-btn"><FaSignInAlt /> Login</button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
