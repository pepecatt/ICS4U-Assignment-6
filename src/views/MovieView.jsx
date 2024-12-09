import Genre from "../components/Genres";
import { Outlet } from "react-router-dom";

function MovieView() {
	return (
		<div>
			<Genre />
			<Outlet />
		</div>
	)
}

export default MovieView;