//demoing portals
//1. Create a new <div id="portal-root"></div> below the main root in index.html
//2. Create PortalDemo.js to use that root
//3. Import ReactDOM and use createPortal (JSX we want to render, DOM node to mount onto)
//rfce snippet
//usually used to add CSS to other DOM elements, but this also means events fired from app portal will propagate to ancestors in containing tree
import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portal Demo</h1>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo
