import React from "react";
import about_img from "../assets/about.png";
import about_icon from "../assets/play-icon.png";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} className="about-img" alt="" />
        <img src={about_icon} className="about-icon" alt="" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIEVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          we are committed to providing a world-class education and fostering an
          environment of innovation, research, and community engagement.
          Established in 2024, our university has grown to become a leading
          institution known for academic excellence, cutting-edge research, and
          a vibrant campus life.
        </p>
        <h2>OUR MESSION</h2>
        <p>
          Our mission is to empower students to achieve their full potential
          through a comprehensive educational experience that combines rigorous
          academics, experiential learning, and a commitment to ethical
          leadership. We strive to cultivate critical thinking, creativity, and
          a global perspective in our students.
        </p>
      </div>
    </div>
  );
};

export default About;
