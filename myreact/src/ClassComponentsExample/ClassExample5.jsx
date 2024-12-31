/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class ClassExample5 extends Component {
    constructor(){
        super()
        this.state = {
            name : "",
            result : ""
        }
    }
    handleButton=()=>{
        this.setState({result : this.state.name.toUpperCase()})
    }
  render() {
    return (
      <div>
            <input type='text' onChange={(e)=>this.setState({name : e.target.value})} placeholder='Enter name : '/>
            {this.state.name}

            <button onClick={this.handleButton}>Upper Case</button>

            {this.state.result}

      </div>
    )
  }
}
