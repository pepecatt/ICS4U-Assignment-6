import { useRef } from "react";
import { useStoreContext } from "../context";
//import trashCan from "../assets/trashcan.png";
import "./SettingsView.css";

function SettingsView() {
	const { firstName, setFirstName,
		lastName, setLastName,
		genreList, setGenreList,
		settingsOpen
	} = useStoreContext();


	const genress = [
		{ id: 28, genre: "Action" },
		{ id: 12, genre: "Adventure" },
		{ id: 16, genre: "Animation" },
		{ id: 35, genre: "Comedy" },
		{ id: 80, genre: "Crime" },
		{ id: 10751, genre: "Family" },
		{ id: 14, genre: "Fantasy" },
		{ id: 36, genre: "History" },
		{ id: 27, genre: "Horror" },
		{ id: 10402, genre: "Music" },
		{ id: 9648, genre: "Mystery" },
		{ id: 878, genre: "Sci-Fi" },
		{ id: 53, genre: "Thriller" },
		{ id: 10752, genre: "War" },
		{ id: 37, genre: "Western" }
	];


	const checkboxesRef = useRef({});

	function settings(event) {
		event.preventDefault();

		// checks if every box is checked, makes an array storing the id of
		// every genre that is selected
		const selectedGenres = Object.keys(checkboxesRef.current)
			.filter((genreId) => checkboxesRef.current[genreId].checked)
			.map(Number); // Convert string IDs back to numbers

		if (selectedGenres.length < 2) { // ***change to 10
			alert("You need to select at least 10 genres!");
			return;
		}

		// sorts the array by alphabetical order (not by id order)
		const sortedGenres = selectedGenres
			.map((genreId) => genress.find((genre) => genre.id === genreId)) // Find genre objects by ID
			.sort((a, b) => a.genre.localeCompare(b.genre)); // Sort by genre name alphabetically

		//setInformation();
		//setGenreList(sortedGenres);
		//setCurrentGenre(sortedGenres[0].genre);
	}

	return (
		<>
			{settingsOpen && (
				<div className="settings-container">
					<form onSubmit={settings}>
						<label className="settingsLabel">Settings</label>
						<label className="userInfo">{firstName}</label>
						<input
							type="text"
							placeholder="New First Name"
						/>
						<label className="userInfo">{lastName}</label>
						<input
							type="text"
							placeholder="New Last Name"
						/>

						<label className="genreLabel">Genres:</label>
						<div className="genresList">
							{genress.map((item) => {
								return (
									<label key={item.id}>
										<input
											type='checkbox'
											id="check"
											ref={(el) => (checkboxesRef.current[item.id] = el)}
										/> {item.genre}
									</label>
								);
							})}
						</div>
						<button type="submit">Submit Changes</button>
					</form>
				</div>
			)}
		</>

	)
}

export default SettingsView;