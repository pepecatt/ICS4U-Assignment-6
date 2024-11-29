import './Footer.css';

function Footer() {
    return (
        <div>
            <div className="footer">
                <h1 className="aboutus">About Us</h1>
            </div>
            <div className="footerlinks">
                <a href="https://www.netflixinyourneighbourhood.ca/privacy/" class="TC" target="_blank">Terms & Conditions</a>
                <a href="https://github.com/pepecatt/Assignment-2.git" class="github" target="_blank">GitHub</a>
                <a href="https://youtu.be/G3e-cpL7ofc?si=x_oIzjVSF9kqM3-R" class="tutorial" target="_blank">HTML + CSS Tutorial</a>
            </div>
        </div>
    )
}

export default Footer;