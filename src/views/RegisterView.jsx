import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useStoreContext } from '../context';
import "./RegisterView.css";

function RegisterView() {
	const { setFirstName, setLastName, setEmail, setPassword, setGenreList, setCurrentGenre } = useStoreContext();

	const firstName = useRef('');
	const lastName = useRef('');
	const email = useRef('');
	const password = useRef('');
	const confirmPassword = useRef('');

	const navigate = useNavigate();

	const genres = [
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

	function login(event) {
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
      .map((genreId) => genres.find((genre) => genre.id === genreId)) // Find genre objects by ID
      .sort((a, b) => a.genre.localeCompare(b.genre)); // Sort by genre name alphabetically

		setInformation();
		setGenreList(sortedGenres);
    setCurrentGenre(sortedGenres[0].genre);
		navigate(`/login`);
	}

	function setInformation() {
		setFirstName(firstName.current.value);
		setLastName(lastName.current.value);
		setEmail(email.current.value);
		setPassword(password.current.value);
	}

	return (
		<div className="register-container">
			<form onSubmit={(event) => { login(event) }}>
				<label className="createAccount">Create an Account</label>
				<input
					type="text"
					placeholder="First Name"
					ref={firstName}
					required />
				<input
					type="text"
					placeholder="Last Name"
					ref={lastName}
					required />
				<input
					type="text" // ***change to email
					placeholder="Email"
					ref={email}
					required />
				<input
					type="text"
					placeholder="Password"
					ref={password}
					required />
				<input
					type="text"
					placeholder="Confirm Password"
					ref={confirmPassword}
					required />

				<label className="genreLabel">Genres:</label>
				<div className="genresList">
					{genres.map((item) => {
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
				<button type="submit">Register</button>
			</form>
			<p onClick={() => { navigate(`/login`) }}>Already have an account? <a href="#">Login</a></p>
		</div>
	)
}

export default RegisterView;