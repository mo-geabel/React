import Button from "./Button";
import "../App.css";
import "./HeroSection.css";
export default function HeroSection() {
  return (
    <div className="hero-container">
      <video src={"/Videos/video-2.mp4"} autoPlay loop muted></video>

      <h1>ADVENTURE AWAITES</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED <i className="far fa-play-circle"></i>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}
