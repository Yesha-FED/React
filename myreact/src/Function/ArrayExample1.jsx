import React from 'react'

export default function ArrayExample1() {
  const dataList = ['C',"C++","Java","Kotlin","React","Node"]
  return (
    <>
      <h1>Array Example</h1>
      <ul>
          {dataList.map((value,index)=>{
            return <li key={index}>{value}</li>
          })}
      </ul>
    </>
  )
}
