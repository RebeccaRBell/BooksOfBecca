import React from 'react'
import './LoggedOutNavbar.css'
import { Link } from 'react-router-dom'

const LoggedOutNavbar = () => {
  return (
		<div className="navbar">
			<ul className="navbar-list">
				<Link to={"/about"}>
					<li>About</li>
				</Link>
				<Link to={"/contact"}>
					<li>Contact</li>
				</Link>
			</ul>
		</div>
	);
}

export default LoggedOutNavbar