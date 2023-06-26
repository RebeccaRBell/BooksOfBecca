import React , {useState} from 'react'
import './HomepageContainer.css';
import Navbar from '../Components/Navbar';

const HomepageContainer = () => {

	const user = {"name": "Sue Baker", "borrowing" : []}


	const userBooksList = user.borrowing.map((book) => {
		return <img src={book.image}/>
	})

	const firstName = user.name.split(" ");

	return (
		<div className="homepage-container">
			<Navbar />
			<h1>{firstName[0]}, welcome to your personal library</h1>
			<div className='homepage-backing'>
				<div className="users-books">
					<h3>Your Books</h3>
					<div>
						{user.borrowing.length === 0 ? (
							<div>
								<h3>You're not currently borrowing any books</h3>
								<a href="/books">
									<button>Explore our collection</button>
								</a>
							</div>
						) : (
							<div className="users-books-list">{userBooksList}</div>
						)}
					</div>
				</div>
				<div>
					<h3>Recently Added</h3>
				</div>
			</div>
		</div>
	);
}

export default HomepageContainer