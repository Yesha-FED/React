/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Example3 from './Example3'

export default function Example2(props) {
  return (
    <div>
      <h3>I AM COMPONENT 2</h3>
      <Example3 message={props.record} />
    </div>
  )
}
