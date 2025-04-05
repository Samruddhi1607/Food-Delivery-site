import React, { useState } from "react";
import menuData from "./MenuData";
import "./Menu.css";

const Menu = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter & Sort Menu
  let filteredMenu = menuData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (selectedCategory !== "All") {
    filteredMenu = filteredMenu.filter((item) => item.category === selectedCategory);
  }
  if (sortOrder === "lowToHigh") {
    filteredMenu.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filteredMenu.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="menu-container">
      <h1 className="text-center">Our Menu</h1>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search food..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {/* Sorting Options */}
      <select className="sort-dropdown" onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Sort By</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>

      {/* Category Buttons */}
      <div className="category-buttons">
        {["All", "Pizza", "Burger", "Pasta", "Sandwich", "Fries", "Noodles", "Rice", "Rolls", "Manchurian"].map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>{category}</button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        {filteredMenu.map((item) => (
          <div key={item.id} className="menu-card" onClick={() => setSelectedItem(item)}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-info">
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>
              <button className="add-to-cart" onClick={(e) => { e.stopPropagation(); addToCart(item); }}>
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedItem.name}</h2>
            <img src={selectedItem.image} alt={selectedItem.name} className="modal-image" />
            <p>{selectedItem.description}</p>
            <p className="price">₹{selectedItem.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(selectedItem)}>Add to Cart</button>
            <button className="close-modal" onClick={() => setSelectedItem(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
