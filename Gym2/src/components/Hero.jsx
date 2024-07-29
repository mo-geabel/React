import React from "react";
import hero from "../assets/gym.jpg";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="home">
        <img src={hero} alt="Gym" />
      </div>
      <div className="text">
        <h3>Every workout brings you one step closer to your goals ......</h3>
        <Link className="link" to="subs">
          <button className="btn">Subscribe Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
