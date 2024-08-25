//used to compare performace with PureComp.js, a pure component
//ParentComp.js is also used to show the effects on a child

import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('**REGULAR COMPONENT**')
    return <div>Regular Component {this.props.name}</div>
  }
}

export default RegComp
