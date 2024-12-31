/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class ClassExample4 extends Component {
    constructor(){
        super()
        this.state={
            isVisible : true
        }
    }
  render() {
    return (
      <div>
         <button onClick={()=>this.setState({isVisible : !this.state.isVisible })}>{this.state.isVisible ? "HIDE" : "UNHide"}</button>
         
         {this.state.isVisible && <h1>Hello user </h1>}
      </div>
    )
  }
}
