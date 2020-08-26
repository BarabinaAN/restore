import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
   HomePage,
   CartPage
} from '../pages'
import Header from '../header'
import Spinner from '../spinner'

import './app.css'


const App = () => {
   return (
      <main role='main' className='container'>
         {/* <Spinner /> */}
         <Header numItems={5} total={1500}/>
         <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/cart' component={CartPage} />
            <Route />
         </Switch>
      </main>
   )
}

export default App