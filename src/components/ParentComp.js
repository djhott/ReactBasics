//Used with PureComp.js and RegComp.js to compare performance and show effects on child
//If we were to extend this with PureComponent as well, both child classes will not re-render, child mimics parent
import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Doug',
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Doug',
      })
    }, 2000)
  }

  render() {
    console.log('****PARENT COMPONENT****')
    return (
      <div>
        Parent Component
        {/*<RegComp name={this.state.name}></RegComp>*/}
        {/*<PureComp name={this.state.name}></PureComp>*/}
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
