import React from 'react'
import './ContactSection.css'

const ContactSection = () => {


  return (
		<div className="contact-container">
			<div className="contact-text-container">
				<h3>Get in touch</h3>
				<p>
					If you have any queries about our services prior to registering with
					us, please contact us via the form below.
				</p>
				<form>
					<div>
						<input type="text" placeholder="name" />
						<input type="email" placeholder="email" />
					</div>
					<div>
						<textarea rows={5}>Message</textarea>
            <button>Send</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactSection