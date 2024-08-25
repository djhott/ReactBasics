//used for performance comparison against RegComp.js, avoids constant rerender with shallow props and state comparison
import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('**PURE COMPONENT**')
    return <div>Pure Component {this.props.name}</div>
  }
}

export default PureComp
