import React, { Component } from 'react'
import ErrorIndicator from '../error-indicator'

export default class ErrorBoundry extends Component {
   state = {
      hasError: true
   }

   componentDidCatch() {
      this.setState({
         hasError: true
      })
   }

   render() {
      const { hasError } = this.state
      const { children } = this.props
      const content = hasError ? <ErrorIndicator /> : children
      return content
   }
}