/* eslint-disable no-unused-vars */
import React from 'react'

export default function Map_KeyExample2() {

    const productData = [
        {title : "TV" , Qty : 50, Price : 14500},
        {title : "AC" , Qty : 20, Price : 16500},
        {title : "Mobile" , Qty : 60, Price : 17500},
        {title : "Fridge" , Qty : 10, Price : 15000},
    ]
  return (
    <div>
        {productData.map((product,index)=>{
            return <div key={index}>
                        <h1>{product.title}   Rs. {product.Price}</h1>   
                        <h3>Qty : {product.Qty}</h3>
                        <button>Add To Card</button>
                </div>
        })}
    </div>
  )
}
