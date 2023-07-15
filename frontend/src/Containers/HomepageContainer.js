import React , {useEffect, useState} from 'react'
import './HomepageContainer.css';
import Navbar from '../Components/Navbar';
import { getBooks } from '../helpers/BookService';

const HomepageContainer = ({handleBookClick, user}) => {

	const [homepageBooks, setHomepageBooks] = useState([]);
	const [newBooks, setNewBooks] = useState([]);
	


  useEffect(() => {
		getBooks()
			.then((res) => res.json())
			.then((data) => {
				setHomepageBooks(data);
				setNewBooks([
					data[data.length - 1],
					data[data.length - 2],
					data[data.length - 3],
					data[data.length - 4],
				]);
			});
	}, []);

	const userBooksList = user.borrowing.map((book) => {
		return <img src={book.image}/>
	})



	const firstName = user.name.split(" ");

	const newBooksList = newBooks.map((book, index) => {
	  return (
			<div
				className="new-book-container"
			>
				<img src={book.image}  />
			</div>
		);
	  
	})

	

	return (
		<>
			<Navbar />
			<div className="homepage-container">
				<h1>{firstName[0]}, welcome to your personal library</h1>
				<div className="homepage-backing">
					<div className="users-books-cont">
						<h3>Your Books</h3>
						<div>
							{user.borrowing.length === 0 ? (
								<div>
									<h3 className='no-books'>You're not currently borrowing any books</h3>
									<a href="/books">
										<button>Explore our collection</button>
									</a>
								</div>
							) : (
								<div className="users-books-list">{userBooksList}</div>
							)}
						</div>
					</div>
					<div className='recently-added-cont'>
						<h3>Recently Added</h3>
						<div className='new-books-container'>
							{newBooksList}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HomepageContainer