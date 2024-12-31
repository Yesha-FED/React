/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function Example3() {
    const [count,setCount] = useState(0);
    const [num,setNum] = useState(0);
    
    useEffect(()=>{
        console.log("Welcome");
    },[count])

    const handleButton=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleButton}>Count</button>  
        <h1>{num}</h1>
        <button onClick={()=>setNum(num+1)}>Count</button>  
    </div>
  )
}
