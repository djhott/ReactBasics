//rfce snippet used for click
import React from 'react'

//format to pass a function for click is name of function with curly braces, clickHandler
//If you add parathesis {clickHandler()} you are making a function call, not passing a function...
//...function executes immediately without click. Watch out.
//The event handler (clickHandler) is a FUNCTION, not a function CALL.
function FunctionClick() {
  function clickHandler() {
    console.log('Button clicked')
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
