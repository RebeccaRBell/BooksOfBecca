import React, { useEffect, useState } from 'react'
import './BrowseSection.css'
import { getBooks } from '../helpers/BookService'

const BrowseSection = () => {

  const [browseBooks, setBrowseBooks] = useState([])

  useEffect(() => {
    getBooks()
			.then((res) => res.json())
			.then((data) => setBrowseBooks(data));
  })

  const bookList = browseBooks.map((book) => {
    return <div className='browse-book-item'>
      <img src={book.image}/>
    </div>
  })

  return (
    <div className='browse-container'>
    <div className='browse-text-container'>
        <h3>Below is a selection of our titles</h3>
    </div>
    <div className='browse-book-list'>{bookList}</div>
    </div>
  )
}

export default BrowseSection