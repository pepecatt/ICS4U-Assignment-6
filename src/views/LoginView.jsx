import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useStoreContext } from '../context';
import './LoginView.css';

function LoginView() {
	const { email, password, genreList } = useStoreContext();
	const enteredEmail = useRef('');
	const enteredPassword = useRef('');
	const navigate = useNavigate();

	function login(event) {
		event.preventDefault();
		if (enteredEmail == email && enteredPassword == password) {
			navigate(`/movies/genre/${genreList[0].id}`);
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