import React, {useState, useEffect} from 'react';
import './App.css';
import HomepageContainer from './Containers/HomepageContainer';
import {getBooks} from './helpers/BookService.js'



function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, [])


  const fetchBooks = () => {
    getBooks().then(res => res.json())
    .then(data => setBooks(data))
    console.log(books)
  }


  return (
    <div className="App">
      <HomepageContainer books={books} />
    </div>
  );
}

export default App;
