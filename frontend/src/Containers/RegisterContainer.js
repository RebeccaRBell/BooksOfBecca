import React, { useState } from 'react'

const RegisterContainer = () => {

        const [registerName, setRegisterName] = useState("");
        const [registerEmail, setRegisterEmail] = useState("")
        const [registerPassword, setRegisterPassword] = useState("")




  return (
		<div>
			<div className="opening-left"></div>
			<div className="login">
				<h1>ShelfShare</h1>
				<p>An online community for borrowing books</p>
				<form className="login-form">
					<input type="text" placeholder="name" onChange={handleRegisterName} autoComplete='name'/>
					<input
						type="text"
						placeholder="email"
						onChange={handleRegisterEmail}
                                                autoComplete='email'
					/>
					<input
						type="password"
						placeholder="password"
						onChange={handleRegisterPassword}
						autoComplete="new-password"
					/>
					{user !== null ? (
						<Link to="/books">
							<button>Log In</button>
						</Link>
					) : (
						<button>Log In</button>
					)}
					<p>or</p>
					<button>Register</button>
				</form>
			</div>
		</div>
	);
}

export default RegisterContainer