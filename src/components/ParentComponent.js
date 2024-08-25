//this component will pass a method to ChildComponent to be used in ChildComponent
//rce snippet
//1. Define the method greetPerson that will receive a parameter of coworker from child
//2. On the ChildComponent, pass the method as a prop. greetPerson={this.greetPerson}

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstPerson: 'Doug',
    }

    //don't forget to bind the method
    this.greetPerson = this.greetPerson.bind(this)
  }

  greetPerson(coworker) {
    alert(`Hello ${this.state.firstPerson} from ${coworker}`)
  }

  //passing a reference to greetPerson as a prop, so no parentheses on greetPerson
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetPerson} />
      </div>
    )
  }
}

export default ParentComponent
