import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";

export default function home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <Cards />
      <Footer />
    </div>
  );
}
