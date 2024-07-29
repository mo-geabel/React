import React, { useState, useEffect } from "react";
import "./Navbar.css";
import icon from "../assets/gym-icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50); // Adjust threshold for testing
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check scroll position on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={sticky ? "navbar dark" : "navbar"}>
      <div className="icon">
        <Link to="/">
          <img src={icon} alt="Gym Icon" />
        </Link>
        <p>Work Station</p>
      </div>
      <div className="list">
        <p>
          <Link className="link" to="/">
            Home
          </Link>
        </p>
        <p>
          <Link className="link" to="/subs">
            Subscription
          </Link>
        </p>
        <p>
          <Link className="link" to="/supplements">
            Supplements
          </Link>
        </p>
        <p>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
