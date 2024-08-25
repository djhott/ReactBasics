import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import ConditionalGreeting from './components/ConditionalGreeting'
import NameList from './components/NameList'
import Form from './components/Form'
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp'

function App() {
  return (
    <div className="App">
      {
        /*<Greet name="Douglas" nickname="Doug">
        This is child text.
      </Greet>
      <Greet name="James" nickname="Jim">
        <button>Submit</button>
      </Greet>
      <Welcome name="Doug" />
      <Message></Message>      
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <ConditionalGreeting />
      <NameList />
      <Form />
      */
        <ParentComp />
      }
    </div>
  )
}

export default App
