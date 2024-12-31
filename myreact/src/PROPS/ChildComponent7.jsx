/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function ChildComponent7(props) {
  return (
    <div>
        <table border={2}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                </tr>
            </thead>
        
        <tbody>
            {props.mydata.map((item,index)=>{
                return <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
            })}

        </tbody>
        </table>
    </div>
  )
}
