import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className='navbar-cont'>
        <Link to={"/home"} className='nav-link'>Home</Link>
        <Link to={"/books"} className='nav-link'>Books</Link>
        <Link to={"/profile"} className='nav-link'>Profile</Link>
    </div> 
  )
}

export default Navbar