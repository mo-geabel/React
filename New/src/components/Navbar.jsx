import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-scroll"; // Correct import
import menu from "../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100); // Adjust threshold for testing
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check scroll position on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [menuClick, setmenuClick] = useState("false");

  function handelMenu() {
    setmenuClick(!menuClick);
  }

  return (
    <nav className={sticky ? "dark" : "container"}>
      <img className="logo" src={logo} alt="logo" />
      <ul className={menuClick ? "" : "hidde"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-300} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-200} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-150} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-50} duration={500}>
            <button className="btn" onClick={() => {}} aria-label="Contact us">
              Contact Us
            </button>
          </Link>
        </li>
      </ul>
      <img onClick={() => handelMenu()} className="menu" src={menu} alt="" />
    </nav>
  );
};

export default Navbar;
