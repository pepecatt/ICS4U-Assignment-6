import Header from "../components/Header";
import Genre from "../components/Genres";
import { Outlet } from "react-router-dom";

function MovieView() {
	return (
		<div>
			<Header />
			<Genre />
			<Outlet />
		</div>
	)
}

export default MovieView;