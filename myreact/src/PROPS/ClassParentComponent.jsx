/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import ClassChildComponent from './ClassChildComponent'

export default class ClassParentComponent extends Component {
    constructor(){
        super();
        this.state={
            products :   [
                {title : "TV" , Qty : 50, Price : 14500},
                {title : "AC" , Qty : 20, Price : 16500},
                {title : "Mobile" , Qty : 60, Price : 17500},
                {title : "Fridge" , Qty : 10, Price : 15000},
            ]
        }
    }
    
  render() {
    return (
      <div>
            <h1>Parent Class Component</h1>
            <ClassChildComponent product={this.state.products}></ClassChildComponent> 
      </div>
    )
  }
}
