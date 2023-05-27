import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './BookListContainer.css'
import HomepageContainer from './HomepageContainer';
import BookItem from '../Components/BookItem';

const BookListContainer = ({books}) => {

        const [apiBooks, setApiBooks] = useState([])
        const [selectedBook, setSelectedBook] = useState({})
        const [apiBook, setApiBook] = useState({})

        useEffect(() => {
          getBooksFromAPI();
          console.log(apiBooks);
        }, [books])

        const getBooksFromAPI = () => {
                fetch("https://raw.githubusercontent.com/RebeccaRBell/library_api/main/library.json")
                .then(res => res.json())
                .then(data => setApiBooks(data))
        } 

        const handleBookClick =(book) => {
                setSelectedBook(book);
                console.log(selectedBook)
                apiBooks.map((book) => {
                  if (book.title === selectedBook.title){
                        setApiBook(book)
                  }
                })
        }

        const bookList = books.map((book, index) => {
        return (
					<div className="book-card" key={index} onClick={() => handleBookClick(book)}>
                                                        <div className="image">
								<img src={book.image} />
							</div>
							<div>
								<h1>{book.title}</h1>
								<h3>{book.author}</h3>
							</div>
					</div>
				);
        })


  return (
		<div>
			<div>{selectedBook ? <BookItem book={selectedBook} apiBook={apiBook} /> : null}</div>
			<div className="book-card-container">{bookList}</div>
		</div>
	);
}

export default BookListContainer