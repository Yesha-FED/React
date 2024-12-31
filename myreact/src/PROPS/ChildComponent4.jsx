/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function ChildComponent4(props) {
  return (
    <div>
       <h3> name : {props.name}</h3>

        <h3>subject : {props.subject}</h3>
    </div>
  )
  
}
ChildComponent4.defaultProps = {
    name : "ABC",
    subject : "NO SUBJECT FOUND"
}

