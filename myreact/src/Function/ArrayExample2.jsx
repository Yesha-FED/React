import React from 'react'
import HelloComponent from './HelloComponent';

export default function ArrayExample2() {
    const noOfList = [1,2,3,4,5];
  return (
    <>
        {noOfList.map((v,i)=>{
            return <HelloComponent key={i}></HelloComponent>
        })}
    </>
  )
}
