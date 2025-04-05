import React from "react";
import "./Home.css"; // Import CSS
import { FaApple, FaGooglePlay } from "react-icons/fa"; // Import Icons
import Menu from "./Menu"; // Import Menu Component
import Testimonial from "./Testimonial";
import SpecialOffers from "./SpecialOffers";
import Footer  from "./Footer";

const Home = () => {
  return (
    <div>
      {/* Main Banner Section */}
      <div className="banner-containers">
        <div className="banner-contents">
          <h1>Welcome to Food Delivery</h1>
          <p>Order your favorite meals at your doorstep!</p>
          <button className="button">Order Now</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-container">
        <h2>Why Choose Us?</h2>
        <div className="features-wrapper">
          <div className="feature-box">
            <h3>🚀 Fastest Delivery</h3>
            <p>Get your food delivered in under 30 minutes, fresh and hot.</p>
          </div>
          <div className="feature-box">
            <h3>🥗 Best Quality</h3>
            <p>We partner with top restaurants to serve the best meals.</p>
          </div>
          <div className="feature-box">
            <h3>📲 Easy Ordering</h3>
            <p>Order in just a few taps using our user-friendly platform.</p>
          </div>
        </div>
      </div>

      {/* App Availability Section */}
      <div className="app-container">
        <h2>📱 Available on iOS & Android</h2>
        <p>Download our app now and enjoy the best food delivery experience!</p>
        <div className="app-buttons">
          <a href="#" className="app-link">
            <FaApple size={24} /> Download on the App Store
          </a>
          <a href="#" className="app-link">
            <FaGooglePlay size={24} /> Get it on Google Play
          </a>
        </div>
      </div>

     
      <div className="menu-home">
        <Menu /> 
      </div>
      <div>
     
      <Testimonial />  {/* Ensure this is added */}
    </div>
    <div>
      
      <SpecialOffers />  {/* Ensure this is added */}
    </div>
    <div>
     
      <Footer />  {/* Ensure this is added */}
    </div>
    </div>
    
  );
};

export default Home;
