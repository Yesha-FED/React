/* eslint-disable no-unused-vars */
import React from 'react'
import Example2 from './Example2';

export default function Example1() {
    let data = "React Props - without useContext";
  return (
    <div>
        <h3>I AM COMPONENT 1</h3>

        {/* sending data to comp2  */}
        <Example2 record={data} />  
        
    </div>
  )
}
