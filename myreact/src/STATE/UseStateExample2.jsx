import React, { useState } from 'react'

export default function UseStateExample2() {
    //    varname , function   = useState(intialState)
   const [colorname,setColorname] =  useState("white");
  return (
    <div>
        <button onClick={()=>setColorname("red")}>Red</button>
        <br></br>
        <button onClick={()=>setColorname("Blue")}>Blue</button>
        <br></br>
        <button onClick={()=>setColorname("green")}>Green</button>

        <h1>{colorname}</h1>
    </div>
  )
}
