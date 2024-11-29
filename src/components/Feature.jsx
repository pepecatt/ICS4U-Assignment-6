import './Feature.css';
import { useState, useEffect } from "react";
import axios from "axios";

function Feature() {
    const [image1, setImage1] = useState([]);
    const [image2, setImage2] = useState([]);
    const [image3, setImage3] = useState([]);
    const [image4, setImage4] = useState([]);
    const [image5, setImage5] = useState([]);
    const [image6, setImage6] = useState([]);

    useEffect(() => {
        (async function getImages() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setImage1(response.data.results[Math.floor(Math.random() * 20)].poster_path);
            setImage2(response.data.results[Math.floor(Math.random() * 20)].poster_path);
            setImage3(response.data.results[Math.floor(Math.random() * 20)].poster_path);
            setImage4(response.data.results[Math.floor(Math.random() * 20)].poster_path);
            setImage5(response.data.results[Math.floor(Math.random() * 20)].poster_path);
            setImage6(response.data.results[Math.floor(Math.random() * 20)].poster_path);
        })()
    }, [])

    return (
        <div className="movies">
            <div className='movierow1'>
                <img
                    className="movie"
                    src={`https://image.tmdb.org/t/p/w500${image1}`}
                />
            </div>
            <div className="movierow2">
                <img
                    className="movie"
                    src={`https://image.tmdb.org/t/p/w500${image2}`}
                />
                <img
                    className="movie"
                    src={`https://image.tmdb.org/t/p/w500${image3}`}
                />
            </div>
            <div className="movierow3">
                <img
                    className="movie"
                    src={`https://image.tmdb.org/t/p/w500${image4}`}
                />
                <img
                    className="movie"
                    src={`https://image.tmdb.org/t/p/w500${image5}`}
                />
                <img
                    className="movie"
                    src={`https://image.tmdb.org/t/p/w500${image6}`}
                />
            </div>
        </div>
    )
}

export default Feature;