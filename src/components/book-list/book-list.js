import React, { Component } from 'react'
import { connect } from 'react-redux'

import BookListItem from '../book-list-item'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import { withBookstoreService } from '../hoc'
import { fatchBooks, bookAddToCart } from '../../actions'
import { compose } from '../../utils'

import './book-list.css'

const BookList = ({ books, onAddBookToCart }) => {
   return (
      <ul className='book-list'>
         { books.map(item =><BookListItem key={item.id} book={item} onAddBookToCart={() => onAddBookToCart(item.id)}/> ) }
      </ul>
   )
}

class BookListContainer extends Component {
   componentDidMount() {
      this.props.fatchBooks()
   }


   render () {
      const { books, loading, error, onAddBookToCart } = this.props
      const content = loading ? <Spinner /> :
                        error ? <ErrorIndicator /> : 
                        <BookList books={books} onAddBookToCart={onAddBookToCart} />
      return content
   }
}

const mapStateToProps = (state) => {
   return {
      books: state.books,
      loading: state.loading,
      error: state.error
   }
}

const mapDispatchToProps = (dispatch, ownProps) => { 
   const { service } = ownProps
   return {
      fatchBooks: fatchBooks(dispatch, service),
      onAddBookToCart: (id) => dispatch(bookAddToCart(id))
   }
}

export default compose(
   withBookstoreService(),
   connect(mapStateToProps, mapDispatchToProps) 
)(BookListContainer)