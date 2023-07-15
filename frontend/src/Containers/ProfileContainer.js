import React from 'react'
import Navbar from '../Components/Navbar';
import './ProfileContainer.css'

const ProfileContainer = ({setUser, user, logOutUser}) => {

        const handleLogOut = () => {
              logOutUser();
              window.location.href="/"
              setUser(null)
        }

  return (
		<>
			<div className="profile-container">
				<Navbar />
				<div className="profile-links">
					<div>Your Subscription</div>
					<div>Subscription Plans</div>
					<div onClick={handleLogOut}>Log Out</div>
				</div>
			</div>
		</>
	);
}

export default ProfileContainer