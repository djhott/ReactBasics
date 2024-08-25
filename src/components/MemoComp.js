//Memo example used to capture same Pure Component shallow comparison with functional components to avoid re-render
//used with ParentComp.js, which also illustrates Pure Component, parent re-renders, MemoComp does not due to React.memo
//Memo is used in the export, unlike the Pure Component for class
import React from 'react'

//destructure the name prop
function MemoComp({ name }) {
  console.log('Rendering Memo Component')
  return <div>{name}</div>
}

export default React.memo(MemoComp) //higher order Component, takes component, enhances it, and returns it
