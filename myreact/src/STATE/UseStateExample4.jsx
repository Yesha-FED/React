/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function UseStateExample4() {
    const [bgcolorname,setbgColorname] = useState("white");
    const [colorname,setColorname] = useState("black");

    const handleButton1=(bg,fg)=>{
        setbgColorname(bg);
        setColorname(fg);
    }
  return (
    <div>
      <div>
            <button onClick={()=>handleButton1("blue","white")}>blue - white </button>
            <button >green</button>
            <button >red</button>

            <h1 style={{color:colorname,backgroundColor:bgcolorname}}>Hello welcome to React Dynamic  {colorname}</h1>
    </div>
    </div>
  )
}

