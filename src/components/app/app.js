import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
   HomePage,
   CardPage
} from '../pages'
import Spinner from '../spinner'

import './app.css'


const App = () => {
   return <>
      <Spinner />
      <Switch>
         <Route path='/' exact component={HomePage}/>
         <Route path='/card' component={CardPage}/>
         <Route />
      </Switch>
   </>
}

export default App