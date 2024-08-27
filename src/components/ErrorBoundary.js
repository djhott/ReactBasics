//Error Boundaries do not work for clicks. Use try catch instead
//also, app.js should extend class component, but since class components are depreciated, not updating it for now
import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStatefromError(error) {
    return {
      hasError: true,
    }
  }

  //error logged to the console anyway, but here is the function anyway
  componentDidCatch(error, info) {
    console.log(error)
    console.log(info)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Not an employee</h1>
    }
    //return component we are actually rendering if no error, which is 'children'
    return this.props.children
  }
}

export default ErrorBoundary
