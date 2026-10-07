import React from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="#">
          <FaFacebookF className="icon" />
        </a>
        <a href="#">
          <FaTwitter className="icon" />
        </a>
        <a href="#">
          <FaInstagram className="icon" />
        </a>

        <a href="#">
          <FaPinterest className="icon" />
        </a>
      </div>

      <div className="container">
        <div className="col">
          <h3>About</h3>
          <p>Company</p>
          <p>Details</p>
          <p>About Us</p>
          <p>Careers</p>
        </div>{" "}
        <div className="col">
          <h3>Company</h3>
          <p>Company</p>
          <p>Details</p>
          <p>About Us</p>
          <p>Careers</p>
        </div>{" "}
        <div className="col">
          <h3>Legal</h3>
          <p>Company</p>
          <p>Details</p>
          <p>About Us</p>
          <p>Careers</p>
        </div>
        <div className="col">
          <h3>Information</h3>
          <p>Company</p>
          <p>Details</p>
          <p>About Us</p>
          <p>Careers</p>
        </div>
      </div>
      <p>&copy; 2023 Real Estate. All rights reserved.</p>
    </div>
  );
};

export default Footer;
