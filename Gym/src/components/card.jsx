import React from "react";
import "./Cards.css";

const Cards = ({ whey, creatine, vit }) => {
  return (
    <div className="cards">
      <div className="card">
        <div className="img">
          <img src={whey} alt="Whey Protein" />
        </div>
        <div className="info">
          <h3>Whey Protein</h3>
          <p>Price: $10-20 per month</p>
        </div>
        <button className="btn dark"> Buy</button>
      </div>
      <div className="card">
        <div className="img">
          <img src={creatine} alt="Creatine" />
        </div>
        <div className="info">
          <h3>Creatine</h3>
          <p>Price: $10-20 per month</p>
        </div>
        <button className="btn dark"> Buy</button>
      </div>
      <div className="card">
        <div className="img">
          <img src={vit} alt="Vitamins" />
        </div>
        <div className="info">
          <h3>Vitamins</h3>
          <p>Price: $10-20 per month</p>
        </div>
        <button className="btn dark"> Buy</button>
      </div>
    </div>
  );
};

export default Cards;
