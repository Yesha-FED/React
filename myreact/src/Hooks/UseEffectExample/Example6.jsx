/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function Example6() {
    const [todo,setTodo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]); 

    const fetchData=async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        setTodo(data);
    }
  return (
    <div>
        {todo ? 
            todo.map((item,index)=>{
                return <div key={index}>
                            <h1>{item.title}</h1>
                            {item.completed 
                            ? 
                            <button style={{color:"blue"}}>Completed</button> 
                            : 
                            <button style={{color:"red"}}>Incompleted</button>}
                </div>
            })
         : <h1>No data found</h1>}
    </div>
  )
}
