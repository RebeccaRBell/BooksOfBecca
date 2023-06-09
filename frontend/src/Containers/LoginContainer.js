import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getUsers } from '../helpers/UserService';

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
		<div>
			<div className="opening-left"></div>
			<div className="login">
				<h1>ShelfShare</h1>
				<p>An online community for borrowing books</p>
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
	);
}

export default LoginContainer