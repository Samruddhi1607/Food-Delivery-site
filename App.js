import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Menu from "./Component/Menu";
import Testimonial from "./Component/Testimonial";
import SpecialOffers from "./Component/SpecialOffers";
import About from "./Component/About";
import ContactUs from "./Component/ContactUs";
import Login from "./Component/Login";
import CustomerDashboard from "./Component/CustomerDashboard";
import Cart from "./Component/Cart";
import Checkout from "./Component/Checkout"
import Footer from "./Component/Footer";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  // ✅ Define addToCart function
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const location = useLocation();
  const hideFooterPages = ["/login", "/dashboard", "/cart"];
  const shouldShowFooter = !hideFooterPages.includes(location.pathname);

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} cartItemCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* ✅ Pass addToCart prop */}
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<CustomerDashboard onLogout={handleLogout} />} />
      </Routes>

      {shouldShowFooter && <Footer />}
    </>
  );
};

export default App;
