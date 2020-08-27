import React from 'react'
import './book-list-item.css'

const BookListItem = ({ book, onAddBookToCart }) => {
   const { title, author, price, image } = book
   return (
      <li className='book-list-item'>
         <div className='book-cover'>
            <img src={image} alt={title}/>
         </div>
         <div className='book-details'>
            <a href='/' className='book-title'>{title}</a>
            <div className='book-author'>{author}</div>
            <div className='book-price'>{price} P</div>
            <button 
               onClick={onAddBookToCart}
               className='btn btn-info add-to-cart'
            >
               Добавить
            </button>
         </div>
      </li>
   )
}

export default BookListItem