import React, { useState, useEffect } from "react";
import "./Navbar.css";
import icon from "../assets/gym-icon.png";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import menu from "../assets/menu.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [con, setCon] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50); // Adjust threshold for testing
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check scroll position on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <div className={sticky ? "navbar dark" : "navbar"}>
      <div className="icon">
        <RouterLink to="/" onClick={scrollToTop}>
          <img src={icon} alt="Gym Icon" />
        </RouterLink>
        <p>Work Station</p>
      </div>
      <div className={`list ${isMenuOpen ? "open" : ""}`}>
        {con ? (
          <p>
            <RouterLink
              className="link"
              to="/"
              onClick={() => {
                setCon(false);
                toggleMenu();
              }}
            >
              Home
            </RouterLink>
          </p>
        ) : (
          <p>
            <ScrollLink
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              className="link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </ScrollLink>
          </p>
        )}
        {con ? (
          <p>
            <RouterLink
              className="link"
              to="/"
              onClick={() => {
                setCon(false);
                toggleMenu();
              }}
            >
              Subscription
            </RouterLink>
          </p>
        ) : (
          <p>
            <ScrollLink
              to="subs"
              smooth={true}
              offset={-50}
              duration={500}
              className="link"
            >
              Subscription
            </ScrollLink>
          </p>
        )}

        {con ? (
          <p>
            <ScrollLink
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              className="link"
            >
              Supplements
            </ScrollLink>
          </p>
        ) : (
          <p>
            <RouterLink
              to="/supplements"
              className="link"
              onClick={() => {
                setCon(true);
                toggleMenu();
              }}
            >
              Supplements
            </RouterLink>
          </p>
        )}
        {con ? (
          <p>
            <RouterLink
              className="link"
              to="/"
              onClick={() => {
                setCon(false);
                toggleMenu();
              }}
            >
              Contact
            </RouterLink>
          </p>
        ) : (
          <p>
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-110}
              duration={500}
              className="link"
            >
              Contact
            </ScrollLink>
          </p>
        )}
      </div>
      <div className="men-icon" onClick={toggleMenu}>
        <img src={menu} alt="Menu Icon" />
      </div>
    </div>
  );
};

export default Navbar;
