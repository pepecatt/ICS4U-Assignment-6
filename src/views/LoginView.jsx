import { useNavigate } from "react-router-dom";
import { useStoreContext } from '../context';
import './LoginView.css';

function LoginView() {
	const enteredEmail = useRef('');
	const { email } = useStoreContext();
	const enteredPassword = useRef('');
	const { password } = useStoreContext();
	const navigate = useNavigate();

	function login(event) {
		event.preventDefault();
		if (enteredEmail == email && enteredPassword == password) { // retrieve password from context
			navigate("/movies/genre");
		} else {
			alert("Your email or psasword input is incorrect!");
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