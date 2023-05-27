import React from 'react'
import './BookItem.css'

const BookItem = ({book, apiBook}) => {
        console.log(apiBook)
  return (
    <div className='selected-book-container'>
    <div>
        <img src={book.image}/>
</div>
<div>
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>
        <p>{apiBook.synopsis}</p>
        </div>
    </div>
  )
}

export default BookItem