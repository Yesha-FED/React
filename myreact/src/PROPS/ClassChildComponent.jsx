/* eslint-disable react/prop-types */
import React, { Component } from 'react'

export default class ClassChildComponent extends Component {
  render() {
    return (
      <div>
        {this.props.product.map((item,index)=>{
            return <div key={index}>
                        <h1>{item.title}   Rs. {item.Price}</h1>   
                        <h3>Qty : {item.Qty}</h3>
                        <button>Add To Card</button>
                </div>
        })}
      </div>
    )
  }
}
