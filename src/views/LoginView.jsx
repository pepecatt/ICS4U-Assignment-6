import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useStoreContext } from '../context';
import './LoginView.css';

function LoginView() {
	const { email, setEmail, password, setPassword, genreList, setLoggedIn } = useStoreContext();
	const enteredEmail = useRef('');
	const enteredPassword = useRef('');
	const navigate = useNavigate();

	function login(event) {
		event.preventDefault();
		if (enteredPassword.current.value == "d") {    // for testing only
			navigate(`/movies/genre/${genreList[0].id}`);
			setLoggedIn(true);
		}
		if (enteredEmail.current.value == email && enteredPassword.current.value == password) {
			navigate(`/movies/genre/${genreList[0].id}`);
			setLoggedIn(true);
		} else {
			//alert("Your email or password input is incorrect!");
			return;
		}
	}

	return (
		<div className="login-container">
			<div className='login'>
				<form onSubmit={(event) => { login(event) }}>
					<label>Sign In</label>
					<input
						type="text"
						ref={enteredEmail}
						onChange={(event) => { setEmail(event.target.value) }}
						placeholder="Email"
						required />
					<input
						type="text"
						ref={enteredPassword}
						onChange={(event) => { setPassword(event.target.value) }}
						placeholder="Password"
						required />
					<button type="submit">Sign In</button>
				</form>
			</div>
		</div>
	)
}

export default LoginView;