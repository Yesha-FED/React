/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function ChildComponent6(props) {
  return (
    <div>
        {props.products.map((product,index)=>{
            return <h3 key={index}>{product}</h3>
        })}
    </div>
  )
}
