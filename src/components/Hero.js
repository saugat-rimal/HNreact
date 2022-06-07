import "../css/Hero.css";
import HeroBanner from "../images/hero.png";

export default function Hero() {
  return (
    <div>
      <div className="hero--container">
        <img src={HeroBanner} alt="hero banner" className="hero--image" />
      </div>
      <div className="text-container">
        <h1 className="text--title">Events Search Engine</h1>
        <p className="text--para">
          We are Nepal-based promotion platform for huddles, exhibitions,
          meetings, events, and bootcamps fairs offering ways for launching and
          sharing events information on the web for free of cost.
        </p>
      </div>
    </div>
  );
}
