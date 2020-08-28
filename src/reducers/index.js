const initialState = {
   books: [],
   cartItems: [],
   orderTotal: 2569,
   loading: true,
   error: null
}

const updateItemsCart = (items, item, idx) => {
   if (item.count === 0) {
      return [
         ...items.slice(0, idx),
         ...items.slice(idx + 1)
      ]
   }

   if (idx === -1) {
      return [
         ...items,
         item
      ]
   }
   return [
      ...items.slice(0, idx),
      item,
      ...items.slice(idx + 1)
   ]
}

const updateItemCart = (book, item={}, num ) => {
   const {
      id = book.id,
      title = book.title,
      count = 0,
      total = 0
   } = item

   return {
      id,
      title,
      count: count + num,
      total: total + num*book.price
   }
}

const updateOrder = ( state, bookId, num ) => {
   const { books, cartItems } = state

   const book = books.find((item) => item.id === bookId)
   const itemIndex = cartItems.findIndex(({ id }) => id === bookId)
   const item = cartItems[itemIndex]

   const newItem = updateItemCart(book, item, num)

   return {
      ...state,
      cartItems: updateItemsCart(cartItems, newItem, itemIndex)
   }
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'BOOK_ADD_TO_CARD':
         return updateOrder(state, action.payload, 1)

      case 'BOOK_REMOVE_FROM_CARD':
         return updateOrder(state, action.payload, -1)

      case 'ALL_BOOKS_REMOVE_FROM_CARD':
         const item = state.cartItems.find(({ id }) => id === action.payload)
         return updateOrder(state, action.payload, -item.count)

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