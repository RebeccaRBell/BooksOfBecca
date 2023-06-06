import React , {useState} from 'react'
import './HomepageContainer.css';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const HomepageContainer = ({user}) => {


	return (
		<div className="homepage-container">
		<Navbar />
			<h1>
			{user.name}, welcome to your personal library</h1>
		</div>
	);
}

export default HomepageContainer