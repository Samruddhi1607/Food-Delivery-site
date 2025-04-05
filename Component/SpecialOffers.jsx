import React, { useState, useEffect } from "react";
import "./SpecialOffers.css";

const offers = [
  {
    id: 1,
    title: "Buy 1 Get 1 Free",
    description: "Order Any Pizza And Get Another One Absolutely Free",
    discount: "50% OFF",
    img: "https://i.pinimg.com/736x/a5/77/a1/a577a1d30853d67ff3810a00d5d83dfa.jpg", // Corrected Path
    code: "B0GP50",
  },
  {
    id: 2,
    title: "Flash 30% Off",
    description: "Get 30% Off On All Burger Orders Above ₹199",
    discount: "30% OFF",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f4b863172770185.6484e24f7bb8b.png", // Corrected Path
    code: "BURGER30",
  },
  {
    id: 3,
    title: "Free Dessert",
    description: "Order A Full Meal And Get A Free Dessert With It!",
    discount: "FREE DESSERT",
    img: "https://i.pinimg.com/originals/c4/52/bd/c452bd7e19ee703521e91b8be26cfa9c.jpg", // Corrected Path
    code: "FREEDESSERT00",
  },
  {
    id: 4,
    title: "Happy Hour 🍹",
    description: "Enjoy 20% off on all drinks between 3-6 PM.",
    discount: "20% OFF",
    img: "https://www.theopensuitcase.com/wp-content/uploads/2018/06/pretty-happy-hour-cocktails.jpg",
  },
  {
    id: 5,
    title: "Midnight Cravings 🍟",
    description: "Late-night snacks at 40% off from 10 PM - 3 AM!",
    discount: "40% OFF",
    img: "https://image.shutterstock.com/shutterstock/photos/1751791211/display_1500/stock-vector--hours-delivery-illustration-a-man-rides-a-scooter-bike-at-night-1751791211.jpg",
  },
];

const SpecialOffers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (offers.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
      }, 3000); // Slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="offers-container">
      <h2>🔥 Special Offers & Deals 🔥</h2>
      <div className="offers-slider">
        {offers.map((offer, index) => (
          <div key={offer.id} className={`offer-card ${index === currentIndex ? "active" : ""}`}>
            <img src={offer.img} alt={offer.title} className="offer-img" />
            <div className="offer-details">
              <span className="discount-badge">{offer.discount || "Limited Offer"}</span>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <button className="claim-btn">Claim Deal</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
