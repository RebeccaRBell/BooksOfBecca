import React, { useState } from 'react'
import  './RegisterContainer.css'
import { registerUser } from '../helpers/UserService';
import LoginContainer from './LoginContainer';
import BurgerMenu from '../Components/BurgerMenu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowLeftRotate, faBars, faHandBackFist } from "@fortawesome/free-solid-svg-icons";

const RegisterContainer = () => {

        const [registerName, setRegisterName] = useState("");
        const [registerEmail, setRegisterEmail] = useState("");
        const [registerPassword, setRegisterPassword] = useState("");
	const [hoverMenu, setHoverMenu] = useState(false);
	const[hoverBackButton, setHoverBackButton] = useState(false);

	const handleRegisterEmail = (event) => {
		setRegisterEmail(event.target.value)
		console.log(registerEmail)
	}
		
	const handleRegisterName = (event) => {
			setRegisterName(event.target.value);
			console.log(registerName);
		};

	const handleRegisterPassword= (event) => {
		setRegisterPassword(event.target.value);
		console.log(registerPassword);
	};

	const handleRegisterUser =  (event) => {
		event.preventDefault();
		 registerUser("http://localhost:8080/api/users", {
			name: registerName,
			email: registerEmail,
			password: registerPassword,
			address: "",
			borrowing: [],
		})
		window.location.href="/"
		console.log("howdy")
	}


	const handleMenuHover = () => {
		setHoverMenu(true);
	};

	const handleMenuHoverLeave = () => {
		setHoverMenu(false);
	};

	const hovering = `${hoverMenu ? "hovering" : ""}`;

       const backButtonText = `${hoverBackButton ? "back-button-text": ""}`



  return (
		<div className="register-container">
			{hoverMenu ? (
				<div onMouseLeave={handleMenuHoverLeave}>
					<BurgerMenu />
				</div>
			) : null}
			<div className="opening-left">
				<h1 className="logo-text">Borro</h1>
				<h3>Your Online Library</h3>
			</div>
			<div className="opening-right">
				<div>
					<FontAwesomeIcon
						icon={faBars}
						onMouseOver={handleMenuHover}
						id="hamburger"
						className={hovering}
					/>
				</div>
				<div className="login">
					<FontAwesomeIcon
						id="back-icon"
						icon={faArrowCircleLeft}
						onClick={() => {
							window.location.href = "/";
						}}
					/>
					<form className="login-form">
						<h3>Register</h3>

						<input
							type="text"
							placeholder="name"
							onInput={handleRegisterName}
							autoComplete="name"
						/>
						<input
							type="text"
							placeholder="email"
							onInput={handleRegisterEmail}
							autoComplete="email"
						/>
						<input
							type="password"
							placeholder="password"
							onInput={handleRegisterPassword}
							autoComplete="new-password"
						/>
						<button onClick={handleRegisterUser}>Register</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default RegisterContainer