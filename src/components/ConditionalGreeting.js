//Conditional Greeting via three methods (first two preferred)
//1. Short Circuit
//2. Ternary Conditional Opera.
//3. Element variable
//4. IF/ELSE

import React, { Component } from 'react'

class ConditionalGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true,
    }
  }

  render() {
    //1. Short Circuit
    return this.state.isLoggedIn && <div>Welcome, Doug</div>

    /*
    //2. Ternary Conditional Operator
    return this.state.isLoggedIn ? (
      <div>Welcome, Doug</div>
    ) : (
      <div>Welcome, Guest</div>
    )
    
    //3. Element variable
    let message
    if (this.state.isLoggedIn) {
      message = <div>Welcome, Doug</div>
    } else {
      message = <div>Welcome, Guest</div>
    }
    return <div>{message}</div>

    //4. if/else
    if (this.state.isLoggedIn) {
      return <div>Welcome Doug</div>
    } else {
      return <div>Welcome Guest</div>
    }
    */
  }
}

export default ConditionalGreeting
