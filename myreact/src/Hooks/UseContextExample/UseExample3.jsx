/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { mycontext } from './UseExample1'

export default function UseExample3() {
    const data = useContext(mycontext);
  return (
    <div>
      <h1>UseExample 3</h1>
      <p>{data}</p>
    </div>
  )
}
