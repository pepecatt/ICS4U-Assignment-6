import { useStoreContext } from "../context";
//import trashCan from "../assets/trashcan.png";
import "./SettingsView.css";

function SettingsView() {
  const { firstName, setFirstName,
    lastName, setLastName,
    genreList, setGenreList,
  } = useStoreContext();

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
				<button type="submit">Submit Changes</button>
			</form>
		</div>
  )
}

