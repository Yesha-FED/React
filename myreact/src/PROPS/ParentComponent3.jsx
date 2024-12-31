/* eslint-disable no-unused-vars */
import React from 'react'
import ChildComponent3 from './ChildComponent3';

export default function ParentComponent3() {
    const handleFunction=()=>{
        alert("Welcome to props");
    }

  return (
    <div>
        <ChildComponent3 funname={handleFunction}></ChildComponent3>  
    </div>
  )
}
