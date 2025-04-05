import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [recipient, setRecipient] = useState("");
  const [loginType, setLoginType] = useState("self"); // Default: Self Login
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "test@example.com" && password === "password123") {
      onLogin();
      navigate("/dashboard");
    } else {
      setError("Invalid email or password. Try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>{loginType === "self" ? "Login for Yourself" : "Login for Someone Else"}</h2>
      
      <div className="toggle-buttons">
        <button className={loginType === "self" ? "active" : ""} onClick={() => setLoginType("self")}>Self Login</button>
        <button className={loginType === "other" ? "active" : ""} onClick={() => setLoginType("other")}>Login for Someone Else</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        
        {loginType === "other" && (
          <>
            <input type="tel" placeholder="Phone Number" required value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="text" placeholder="Address" required value={address} onChange={(e) => setAddress(e.target.value)} />
            <input type="text" placeholder="Recipient's Name" required value={recipient} onChange={(e) => setRecipient(e.target.value)} />
          </>
        )}

        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
