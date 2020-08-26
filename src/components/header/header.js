import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = ({ numItems, total }) => {
   return (
      <header className='header row'>
         <Link className='logo text-dark' to='/'>ReStore</Link>
         <Link className='shopping-cart' to='/cart/'>
            <i className='cart-icon fa fa-shopping-cart'></i>
            {numItems} книг - {total} P
         </Link>
      </header>
   )
}
export default Header