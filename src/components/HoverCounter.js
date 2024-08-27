//hover functionality to illustrate Higher Order Component. Avoid reusing the same code in different components!
//const NewComponent = highOrderComponent(originalComponent)
//see withCounter.js for the additional component functionality
//rce snippet
import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props //extract the props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter, 1) //increase hover only by 1 each hover
