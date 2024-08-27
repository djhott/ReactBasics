//Higher Order Component to avoid reusing count code in multiple components
//1. app.js includes the two components with shared higher order component
//2. withCount.js accepts a component and returns a new component with the count property and method to increase count
//3. Original component enhanced with count functionality it returned
//4. HOC is maintaining state. When destructured, properities and count method can be used
//5. HoverCounter and ClickCounter maintain separate state
//6. When naming, function and file name are usually the same 'withCounter" explains its functionality,
//   WrappedComponent is standard for component being upgraded
//7. If you pass props, the prop gets passed to HOC, not component that is wrapped. Must use split operator (...this.props)

import React from 'react'

//accepts original component and returns a new component with new functionality
const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    //constructor and incrementCount is the functionality we want to share
    constructor(props) {
      super(props)

      this.state = {
        count: 0,
      }
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber }
      })
    }

    render() {
      //render and return the original component with its updates
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props} //pass down remaining props like name
        />
      )
    }
  }
  return WithCounter
}

export default withCounter
