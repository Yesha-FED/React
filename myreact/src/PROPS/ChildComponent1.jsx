/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function ChildComponent1(props) {
  return (
    <div>
        <h1>Welcome to {props.name}</h1>

        <p>Its backend is {props.backend}</p>
    </div>
  )
}
