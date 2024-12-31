/* eslint-disable no-unused-vars */
import React from 'react'
import ChildComponent7 from './ChildComponent7'

export default function ParentComponent7() {
    const Products = [
        {id : 1,name : "TV", price : "25000"},
        {id : 2,name : "AC", price : "55000"},
        {id : 3,name : "Fridge", price : "65000"},
    ]
  return (
    <div>
            <ChildComponent7  mydata={Products} />
    </div>
  )
}
