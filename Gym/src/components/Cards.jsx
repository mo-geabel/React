import React from "react";
import "./Cards.css";
import whey from "../assets/Protien.png";
import creatine from "../assets/Creatine.png";
import vit from "../assets/vit.png";

const Cards = () => {
  return (
    <div className="cards">
      <div className="card">
        <img src={whey} alt="Whey Protein" />
        <div className="info">
          <h3>Whey Protein</h3>
          <p>Price: $10-20 per month</p>
        </div>
        <button className="btn dark">Buy</button>
      </div>
      <div className="card">
        <img src={creatine} alt="Creatine" />
        <div className="info">
          <h3>Creatine</h3>
          <p>Price: $10-20 per month</p>
        </div>
        <button className="btn dark">Buy</button>
      </div>
      <div className="card">
        <img className="vit" src={vit} alt="Vitamins" />
        <div className="info">
          <h3>Vitamins</h3>
          <p>Price: $10-20 per month</p>
        </div>
        <button className="btn dark">Buy</button>
      </div>
    </div>
  );
};

export default Cards;
