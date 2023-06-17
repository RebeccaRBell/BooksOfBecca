import React, {useState} from 'react'
import './BurgerMenu.css'
import { Link } from 'react-router-dom'
import AboutSection from './AboutSection'
import BrowseSection from './BrowseSection'
import ContactSection from './ContactSection'

const BurgerMenu = () => {

	const [aboutClick, setAboutClick] = useState(false)
	const [browseClick, setBrowseClick] = useState(false)
	const [contactClick, setContactClick] = useState(false)

	const handleAboutClick = () => {
		setAboutClick(true);
		setBrowseClick(false);
		setContactClick(false)
	}

	const handleBrowseClick = () => {
		setBrowseClick(true)
		setAboutClick(false);
		setContactClick(false);
	}

	const handleContactClick = () => {
		setContactClick(true)
		setAboutClick(false);
		setBrowseClick(false);

	}


  return (
		<div className="burger-menu-container">
			<div className="navbar">
				<ul className="navbar-list">
						<li onClick={handleAboutClick}>About</li>
						<li onClick={handleBrowseClick}>Browse</li>
						<li onClick={handleContactClick}>Contact</li>
				</ul>
			</div>
		{aboutClick ? 
		<AboutSection />:null}
		{browseClick ?
		<BrowseSection />: null}
		{contactClick?
		<ContactSection />: null}
		</div>
	);
}

export default BurgerMenu