import "./HomeView.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

function HomeView() {
    return (
        <>
            <div className="footerBackground"></div>
            <div className="mainPage">
                <div className="background"></div>
                <Feature />
                <Hero />
                
                <Header />
            </div>
            <Footer />
            
        </>
    )
}

export default HomeView;