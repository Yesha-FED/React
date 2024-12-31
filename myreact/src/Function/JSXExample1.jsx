/* eslint-disable no-unused-vars */
import React from 'react'

export default function JSXExample1() {
    const status = false;
    // conditional rendering 
  return (
    <div>
      {status ? <h1>Dashboard</h1> : <h1>Login</h1>}
    </div>
  )
}
