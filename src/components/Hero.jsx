import './Hero.css';

function Hero() {
    return (
        <>
        
            <div className="homepage">
                <h1>Endless popcorn binging</h1>
                <p className="startsatpi-text">Starts at $3.14. Cancel anytime.</p>
                <div className='email-getStarted'>
                    <input className="email-inputbox" type="text" placeholder="Email"></input>
                    <button className="getstarted-button">Get Started &#62;</button>
                </div>
            </div>

        </>
    )
}

export default Hero;