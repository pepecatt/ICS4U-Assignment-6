import { useNavigate } from "react-router-dom";
import "./Genres.css";

function Genres(props) {
    const navigate = useNavigate();

    function genrePage(id) {
        navigate(`genre/${id}`);
    }

    const click = (item) => {
        genrePage(item.id);
    }

    return (
        <>
            <div className='genre-container'>
                <h2>Genres</h2>
                <ol>
                    {props.genreList.map((item) => (
                        <li key={item.id} onClick={() => click(item)}>
                            {item.genre}
                        </li>
                    ))}
                </ol>
            </div>
        </>
    )
}

export default Genres;