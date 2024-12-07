import Genre from "../components/Genres";
import { Outlet } from "react-router-dom";

function MovieView() {
	const genres = [
		{ id: 28, genre: "Action" },
		{ id: 12, genre: "Adventure" },
		{ id: 16, genre: "Animation" },
		{ id: 35, genre: "Comedy" },
		{ id: 80, genre: "Crime" },
		{ id: 14, genre: "Fantasy" },
		{ id: 36, genre: "Horror" },
		{ id: 9648, genre: "Mystery" },
		{ id: 10402, genre: "Music" },
		{ id: 53, genre: "Thriller" }
	];

	return (
		<div>
			<Genre genreList={genres} />
			<Outlet />
		</div>
	)
}

export default MovieView;