import React from 'react'

const { 
   Provider: BookstoreServerProvider,
   Consumer: BookstoreServerConsumer
} = React.createContext()

export {
   BookstoreServerProvider,
   BookstoreServerConsumer
}