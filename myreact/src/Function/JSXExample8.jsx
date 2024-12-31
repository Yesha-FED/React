/* eslint-disable no-unused-vars */
import React from 'react'

export default function JSXExample8() {
    const error = null
    const status = false 
  return (
    <div>
        <p>{error}</p>

        {status && <h1>Welcome</h1>}
    </div>
  )
}
