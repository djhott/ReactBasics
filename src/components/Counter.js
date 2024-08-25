import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }
  //setState(object,function)
  //anything that happens after setState won't run first. That's why console log is passed as second callback parameter
  //setState(function,props) to pass in a previous state with prevState. This will make sure each call is handled in incrementThree()
  increment() {
    //this.setState({
    //  count: this.state.count + 1,
    //}, () => {
    //    console.log('Callback value', this.state.count)
    //})

    //setState with prevState function passed to ensure each state update is not grouped as one call
    //setState can also take props as a second parameter setState(prevState,props)
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }

  incrementThree() {
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementThree()}>Increment</button>
      </div>
    )
  }
}

export default Counter
