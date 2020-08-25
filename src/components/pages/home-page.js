import React from 'react'
import BookList from '../book-list'

const HomePage = () => {
   const books =[];
   
   return (
      <div>
        <BookList books={books}/>
      </div>
   )
}

export default HomePage