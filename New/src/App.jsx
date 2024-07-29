import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs";
import Title from "./components/Title";
import About from "./components/About";
import Campus from "./components/Campus";
import Testonials from "./components/Testonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <Title p="Our PROGRAM" h3="What We Offer" />
        <Programs />
        <About />
        <Title p="Gallery" h3="Campus Photos" />
        <Campus />
        <Testonials />
        <Title p="Contact Us" h3="Keep on Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
