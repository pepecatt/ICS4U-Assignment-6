import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
    const navigate = useNavigate();
    
    function loginPage() {
        navigate(`/login`);
    }

    return(
        <>
            <h1 className="Popflix">Popflix</h1>
            <button className="signIn" onClick={() => { loginPage()}}>Sign In</button>
        </>
    )
}

export default Header;