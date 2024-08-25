import React from 'react'

//function approach 1
//function Greet() {
//  return <h1>Hello, everyone!</h1>
//}

//ES6 function approach with export, add 'export' to function, but then must use brackets and name in app.js
//props.children is always the name of the innerHTML you pass. When you don't know what you're receiving use the curly brackets with the props.children
//props is READ ONLY. Cannot update the value passed into Greet
const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello, {props.name} prefers to be called {props.nickname}
      </h1>
      {props.children}
    </div>
  )
}
//default approach to export, does not need specific name on import
export default Greet
