import './LoginView.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginView() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    function login(event) {
        event.preventDefault();
        if (password == "pass") {
            navigate("/movies/genre/28");
        } else {
            alert("Wrong password!");
        }
    }

    return (
        <div className="login-container">
            <h1 className="Popflix">Popflix</h1>
            <div className='login'>
                <form onSubmit={(event) => { login(event) }}>
                    <label>Sign In</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                        placeholder="Email"
                        required />
                    <input
                        type="text"
                        value={password}
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