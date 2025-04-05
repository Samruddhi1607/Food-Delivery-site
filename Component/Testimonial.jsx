import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import star icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Rahul Verma",
    review: "Amazing food! The best delivery experience ever!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5, // ⭐⭐⭐⭐⭐
  },
  {
    name: "Priya Sharma",
    review: "Great service and fresh meals. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4.5, // ⭐⭐⭐⭐✨
  },
  {
    name: "Anjali Mehta",
    review: "Fast delivery and delicious food! Will order again.",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 4, // ⭐⭐⭐⭐
  },
  {
    name: "Shruti",
    review: "I loved the pizza! The crust was perfectly crispy, and the toppings were fresh. Highly recommend!",
    img: "https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M=",
    rating: 5, // ⭐⭐⭐⭐⭐
  },
  {
    name: "Chetan Shaha",
    review: "Had a small issue with my order, but customer support was so helpful and resolved it immediately!",
    img: "https://media.istockphoto.com/id/1069673870/photo/young-male-college-student.jpg?s=612x612&w=0&k=20&c=YI_HyAqEgRxiqwq7EYMMuxwhHRdeMfGi49Ne-u93KLY=",
    rating: 4, //  ⭐⭐⭐⭐
  },
];

// Function to generate stars based on rating
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} color="#f0a500" />
      ))}
      {halfStar && <FaStarHalfAlt color="#f0a500" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} color="#f0a500" />
      ))}
    </div>
  );
};

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="testimonial-section">
      <h2>What Our Customers Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-content">
              <img src={testimonial.img} alt={testimonial.name} />
              <div className="testimonial-text">
                <h3>{testimonial.name}</h3>
                <StarRating rating={testimonial.rating} /> {/* ⭐ Rating */}
                <p>"{testimonial.review}"</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
