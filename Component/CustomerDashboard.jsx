import React from "react";
import "./CustomerDashboard.css";

const CustomerDashboard = ({ onLogout }) => {
  return (
    <div className="dashboard-container">
      <h2>Welcome, Customer!</h2>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
      <h3>Your Orders</h3>
      {/* <ul>
        <li>Margherita Pizza - ₹250 (Ordered on 2025-03-19)</li>
        <li>Cheese Burger - ₹180 (Ordered on 2025-03-18)</li>
      </ul> */}
    </div>
  );
};

export default CustomerDashboard;
