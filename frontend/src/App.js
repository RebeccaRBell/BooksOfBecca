import './App.css';
import React, {useEffect, useState} from 'react';
import HomepageContainer from './Containers/HomepageContainer';
import BookListContainer from './Containers/BookListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { getBooks } from './helpers/BookService';
import BookItem from './Components/BookItem';



function App() {

  	const [books, setBooks] = useState([]);

		useEffect(() => {
			fetchBooks();
		}, []);

		const fetchBooks = () => {
			getBooks()
				.then((res) => res.json())
				.then((data) => setBooks(data));
			console.log(books);
		};



  return (
    <div className="App">
  <Router>
  <Navbar />
    <Routes>
      <Route path ="/" element={<HomepageContainer />}/>
      <Route path = "/books" element={<BookListContainer books={books}/>}/>
    </Routes>
  </Router>
    </div>
  );
}

export default App;
