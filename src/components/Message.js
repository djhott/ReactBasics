import React, { Component } from 'react'

//render and extends are needed to use a class component
class Message extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Welcome visitor',
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing',
    })
  }

  //add () to return and div tags when multiple lines, () for multiple lines, div for one html element to return
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message
