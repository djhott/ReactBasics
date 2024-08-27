//Higher Order Component demo
//Avoid reusing the same code in different components with HOC!
//const NewComponent = highOrderComponent(originalComponent)
//see withCounter.js for the additional component functionality
//rce shippet

import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props //get from withCounter.js
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name} clicked {count} times
        </button>
      </div>
    )
  }
}

export default withCounter(ClickCounter, 5) //increase the counter by 5 when clicked
