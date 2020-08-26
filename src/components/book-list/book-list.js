import React, { Component } from 'react'
import { connect } from 'react-redux'

import BookListItem from '../book-list-item'
import { withBookstoreService } from '../hoc'
import { booksLoaded } from '../../actions'
import { compose } from '../../utils'

import './book-list.css'

class BookList extends Component {
   componentDidMount() {
      const { service } = this.props
      const data = service.getBooks()
      console.log(data);

      this.props.booksLoaded(data)
   }

   render () {
      const { books } = this.props
      return (
         <ul>
            {
               books.map(item =>{
                  return (
                     <li key={item.id}>
                        <BookListItem book={item}/>
                     </li>
                  )
               })
            }
         </ul>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      books: state.books
   }
}

const mapDispatchToProps = { booksLoaded }

export default compose(
   withBookstoreService(),
   connect(mapStateToProps, mapDispatchToProps) 
)(BookList)