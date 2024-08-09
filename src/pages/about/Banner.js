import React from "react";
import "./banner.css";
import banner from "../../images/aboutUs/banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="bannerImg">
        <img src={banner} alt="Banner" style={{ height: "100%" }} />
      </div>
      <div className="text">
        <h3 className="card-title-1">ZOOFARI</h3>
        <h1 className="card-title">
          STAND FOR <span>WILDLIFE</span>
        </h1>
      </div>
      <div className="bcrumb">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
