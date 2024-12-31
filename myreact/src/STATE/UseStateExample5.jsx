import React, { useState } from 'react'

export default function UseStateExample5() {
    const [name,setName] = useState("");
  return (
    <div>
        <input type='text' placeholder='Enter name : ' onChange={(e)=>setName(e.target.value)} />
        {name}
    </div>
  )
}
