/* eslint-disable no-unused-vars */
import React from 'react'

export default function StyleExample2() {
    const mystyle = {
        "backgroundColor" : "blue",
        "textcolor" : "white"
    }
  return (
    <div>
        <h1 style={{backgroundColor:mystyle.backgroundColor , color : mystyle.textcolor}}>Welcome to Style Component Example</h1>
    </div>
  )
}
