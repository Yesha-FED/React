import React, { useState } from 'react'

export default function UseStateExample3() {
    const [colorname,setColorname] = useState("white");
  return (
    <div>
            <button onClick={()=>setColorname("blue")}>blue - white </button>
            <button onClick={()=>setColorname("green")}>green</button>
            <button onClick={()=>setColorname("red")}>red</button>


            <h1 style={{color:colorname}}>Hello welcome to React Dynamic  {colorname}</h1>
    </div>
  )
}
