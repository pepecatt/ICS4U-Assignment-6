import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../context';
import React from 'react';
import './Header.css';
import cartImage from "../assets/popcornbag.png";

function Header() {
	const { loggedIn, setLoggedIn, cartOpen, setCartOpen } = useStoreContext();
	const navigate = useNavigate();

	function loginPage() {
		navigate(`/login`);
	}

	function logout() {
		navigate(`..`);
		setLoggedIn(false);
	}

	function cart() {
		//navigate(`.`);
        if (cartOpen) {
            setCartOpen(false);
        } else {
            setCartOpen(true);
        }
	}

	return (
		<div className="header-container">
			<h1 className="Popflix">Popflix</h1>
			{!loggedIn && (
				<button className="signIn" onClick={() => { loginPage() }}>Sign In</button>
			)}
			{loggedIn && (
				<div className="loggedIn">
					<button className="logout" onClick={() => { logout() }}>Log Out</button>
					<button className="cart" onClick={() => { cart() }}>
						<img src={cartImage}></img>
					</button>
				</div>
			)}
		</div>
	)
}

export default Header;