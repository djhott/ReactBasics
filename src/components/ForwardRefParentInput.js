//1. Parent component creates a ref, then attaches it to child component instance
//2. Child component sees that ref and says "Not me! You want the native element.""
//3. Child receives ref from the parent and then attachs it to native input element
//4. Now parent can access child using this.inputRef.current.focus(). The child is forwarding ref={ref}
//rare use, mostly with higher order components
import React, { Component } from 'react'
import ForwardRefDemo from './ForwardRefDemo'

class ForwardRefParentInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  clickHandler = () => {
    {
      /*inputRef.current points to the native input element and not ForwardRefDemo input instance */
    }
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <ForwardRefDemo ref={this.inputRef} />
        <button onClick={this.refHandler}>Focus input</button>
      </div>
    )
  }
}

export default ForwardRefParentInput
