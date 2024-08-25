import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Before click',
    }
    //old way, but most accepted, bind in the constructor, anywhere else waits resources in render()
    //this.clickHandler = this.clickHandler.bind(this)
  }
  //best way currently is to set up the function outside of render with the arrow function
  /*
    clickHandler(){
        this.setState({
            message: 'After click'
        })
        console.log(this);
    }
        */
  clickHandler = () => {
    this.setState({
      message: 'After click',
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
