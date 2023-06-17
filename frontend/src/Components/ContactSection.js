import React from 'react'
import './ContactSection.css'

const ContactSection = ({handleLeaveContact}) => {

  const handleCloseContact = () => {
    handleLeaveContact()
  }

  return (
    <div className='contact-container'>ContactSection</div>
  )
}

export default ContactSection