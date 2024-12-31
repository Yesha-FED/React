/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample6() {
    const [number,setNumber] = useState(0);
    const [fact,setFact] = useState(0);
    
    const calculate=()=>{
        
        let f = 1 
        for(let i = 1;i<=number;i++)
        {
            f*=i;    
        }
        setFact(f);
    }
  return (
    <div>
        <input type='number' placeholder='Enter number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <button onClick={calculate}>calculate</button>
        {fact}
    </div>
  )
}
