/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function Example5() {
    const [products,setProducts] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const records = await fetch("https://fakestoreapi.com/products");
        const allRecords = await records.json();
        setProducts(allRecords);
    }
  return (
    <div>
        {products 
        ?   
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>title</th>
                        <th>Rate</th>
                        <th>Count</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product,index)=>{
                        return <tr key={index}>
                                    <td>{product.id}</td>
                                    <td><img src={product.image} height={50} width={50}/></td>
                                    <td>{product.title}</td>
                                    <td>{product.rating.rate}</td>
                                    <td>{product.rating.count}</td>
                                </tr>
                    })}
                </tbody>
            </table>
           
        :   <h1>No Records Found</h1>
        }
    </div>
  )
}
