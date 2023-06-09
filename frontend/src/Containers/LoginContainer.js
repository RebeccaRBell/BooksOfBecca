import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getUsers } from '../helpers/UserService';
import './LoginContainer.css'

const LoginContainer = ({setPassword, setUsers, setUser, setEmail, users, password, user, email}) => {


        useEffect(() => {
          getUsers().then(res => res.json()).then(data => setUsers(data))
          console.log(users)
          verifyUser();
        }, [password])

        const handleEmail = (event) => {
                setEmail(event.target.value);
        }

        const handlePassword = (event) => {
                setPassword(event.target.value);
        }

	const verifyUser = () => {
		const foundUser = users.find((user) => {
			if (user.email === email && user.password === password) {
				return user;
				}
			});
		setUser(foundUser);
	};


  
       
  return (
		<div className='login-container'>
			<div className="opening-left">
				<h1 className='logo-text'>
					Shelf <br/>
					Share
				</h1>
			</div>
			<div className='opening-right'>
			<div className="login">
				<form className="login-form">
					<input
						type="text"
						placeholder="email"
						onChange={handleEmail}
						autoComplete="email"
					/>
					<input
						type="password"
						placeholder="password"
						onChange={handlePassword}
						autoComplete="current-password"
					/>
					{ user ? (
						<Link to="/home">
							<button className="login-button">Welcome</button>
						</Link>
					) : (
						<button className="login-button">Log In</button>
					)}
					<p>or</p>
					<button>Register</button>
				</form>
			</div>
		</div>
		</div>
	);
}

export default LoginContainer