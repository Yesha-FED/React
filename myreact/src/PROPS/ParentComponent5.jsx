/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ChildComponent5 from './ChildComponent5';

export default function ParentComponent5() {
    const [data,setData] = useState("");
  return (
    <div>
        <input 
            type='text'
            placeholder='Enter your data '
            value={data}
            onChange={(e)=>setData(e.target.value)}/>
        <ChildComponent5 message={data} />
    </div>
  )
}
