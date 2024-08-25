//rce snippet for class component, don't forget to remove the export at the start of the class when using snippet
import React, { Component } from 'react'

//don't forget with class components, 'this' must be used to access the function you make above
class ClassClick extends Component {
  clickHandler() {
    console.log('Clicked the button')
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
