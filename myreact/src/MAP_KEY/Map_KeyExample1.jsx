/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Map_KeyExample1() {
    const [subjectList,setSubjectList] = useState([]);
    const [inputValue,setInputValue] = useState("");

    const handleButton=()=>{
        // console.log(inputValue);
        console.log("---> old subject list : ",subjectList);
        console.log("----> inputvalue ",inputValue);

        setSubjectList([...subjectList,inputValue])
        console.log("----> after input : ",subjectList);
        
        setInputValue("");
    }
  return (
    <div>
        <input 
        value={inputValue}
        type='text'
        placeholder='Enter name'
        onChange={(e)=> setInputValue(e.target?.value)}
        />

        <button onClick={handleButton}>Add</button>

        <ul>
            {subjectList.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>

    </div>
  )
}
