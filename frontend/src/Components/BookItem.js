import React from 'react'

const BookItem = ({book, apiBook}) => {
        console.log(apiBook)
  return (
    <div>
        <img src={book.image}/>
        <p>{apiBook.synopsis}</p>
    </div>
  )
}

export default BookItem