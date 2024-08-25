//for class components, import both React and class components
import React, { Component } from 'react'

//render and extends are needed to use a class component
class Welcome extends Component {
  render() {
    return <h1>Welcome {this.props.name}</h1>
  }
}

export default Welcome
