import React, { Component } from 'react'
import { connect } from 'react-redux'

import BookListItem from '../book-list-item'
import Spinner from '../spinner'
import { withBookstoreService } from '../hoc'
import { booksLoaded, booksRequest } from '../../actions'
import { compose } from '../../utils'

import './book-list.css'

class BookList extends Component {
   componentDidMount() {
      const { service, booksLoaded, booksRequest } = this.props
      booksRequest()
      service.getBooks()
         .then((data) => booksLoaded(data))
   }

   renderList = (data) => {
      return (
         <ul className='book-list'>
            { data.map(item =><BookListItem key={item.id} book={item}/> ) }
         </ul>
      )
   }

   render () {
      const { books, loading} = this.props
      const content = !loading ? this.renderList(books) : <Spinner />
      return content
   }
}

const mapStateToProps = (state) => {
   return {
      books: state.books,
      loading: state.loading
   }
}

const mapDispatchToProps = { booksLoaded, booksRequest }

export default compose(
   withBookstoreService(),
   connect(mapStateToProps, mapDispatchToProps) 
)(BookList)