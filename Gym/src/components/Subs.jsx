import React from "react";
import "./Subs.css";
import pic_1 from "../assets/pic-1.jpg";
import pic_2 from "../assets/pic-2.jpg";
import pic_3 from "../assets/pic-3.jpg";
const Subs = () => {
  return (
    <div className="subs">
      <div className="cards">
        <div className="type">
          <img src={pic_1} alt="" />
          <h5>Basic Membership</h5>
          <p>Price: $10-20 per month</p>
          <ul>
            <li>Access to gym facilities during all operational hours</li>
            <li>Use of cardio and strength training equipment</li>
            <li>Access to locker rooms and showers</li>
            <li>Complimentary fitness assessment</li>
          </ul>
          <button className="btn dark">Subscribe Now !</button>
        </div>
        <div className="type">
          <img src={pic_2} alt="" />
          <h5>Standart Membership</h5>
          <p>Price: $10-20 per month</p>
          <ul>
            <li>Access to gym facilities during all operational hours</li>
            <li>Use of cardio and strength training equipment</li>
            <li>Access to locker rooms and showers</li>
            <li>Complimentary fitness assessment</li>
          </ul>
          <button className="btn dark">Subscribe Now !</button>
        </div>

        <div className="type">
          <img src={pic_3} alt="" />
          <h5>Premium Membership</h5>
          <p>Price: $10-20 per month</p>
          <ul>
            <li>Access to gym facilities during all operational hours</li>
            <li>Use of cardio and strength training equipment</li>
            <li>Access to locker rooms and showers</li>
            <li>Complimentary fitness assessment</li>
          </ul>
          <button className="btn dark">Subscribe Now !</button>
        </div>
      </div>
    </div>
  );
};

export default Subs;
