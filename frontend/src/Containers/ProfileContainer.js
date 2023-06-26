import React from 'react'
import Navbar from '../Components/Navbar';

const ProfileContainer = ({setUser, user, logOutUser}) => {

        const handleLogOut = () => {
              logOutUser();
              window.location.href="/"
              setUser([])
        }

  return (
		<>
			<Navbar />
			<div className="profile-container">
				<div>Your Subscription</div>
				<div>Subscription Plans</div>
        <div onClick={handleLogOut}>Log Out</div>
			</div>
		</>
	);
}

export default ProfileContainer