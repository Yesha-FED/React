/* eslint-disable no-unused-vars */
import React from 'react'

export default function StyleExample3() {
    const mystyle = {
        container : {
            backgroundColor : "blue",
            color : "white",
            padding : "20px"
        },
        text : {
            backgroundColor : "purple",
            color : "white",
            padding : "20px"
        }
    }
  return (
    <div style={mystyle.container}>
        <h1 style={mystyle.text}>Hello </h1>
    </div>
  )
}

