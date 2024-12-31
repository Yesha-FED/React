/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function Example4() {
    const [post,setPost] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]); // it will render first time only 

    const fetchData=async()=>{
        const records = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const allRecords =await records.json();
    
        setPost(allRecords);
        console.log(allRecords);
    }
  return (
    <div>
        {post ? <h1>{post.title}</h1> : <h1>No Data Found</h1>}
    </div>
  )
}
