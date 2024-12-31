/* eslint-disable no-unused-vars */
import React from 'react'
import ChildComponent6 from './ChildComponent6'

export default function ParentComponent6() {
  const productList = ["TV","Mobile","AC","Fridge"]
  return (
    <div>
        <ChildComponent6 products = {productList}  />
    </div>
  )
}
