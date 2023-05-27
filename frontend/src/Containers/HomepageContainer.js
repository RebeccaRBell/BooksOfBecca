import React , {useState} from 'react'
import './HomepageContainer.css';
import { Link } from 'react-router-dom';

const HomepageContainer = () => {

  const [user, setUser] = useState(null);
  const [registerMode, setRegisterMode] = useState(false);

  const handleRegister = () => {
    setRegisterMode(true);
  }
	return (
		<div className="homepage-container">
			<div className="opening-left"></div>
			<div className="login">
				<h1>ShelfShare</h1>
				<p>An online community for borrowing books</p>
				<form className="login-form">
					{registerMode === true ? (
						<input type="text" placeholder="name" />
					) : null}
					<input type="text" placeholder="email" />
					<input type="password" placeholder="password" />
					{user !== null ? (<Link to='/books'><button>Log In</button></Link>) :
					<button>Log In</button> }
					<p>or</p>
					<button onClick={handleRegister}>Register</button>
				</form>
			</div>
		</div>
	);
}

export default HomepageContainer