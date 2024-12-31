/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class ClassExample3 extends Component {
    constructor(){
        super();
        this.state={
            number : 0
        }
    }
  render() {
    return (
      <div>
            <h1>Number : {this.state.number}</h1>
            <button onClick={()=> this.setState({number : this.state.number + 1})}>ADD</button>
      </div>
    )
  }
}
