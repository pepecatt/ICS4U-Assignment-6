import { Link } from "react-router-dom";
import "./HomeView.css";

function HomeView() {
    return (
        <>
            <head>
                <title>Popflix</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"></link>

                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>

                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
            </head>

            <body>
                <div class="background"></div>
                <div class="spotlight"></div>
                <h class="Popflix">Popflix</h>

                <div class="homepage">
                    <h1>Endless popcorn binging</h1>
                    <p class="startsatpi-text">Starts at $3.14. Cancel anytime.</p>

                    <input class="email-inputbox" type="text" placeholder="Email"></input>
                    <button class="getstarted-button">Get Started &#62;</button>
                </div>

                <div class="movies">
                    <div class="movierow1">
                        <img class="movie" src="movies/thewildrobot.jpg"></img>
                        <img class="movie" src="movies/dune2.jpg"></img>
                        <img class="movie" src="movies/deadpoolwolverine.jpg"></img>
                    </div>
                    <div class="movierow2">
                        <img class="movie" src="movies/wicked.jpg"></img>
                        <img class="movie" src="movies/immaculate.jpg"></img>
                        <img class="movie" src="movies/insideout2.jpg"></img>
                        <img class="movie" src="movies/challengers.jpg"></img>
                    </div>
                    <div class="popcorn">
                        <img class="popcornbag" src="popcorn bag.png"></img>
                    </div>
                </div>

                <div class="footer">
                    <h class="aboutus">About Us</h>
                </div>
                <div class="footerlinks">
                    <a href="https://www.netflixinyourneighbourhood.ca/privacy/" class="TC" target="_blank">Terms & Conditions</a>
                    <a href="https://github.com/pepecatt/Assignment-2.git" class="github" target="_blank">GitHub</a>
                    <a href="https://youtu.be/G3e-cpL7ofc?si=x_oIzjVSF9kqM3-R" class="tutorial" target="_blank">HTML + CSS Tutorial</a>
                </div>

                <button class="signin-button">Sign In</button>

            </body>
        </>
    )
}

export default HomeView;