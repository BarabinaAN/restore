import React from 'react'
import Spinner from '../spinner'
import ErrorBoundry from '../error-boundry'

import BookstoreService from '../../services/bookstore-service'
import { BookstoreServerProvider } from '../bookstore-service-context'
import { withBookstoreService } from '../hoc'
import './app.css'

const service = new BookstoreService()

const App = () => {
   return (
      <BookstoreServerProvider service={service} >
         <Spinner />
         <ErrorBoundry />
      </BookstoreServerProvider>
   )
}

const mapMethodsToProps = (service) => {
   return {
      getBooks: service.getBooks
   }
}

export default withBookstoreService(mapMethodsToProps)(App)