const initialState = {
   books: [],
   cartItems: [
      {
         id: '1', 
         name: 'First', 
         count: '2', 
         total: 200
      },
      {
         id: '2', 
         name: 'Second', 
         count: '5', 
         total: 1500
      }
   ],
   orderTotal: 2569,
   loading: true,
   error: null
}

const reducer = ( state = initialState, action ) => {
   switch (action.type) {
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