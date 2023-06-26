import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <div className='navbar-cont'>
        <Link to={"/home"} className='nav-link'><FontAwesomeIcon icon={faHome}/></Link>
        <Link to={"/books"} className='nav-link'><FontAwesomeIcon icon={faBookOpen}/></Link>
        <Link to={"/profile"} className='nav-link'><FontAwesomeIcon icon={faUserCircle}/></Link>
    </div> 
  )
}

export default Navbar