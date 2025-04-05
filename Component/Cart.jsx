import React from "react";
import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const deliveryCharge = 50;

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // ✅ Remove if quantity is 0
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate total
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + deliveryCharge;

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <div className="quantity-control">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <span>₹{item.price * item.quantity}</span>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}

          <div className="cart-summary">
            <p>Subtotal: ₹{subtotal}</p>
            <p>Delivery Charges: ₹{deliveryCharge}</p>
            <h3>Total: ₹{total}</h3>
          </div>

          <button onClick={() => navigate("/checkout")} className="checkout-btn">
             Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
