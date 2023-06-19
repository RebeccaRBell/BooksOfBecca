import React from 'react'
import './ContactSection.css'

const ContactSection = () => {


  return (
		<div className="contact-container">
			<div className="contact-text-container">
				<p>
					If you have any queries about our services prior to registering with
					us, please contact us via the form below.
				</p>
				<form>
						<input type="text" placeholder="Name" />
						<input type="email" placeholder="Email" />
						<textarea rows={8} placeholder='Message'></textarea>
            <button>Send</button>
				</form>
			</div>
		</div>
	);
}

export default ContactSection