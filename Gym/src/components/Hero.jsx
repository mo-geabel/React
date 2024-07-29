import React from "react";
import hero from "../assets/gym.jpg";
import "./Hero.css";
import { Link } from "react-scroll";

const Hero = ({ pic, sen, btn, link }) => {
  return (
    <div className="hero">
      <div className="home">
        <img src={pic} />
      </div>
      <div className="text">
        <h3>{sen}</h3>
        <Link
          className="link"
          to={link}
          smooth={true}
          offset={-180}
          duration={500}
        >
          <button className="btn">{btn}</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
