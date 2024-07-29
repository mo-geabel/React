import React from "react";
import "./Supplements.css";
import Hero from "./Hero";
import pic_2 from "../assets/Protien.jpeg";
import Container from "./Container";
import Cards from "./Cards";

const Supplements = () => {
  const btn = "Order Now";
  const sen = "Unleash Your Potential with Our Premium Gym Supplements!";
  const link = "cards";
  const price1 = "10$";
  const price3 = "12$";
  const price2 = "15$";
  const name = "Whey Protein";
  const name2 = "vitamine";
  const name3 = "Createine";

  return (
    <div className="Supplements">
      <Hero pic={pic_2} btn={btn} sen={sen} link={link} />
      <Container />
      <div className="cards">
        <Cards />
      </div>
    </div>
  );
};

export default Supplements;
