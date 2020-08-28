import updateBookList from './update-book-list'
import updateCart from './update-cart'


const reducer = (state, action) => {
   return {
      bookslist: updateBookList(state, action),
      cart: updateCart(state, action)
   }
}

export { reducer }