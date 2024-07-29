import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subs from "./components/Subs";
import Supplements from "./components/Supplements";
import { Element } from "react-scroll";
import pic from "./assets/gym.jpg";

function App() {
  const sen = "Every workout brings you one step closer to your goals ......";
  var link = "subs";
  let btn = "Subscribe Now";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Element name="hero">
                  <Hero pic={pic} sen={sen} link={link} btn={btn} />
                </Element>
                <Element name="container1">
                  <Container />
                </Element>
                <Element name="subs">
                  <Subs />
                </Element>
                <Element name="container2">
                  <Container />
                </Element>
                <Element name="contact">
                  <Contact />
                </Element>
              </>
            }
          />
          <Route path="/supplements" element={<Supplements />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
