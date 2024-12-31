/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function Example1() {
// useEffect with no dependency array 

  const [count,setCount] = useState(0);
  const [num,setNum] = useState(100);

  useEffect(()=>{
        console.log("I m calling on every render");
  })

  const handleButton=()=>{
    setCount(count+1);
  }

  return (
    <div>
    <h1>{count}</h1>
        <button onClick={handleButton}>Hello</button>
        <button onClick={()=>setNum(num+1)}>Num</button>
    </div>
  )
}
