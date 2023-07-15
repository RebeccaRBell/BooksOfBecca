import React, { useEffect } from 'react'
import './BookItem.css'
import { getBooks } from '../helpers/BookService'

const BookItem = ({selectedBook}) => {


  return (
    <div className='selected-book-container'>
    <div>
        <img src={selectedBook.image}/>
</div>
<div>
        <h3>{selectedBook.title}</h3>
        <h4>{selectedBook.author}</h4>
        {/* <p>{apiBook.synopsis}</p> */}
        </div>
    </div>
  )
}

export default BookItem