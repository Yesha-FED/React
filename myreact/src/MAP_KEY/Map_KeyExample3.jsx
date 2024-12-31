/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Map_KeyExample3() {
    const [name,setName] = useState("");
    const [subject,setSubject] = useState("");

    const [records,setRecords] = useState([]);
    const [editIndex,setEditIndex] = useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newRecord = {name,subject};
        console.log("newrecord ",newRecord);


        if(editIndex!==null)
            {
                //update
                // fetch all old records 
                const fetchAllRecord = [...records];
                fetchAllRecord[editIndex] = newRecord
                setRecords(fetchAllRecord);
                setEditIndex(null);
            }
            else
            {
                // submit
                setRecords([...records,newRecord]);
            }
        

        setName("");
        setSubject("");
    }

    const handleDelete = (index)=>{
        const fetchAllRecord = [...records];
        fetchAllRecord.splice(index,1)
        setRecords(fetchAllRecord);
    }
    const handleEdit =(index) =>{
        const specificRecord = records[index];
        setName(specificRecord.name);
        setSubject(specificRecord.subject);
        setEditIndex(index);
    }

  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
            <input type='text'
                placeholder='Enter name '
                value={name}
                onChange={(e)=>setName(e.target.value)}/>

            <input type='text'
                placeholder='Enter subject'
                value={subject}
                onChange={(e)=>setSubject(e.target.value)}/>

            <button type='submit'> {editIndex !== null ? "Update" : "Submit" }</button>
      </form>

      <div>
        <table border={2}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>

            <tbody>
                {records.map((value,index)=>{
                    return <tr key={index}>
                                        <td>{value.name}</td>
                                        <td>{value.subject}</td>
                                        <td><button onClick={()=>handleEdit(index)}>Edit</button></td>
                                        <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
                            </tr>
                })}
            </tbody>
        </table>
      </div>
    </div>
  )
}
