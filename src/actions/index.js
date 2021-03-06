const booksLoaded = (newBooks) => {
   return {
      type: 'FETCH_BOOKS_SUCCESS',
      payload: newBooks
   }
}

const booksRequest = () => {
   return {
      type: 'FETCH_BOOKS_REQUEST'
   }
}

const booksError = (error) => {
   return {
      type: 'FETCH_BOOKS_FAILURE',
      payload: error
   }
}

const bookAddToCart = (bookId) => {
   return {
      type: 'BOOK_ADD_TO_CARD',
      payload: bookId
   }
}
const bookRemoveFromCart = (bookId) => {
   return {
      type: 'BOOK_REMOVE_FROM_CARD',
      payload: bookId
   }
}
const allBooksRemoveFromCart = (bookId) => {
   return {
      type: 'ALL_BOOKS_REMOVE_FROM_CARD',
      payload: bookId
   }
}

const fatchBooks = (dispatch, service) => () => {
   dispatch(booksRequest())
   service.getBooks()
      .then((data) => dispatch(booksLoaded(data)) )
      .catch((err) => dispatch(booksError(err)) )
}

export {
   fatchBooks,
   bookAddToCart,
   bookRemoveFromCart,
   allBooksRemoveFromCart
}