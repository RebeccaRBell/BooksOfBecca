import React, {useState} from 'react'
import './BurgerMenu.css'
import { Link } from 'react-router-dom'
import AboutSection from './AboutSection'

const BurgerMenu = () => {

	const [aboutHover, setAboutHover] = useState(false)

	const handleAboutHover = () => {
		setAboutHover(true);
	}
	const handleLeaveAbout = () => {
		setAboutHover(false);
	}

  return (
		<div className="burger-menu-container">
			<div className="navbar">
				<ul className="navbar-list">
						<li onClick={handleAboutHover}>About</li>
						<li>Browse</li>
						<li>Contact</li>
				</ul>
			</div>
		{aboutHover ? 
		<AboutSection handleLeaveAbout={handleLeaveAbout}/>:null}
		</div>
	);
}

export default BurgerMenu