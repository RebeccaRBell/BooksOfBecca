import React , {useState} from 'react'
import './HomepageContainer.css';
import { Link } from 'react-router-dom';

const HomepageContainer = () => {

  const [user, setUser] = useState(null);
  const [registerMode, setRegisterMode] = useState(false);

  const handleRegister = (event) => {
	event.preventDefault();
    	setRegisterMode(true);
  }
	return (
		<div className="homepage-container">
			
		</div>
	);
}

export default HomepageContainer