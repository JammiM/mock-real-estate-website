import React from "react";

import "./Best.css";

import apt1 from "../../assets/apt1.jpeg";
import apt2 from "../../assets/apt2.jpeg";
import apt3 from "../../assets/apt3.jpeg";

const Best = () => {
  return (
    <div className="best">
      <h1>Best Listings</h1>
      <div>
        <p>
          <span className="bold">All</span>
        </p>
        <p>Commercial</p>
        <p>Residential</p>
        <p>Industrial</p>
      </div>
      <div className="container">
        <img src={apt1} alt="" />
        <img src={apt2} alt="" />
        <img src={apt3} alt="" />
      </div>
      <button className="btn">View All</button>
    </div>
  );
};

export default Best;
