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
import RefsDemo from './components/RefsDemo'
import ForwardRefParentInput from './components/ForwardRefParentInput'
import PortalDemo from './components/PortalDemo'
import ErrorCatch from './components/ErrorCatch'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

function App() {
  //class App extends Component{
  //  render(){
  return (
    <div className="App">
      {/*
      UNCOMMENT A MODULE BELOW TO TEST IT, SOME MODULES RELY ON OTHERS, SEE HEADERS FOR THOSE COMPONENTS IF DEPENDENT
      <Greet name="Douglas" nickname="Doug">
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
      <ParentComp />
      <RefsDemo />
      <ForwardRefParentInput />
      <PortalDemo />
      <ErrorCatch employeeName="Doug"></ErrorCatch>
      <ErrorBoundary>
          <ErrorCatch employeeName="Tom" />
        </ErrorBoundary>
      */}
      <ClickCounter name="Doug" />
      <HoverCounter />
    </div>
  )
}

export default App
