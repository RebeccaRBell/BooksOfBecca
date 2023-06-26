import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../helpers/UserService";
import "./LoginContainer.css";
import BurgerMenu from "../Components/BurgerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const LoginContainer = ({
	setPassword,
	setUsers,
	setEmail,
	users,
	password,
	user,
	verifyUser,
}) => {
	const [hoverMenu, setHoverMenu] = useState(false);

	useEffect(() => {
		getUsers()
			.then((res) => res.json())
			.then((data) => setUsers(data));
		console.log(users);
		verifyUser();
	}, [password]);

	const hovering = `${hoverMenu ? "hovering" : "leave"}`;

	const handleEmail = (event) => {
		setEmail(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};



	const handleIconClick = () => {

			if (hoverMenu === true) {
				setHoverMenu(false);
			} else {
				setHoverMenu(true);
			}
	};



	return (
		<div className="login-register-container">
			{hoverMenu ? (
				<div>
					<BurgerMenu />
				</div>
			) : null}
			<div className="opening-left">
				<h1 className="logo-text">borro</h1>
				<h3>Your Online Library</h3>
			</div>
			<div className="opening-right">
				<div>
					<FontAwesomeIcon
						icon={faBars}
						onClick={handleIconClick}
						id="hamburger"
						className={hovering}
					/>
				</div>
				<div className="login">
					<form className="login-form">
						<h3>Log In</h3>
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
						<div className="login-buttons">
							{user ? (
								<Link to="/home">
									<button className="login-button">
										Welcome,{" "}
										{user.name.split(" ")[0]}!
									</button>
								</Link>
							) : (
								<button className="login-button">Log In</button>
							)}
							</div>
							<Link to="/register">
								<button>Register</button>
							</Link>

					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginContainer;
