import React from "react";

import "./Hero.css";
import { AiOutlineSearch } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Welcome to Our Real Estate Website</h1>
        <p className="search-text">
          Discover your dream home with our extensive listings and expert
          guidance.
        </p>
        <form className="search">
          <div>
            <input
              type="text"
              placeholder="Search for properties..."
              className="search-input"
            />
          </div>

          <div className="radio">
            <input
              type="radio"
              id="buy"
              name="propertyType"
              value="buy"
              checked
            />
            <label htmlFor="buy">Buy</label>
            <input type="radio" id="rent" name="propertyType" value="rent" />
            <label htmlFor="rent">Rent</label>
            <button type="submit" className="search-button">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
