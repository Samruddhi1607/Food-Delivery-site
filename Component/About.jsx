import React from "react";
import "./About.css"; // Import CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>TastyBites</h1>
        <p>
          Welcome to <strong>TastyBites</strong>, your ultimate destination for delicious meals delivered straight to your doorstep.
          We partner with the best restaurants in town to bring you a variety of flavors, from classic favorites to exotic dishes.
        </p>

        <div className="about-section">
          <h2> Our Vision</h2>
          <p>
            To revolutionize the food delivery experience with fast service, top-quality meals, and unbeatable offers.
          </p>
        </div>

        <div className="about-section">
          <h2> Why Choose TastyBites?</h2>
          <ul>
            <li> **Super Fast Delivery** - Get your order within 30 minutes.</li>
            <li> **Diverse Cuisine Options** - From Indian to Continental.</li>
            <li> **Best Deals & Discounts** - Enjoy great savings on every order.</li>
          </ul>
        </div>

        <div className="about-section">
          <h2> Our Coverage</h2>
          <p>We currently deliver in <strong>Amravati , Nagpur , Nanded , Akola , Aurangabad ,Hyderabad ,Mumbai, Delhi, Bangalore, Pune</strong>, and expanding to more cities soon!</p>
        </div>

        <div className="about-section">
          <h2> Get In Touch</h2>
          <p> Email: support@tastybites.com</p>
          <p> Call: +91 98765 43210</p>
          <p> Follow Us: [Social Media Links]</p>
        </div>
      </div>
    </div>
  );
};

export default About;
