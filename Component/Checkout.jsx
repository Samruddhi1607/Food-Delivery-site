import React, { useState } from "react";
import "./Checkout.css";

const Checkout = ({ cart, setCart }) => {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [upiId, setUpiId] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [codConfirmed, setCodConfirmed] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const deliveryCharge = 50;
  
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + deliveryCharge - discount;

 

  const applyPromo = () => {
    if (promoCode === "SAVE50") {
      setDiscount(50);
      alert("Promo code applied! ₹50 discount added.");
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };
  

  const placeOrder = () => {
    if (!address.trim()) {
      alert("Please enter a valid delivery address.");
      return;
    }
    
    alert("Order Placed Successfully! ");
    setCart([]);
  };
  

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      
      {/* Order Summary */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        {cart.map((item) => (
          <p key={item.id}>{item.name} x {item.quantity} - ₹{item.price * item.quantity}</p>
        ))}
        <p>Subtotal: ₹{subtotal}</p>
        <p>Delivery Charge: ₹{deliveryCharge}</p>
        {discount > 0 && <p>Discount: -₹{discount}</p>}
        <h3>Total: ₹{total}</h3>
      </div>

      {/* Delivery Address */}
      <textarea value={address} onChange={(e) => setAddress(e.target.value)} 
      placeholder="Enter your delivery address"/>


      {/* Payment Method */}
      <div className="payment-section">
        <h3>Payment Method</h3>
        <label>
          <input
            type="radio"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={() => setPaymentMethod("upi")}
          />
          UPI
        </label>

       <label>
          <input
            type="radio"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />
          Cash on Delivery (COD)
        </label>

        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
          />
          Credit/Debit Card
        </label>

      </div>

        {/* UPI Input */}
      {paymentMethod === "upi" && (
        <div className="payment-details">
          <label>Enter UPI ID:</label>
          <input
            type="text"
            placeholder="example@upi"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        </div>
      )}

       {/* COD Confirmation */}
       {paymentMethod === "cod" && (
        <div className="payment-details">
          <input
            type="checkbox"
            checked={codConfirmed}
            onChange={() => setCodConfirmed(!codConfirmed)}
          />
          <label>I confirm I will pay in cash</label>
        </div>
      )}

      {/* Card Details */}
      {paymentMethod === "card" && (
        <div className="payment-details">
          <label>Cardholder Name:</label>
          <input
            type="text"
            placeholder="Full Name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
          <label>Card Number:</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
      )}


      {/* Promo Code */}
      <div className="promo-section">
        <h3>Apply Promo Code</h3>
        <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} placeholder="Enter promo code" />
        <button className="apply-btn" onClick={applyPromo}>Apply</button>
      </div>

      {/* Place Order Button */}
      <button className="place-order-btn" onClick={placeOrder}  disabled={cart.length === 0} >
         Place Order
       </button>

    </div>
  );
};

export default Checkout;
