//forwarding a ref to a child example

import React from 'react'

//rewritten to an arrow function, needed to pass the ref using React.ForwardRef()
//ForwardRef(component), so arrow function component moved inside parentheses as parameter)
//when passed, props is the first parameter, and ref becomes the second
const ForwardRefDemo = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
      {/*ref pointed to from, parent component */}
    </div>
  )
})

export default ForwardRefDemo
