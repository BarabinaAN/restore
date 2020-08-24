import React from 'react'
import { BookstoreServerConsumer } from '../bookstore-service-context'

const withBookstoreService = () => (Wrapper) => {
   return (props) => {
      return (
         <BookstoreServerConsumer>
            {
               (service) => {
                  // const serviceProps = mapMethodsToProps(service)
                  return <Wrapper {...props} service={service}/>
                  // return <Wrapper {...props} {...serviceProps}/>
               }
            }
         </BookstoreServerConsumer>
      )
   }
}

export default withBookstoreService