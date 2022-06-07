import "../css/Hero.css"
import HeroBanner from "../images/hero.png"

export default function Hero() {
    return(
        <div>
        <div className = "hero--container">
            <img src= {HeroBanner} alt="hero banner" className="hero--image" />
        </div>
        <div className = "text-container">
            <h1 className="text--title"> Online Experiences</h1>
            <p className="text--para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </div>

        </div>
    )
}