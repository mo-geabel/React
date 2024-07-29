import React, { useRef } from "react";
import back_icon from "../assets/back-icon.png";
import next_icon from "../assets/next-icon.png";
import user_1 from "../assets/user-1.png";
import user_2 from "../assets/user-2.png";
import user_3 from "../assets/user-3.png";
import user_4 from "../assets/user-4.png";
import "./Testonials.css";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const maxTranslateX = -55; // Adjust based on the number of items and percentage of translation

  const slideForward = () => {
    if (tx > maxTranslateX) {
      tx -= 55;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 55;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={back_icon}
        alt="Back"
        className="back-btn"
        onClick={slideBackward}
      />
      <img
        src={next_icon}
        alt="Next"
        className="next-btn"
        onClick={slideForward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="User 2" />
                <div>
                  <h3>Mohammed Geabel</h3>
                  <span>Yemen, Aden</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="User 3" />
                <div>
                  <h3>Seha Salami</h3>
                  <span>Germany, Munich</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="User 1" />
                <div>
                  <h3>Heba Najeeb</h3>
                  <span>Hungary, Budapest</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="User 4" />
                <div>
                  <h3>Ahmed Salem</h3>
                  <span>USA, NY</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
