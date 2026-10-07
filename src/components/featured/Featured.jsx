import React from "react";

import house1 from "../../assets/house1.jpg";
import bed1 from "../../assets/bed1.jpg";
import bed2 from "../../assets/bed2.jpg";
import kitchen from "../../assets/kitchen.jpg";
import bathroom from "../../assets/bath1.jpg";

import house2 from "../../assets/house2.jpg";
import bed3 from "../../assets/bed3.jpg";
import bed4 from "../../assets/bed4.jpg";
import bathroom2 from "../../assets/bath2.jpg";
import livingRoom from "../../assets/living-room.jpg";

import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <h1 className="featured-text">Featured</h1>
      <p className="featured-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="container">
        {/* <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="featured-img"
        /> */}
        <img src={house1} alt="" className="span-3 image-grid-row-2" />
        <img src={bed1} alt="" className="" />
        <img src={bed2} alt="" className="" />
        <img src={kitchen} alt="" className="" />
        <img src={bathroom} alt="" className="" />
        <div className="span-3 img-details">
          <div className="top">
            <h2>Luxury Villa in Bali, Indonesia</h2>
            <p>For Sale</p>
            <div className="price">$1,200,000</div>
          </div>

          <div className="info-grid">
            <div>
              <div className="info">
                <div className="bold">
                  Bedrooms:<p>4</p>
                </div>
              </div>
              <div className="info">
                <div className="bold">
                  Bathrooms:<p>3</p>
                </div>
              </div>
            </div>
            <div>
              <div className="info">
                <div className="bold">
                  Square feet:<p>2,500</p>
                </div>
              </div>
              <div className="info">
                <div className="bold">
                  Estimated Payment:<p> €3,000 / month</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="span-2 right-img-details">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="btn">View Listing</button>
        </div>
      </div>
      {/* kmkmkm */}
      <div className="container">
        <img src={bed3} alt="" className="order-2" />
        <img src={bed4} alt="" className="order-3" />
        <img src={house2} alt="" className="span-3 image-grid-row-2 order-1" />

        <img src={bathroom2} alt="" className="order-4" />
        <img src={livingRoom} alt="" className="order-5" />

        <div className="span-2 right-img-details order-7">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="btn">View Listing</button>
        </div>

        <div className="span-3 img-details order-6">
          <div className="top">
            <h2>Luxury Villa in Bali, Indonesia</h2>
            <p>For Sale</p>
            <div className="price">$1,200,000</div>
          </div>

          <div className="info-grid">
            <div>
              <div className="info">
                <div className="bold">
                  Bedrooms:<p>4</p>
                </div>
              </div>
              <div className="info">
                <div className="bold">
                  Bathrooms:<p>3</p>
                </div>
              </div>
            </div>
            <div>
              <div className="info">
                <div className="bold">
                  Square feet:<p>2,500</p>
                </div>
              </div>
              <div className="info">
                <div className="bold">
                  Estimated Payment:<p> €3,000 / month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
