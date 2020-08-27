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

const fatchBooks = (dispatch, service) => () => {
   dispatch(booksRequest())
   service.getBooks()
      .then((data) => dispatch(booksLoaded(data)) )
      .catch((err) => dispatch(booksError(err)) )
}

export {
   fatchBooks
}