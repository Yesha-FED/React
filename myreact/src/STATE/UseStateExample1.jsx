import React, { useState } from 'react'

export default function UseStateExample1() {
    const [value,setValue] = useState(0)

    const handleButton=()=>{
        console.log("Button clicked");
        setValue(value+1)
    }
  return (
    <div>
      {value}
      <button onClick={handleButton}>ADD</button>
      <br></br>
      <button onClick={()=>setValue(value+1)}>NEXT BUTTON</button>
    </div>
  )
}
