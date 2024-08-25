//connected to NameList to hold a Person
import React from 'react'

//You have to have 'person' here to accept the prop person being passed into this function
//Rewrite this with a destructuring object
//You cannot pass the 'key' to the child, you will get an error. 'key' prop is reserved.
//React needs the key for updates, which is why you can't pass it
function Person(props) {
  return (
    <div>
      <h2>
        I am {props.person.name}. I am {props.person.age}. I write in{' '}
        {props.person.skill}
      </h2>
    </div>
  )
}

export default Person
