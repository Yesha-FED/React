/* eslint-disable no-unused-vars */
import React from 'react'

export default function JSXExample5() {
    const myarr = [1,2,3,4,5];

  return (
    <div>
        {myarr.map((e,i)=>{
            return <li key={i}>{e+e}</li>
        })}  
    </div>
  )
}
