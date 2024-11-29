import './Hero.css';
import PopcornBag from "../assets/popcornbag.png";

function Hero() {
    return (
        <>
            <div className="background"></div>
    
            <div className="homepage">
                <h1>Endless popcorn binging</h1>
                <p className="startsatpi-text">Starts at $3.14. Cancel anytime.</p>
                <input className="email-inputbox" type="text" placeholder="Email"></input>
                <button className="getstarted-button">Get Started &#62;</button>
            </div>

            <img className="popcornbag" src={PopcornBag}></img>

        </>
    )
}

export default Hero;