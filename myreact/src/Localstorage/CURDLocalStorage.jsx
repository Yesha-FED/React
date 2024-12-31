/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function CRUDLOCALSTORGE() {
  // localstate 
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");

  const [students, setStudents] = useState([]);
  const [editIndex,setEditIndex] = useState(null);

  useEffect(()=>{
    const oldData = JSON.parse(localStorage.getItem("Students")) || [];
    console.log("first time data found : ",oldData);
    // now need to set in localstate 
    setStudents(oldData);
  },[]) // only first time execute 


  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("----> student get record");
  
    const oldData = JSON.parse(localStorage.getItem("Students")) || [];
    console.log("----> odl data ",oldData);
    
    setStudents([oldData]);
    
    if(editIndex!==null)
    {
      // update code 
       
       const updateRecord = [...students];
       console.log("---> update record",updateRecord);

       updateRecord[editIndex] = {name,subject,city};
       console.log("---> update record",updateRecord);

       // now, need to update local state 
       setStudents(updateRecord);

       // localstorage update 
       localStorage.setItem("Students",JSON.stringify(updateRecord));
    }
    else
    {
      // submit - save code

      const newRecord = {name,subject,city};
      console.log(newRecord);
      setStudents([...students,newRecord]); // it will only update localstate 
      localStorage.setItem("Students",JSON.stringify([...students,newRecord]));
    }
    
   
    setName("");
    setSubject("");
    setCity("");
  }

  const handleDelete=(index)=>{
    console.log("---> index delete",index);

    const updatedRecord = students.filter((value,i) => i !== index);
    console.log("---> rem. record ",updatedRecord);

    // update in localstate 
    setStudents(updatedRecord);

    // update in localstorage 
    localStorage.setItem("Students",JSON.stringify(updatedRecord));
  }

  const handleEdit=(index)=>{
    setEditIndex(index);

    setName(students[index].name);
    setSubject(students[index].subject);
    setCity(students[index].city);
  }

  return (
    <>
      <div className='forms'>

      <form onSubmit={(e)=>handleSubmit(e)}>
          <label>Name :- </label>
          <input type='text'
            placeholder='Enter Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <label>Subject :- </label>
          <input type='text'
            placeholder='Enter Your Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <br />
          <label>City :- </label>
          <input type='text'
            placeholder='Enter Your City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <br />
          <button>{editIndex!=null ? "Update" : "Save"}</button>

          </form>
      </div>

      <br></br>
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>City</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
            {students.map((stu,index)=>{
              return <tr key={index}>
                        <td>{index+1}</td>
                        <td>{stu.name}</td>
                        <td>{stu.subject}</td>
                        <td>{stu.city}</td>
                        <td><button onClick={()=>handleEdit(index)}>Edit</button></td>
                        <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
                    </tr>
            })}
        </tbody>
      </table>


    </>
  )
}
