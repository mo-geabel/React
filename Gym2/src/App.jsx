import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subs from "./components/Subs";
import Supplements from "./components/Supplements";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Container />
                <Subs />
                <Container />
                <Contact />
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
