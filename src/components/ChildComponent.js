//pulls method from ParentComponent
import React from 'react'

//use an arrow function to pass back data to ParentComponent by changing the prop greetHandler to greetPerson('Susan')
//we will pass Susan back to the parent through parent's greetPerson method as a parameter 'coworker'
function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('Susan')}>Greet Person</button>
    </div>
  )
}

export default ChildComponent
