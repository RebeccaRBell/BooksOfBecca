import React, { useState } from 'react'
import  './RegisterContainer.css'
import { registerUser } from '../helpers/UserService';
import LoginContainer from './LoginContainer';

const RegisterContainer = () => {

        const [registerName, setRegisterName] = useState("");
        const [registerEmail, setRegisterEmail] = useState("")
        const [registerPassword, setRegisterPassword] = useState("")

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



  return (
		<div className='register-container'>
			<div className="opening-left">
				<h1 className="logo-text">Borro</h1>
				<h3>Your Personalised Online Library</h3>
			</div>
			<div className="opening-right">
				<div className='login'>
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