import React from 'react'

import icon from './wrong.png'
import './error-indicator.css'

const ErrorIndicator = () => {
   return (
      <div>
         <img src={icon} className='icon'/>
         <p>Sorry, something wrong</p>   
      </div>
   )
}
export default ErrorIndicator