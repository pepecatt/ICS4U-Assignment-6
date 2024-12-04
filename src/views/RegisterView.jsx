import { useNavigate } from "react-router-dom";
import "./RegisterView.css";

function RegisterView() {
    const navigate = useNavigate();

    return (
        <div className="register-container">
            <h1 className="Popflix">Popflix</h1>

            <div className='register'>
                <form action="#">
                    <label>Create an Account</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        required />
                    <input
                        type="text"
                        placeholder="Last Name"
                        required />
                    <input
                        type="text"
                        placeholder="Email"
                        required />
                    <input
                        type="text"
                        placeholder="Password"
                        required />
                    <input
                        type="text"
                        placeholder="Confirm Password"
                        required />
                    <button type="submit">Register</button>
                </form>
                <p onClick={() => { navigate(`/login`) }}>Already have an account? <a href="#">Login</a></p>
            </div>
        </div>
    )
}

export default RegisterView;