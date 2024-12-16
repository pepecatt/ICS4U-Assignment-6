import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useStoreContext } from '../context';
import './LoginView.css';

function LoginView() {
	const { email, password, genreList, setLoggedIn } = useStoreContext();
	const enteredEmail = useRef('');
	const enteredPassword = useRef('');
	const navigate = useNavigate();

	function login(e) {
		e.preventDefault();
		if (enteredEmail.current.value == email && enteredPassword.current.value == password) {
			navigate(`/movies/genre/${genreList[0].id}`);
			setLoggedIn(true);
		} else {
			alert("Your email or password input is incorrect!");
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
						placeholder="Email"
						required />
					<input
						type="text"
						ref={enteredPassword}
						placeholder="Password"
						required />
					<button type="submit">Sign In</button>
				</form>
			</div>
		</div>
	)
}

export default LoginView;