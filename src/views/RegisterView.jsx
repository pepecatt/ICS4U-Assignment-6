import { useNavigate } from "react-router-dom";
import { useStoreContext } from '../context';
import "./RegisterView.css";

function RegisterView() {
	const firstName = useRef('');
	const { setFirstName } = useStoreContext();
	const lastName = useRef('');
	const { setLastName } = useStoreContext();
	const email = useRef('');
	const { setEmail } = useStoreContext();
	const password = useRef('');
	const confirmPassword = useRef('');
	const { setPassword } = useStoreContext();
	const navigate = useNavigate();

	function login(event) {
		event.preventDefault();
		if (confirmPassword.equalsTo(password)) {
			
		}
	}

	return (
		<div className="register-container">
			<form onSubmit={(event) => { login(event) }}>
				<label>Create an Account</label>
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
					type="text"
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
				<button type="submit">Register</button>
			</form>
			<p onClick={() => { navigate(`/login`) }}>Already have an account? <a href="#">Login</a></p>
		</div>
	)
}

export default RegisterView;