const initialState = {
   books: [],
   cartItems: [],
   orderTotal: 2569,
   loading: true,
   error: null
}

const reducer = ( state = initialState, action ) => {
   switch (action.type) {
      case 'BOOK_ADD_TO_CARD':
         const bookId = action.payload
         const book = state.books.find((item) => item.id === bookId)
         const newItem = {
            id: book.id, 
            name: book.title, 
            count: '2', 
            total: book.price
         }
         return {
            ...state,
            cartItems: [
               ...state.cartItems,
               newItem
            ]
         }
      case 'FETCH_BOOKS_REQUEST':
         return {
            ...state,
            books: [],
            loading: true,
            error: null
         }
      case 'FETCH_BOOKS_SUCCESS':
         return {
            ...state,
            books: action.payload,
            loading: false,
            error: null
         }
      case 'FETCH_BOOKS_FAILURE':
         return {
            ...state,
            books: [],
            loading: false,
            error: action.payload
         }
      default:
         return state
   }
}

export { reducer }