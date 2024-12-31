/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class ClassExample2 extends Component {
    constructor(){
        super(); // parent class constructor calling
        this.state = {
            number : 600,
            num2 : 450,
            studentName : "AAAA"
        } 
    }
  render() {
    return (
      <div>
            <h2>Number = {this.state.number}</h2>
            <h2>Num = {this.state.num2}</h2>
            <h3>Name : {this.state.studentName}</h3>
      </div>
    )
  }
}
