import React from 'react'

const ProfileContainer = ({setUser, user, logOutUser}) => {

        const handleLogOut = () => {
              logOutUser();
              window.location.href="/"
              setUser([])
        }

  return (
    <div>
        <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default ProfileContainer