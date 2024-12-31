/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Example3(props) {
  return (
    <div>
        <h3>I AM COMPONENT 3</h3>
        <h1>Message from 1st component via second component</h1>
        <p>{props.message}</p>
    </div>
  )
}
