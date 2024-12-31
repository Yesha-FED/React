/* eslint-disable no-unused-vars */
import React from 'react'

export default function JSXExample4() {
  const myarray = ["C","C++","java","Php","Python"]

  const display = myarray.map((e,i) => <li key={i}>{e}</li>)
  return (
    <div>
        <ul>
            {display}
        </ul>
    </div>
  )
}
