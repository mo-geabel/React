import React from "react";
import "./hero.css";
import dark from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>We Ensure Better Education for a Better World</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education.
        </p>
        <button className="btn1">
          Explore More <img src={dark} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
