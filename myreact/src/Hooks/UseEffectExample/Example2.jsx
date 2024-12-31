/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function Example2() {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("Welcome");
    },[])

    const handleButton=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleButton}>Count</button>  
    </div>
  )
}
