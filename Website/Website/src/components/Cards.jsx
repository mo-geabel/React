import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/images/img-5.jpg"
              text="Travel to Bali to have your own special moment"
              label="Classic"
              path="/services"
            />
            <CardItem
              src="/images/img-7.jpg"
              text="Travel to Bali to have your own special moment"
              label="Avenge"
              path="/services"
            />
            <CardItem
              src="/images/img-3.jpg"
              text="Travel to Bali to have your own special moment"
              label="Mystery"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
