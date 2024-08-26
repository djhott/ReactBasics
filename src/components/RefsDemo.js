//demo of createRef() for putting focus on an element of the DOM
import React, { Component } from 'react'

//create refs in the constructor to use throughout the component
class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  //'current' holds the focus, created from createRef() above
  componentDidMount() {
    this.inputRef.current.focus()
    console.log(this.inputRef)
  }

  clickHandler = () => {
    alert(this.inputRef.current.value)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
