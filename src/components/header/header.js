import React from 'react'
import './header.css'

const Header = ({ numItems, total }) => {
   return (
      <header className='header row'>
         <a className='logo text-dark' href='#'>ReStore</a>
         <a className='shopping-cart' href='#'>
            <i className='cart-icon fa fa-shopping-cart'></i>
            {numItems} книг - {total} P
         </a>
      </header>
   )
}
export default Header