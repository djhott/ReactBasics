//Error catch when a non-employee is found
//snippet rfce

import React from 'react'

function ErrorCatch({ employeeName }) {
  if (employeeName === 'Tom') {
    throw new Error('Not an employee.')
  }
  return <div>{employeeName}</div>
}

export default ErrorCatch
