//use .map() to create a list
import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['Doug', 'Susan', 'Bob']
  const people = [
    {
      id: 1,
      name: 'Doug',
      age: 46,
      skill: 'React',
    },
    {
      id: 2,
      name: 'Susan',
      age: 30,
      skill: 'Angular',
    },
  ]

  //individual names
  //const nameList = names.map((singlename) => <h2>{singlename}</h2>)
  //return <div>{nameList}</div>

  //'person' is passed as a prop to the Person component, where it is displayed
  //You will get an undefined error for Person if you don't also modify the Person component to accept a (prop)
  const peopleList = people.map((person) => (
    <Person key={person.id} person={person} />
  ))
  return <div>{peopleList}</div>
}

export default NameList
