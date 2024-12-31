import React, { useState } from 'react'

export default function Example1() {
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(10);

  return (
    <div>
        {count1}

        <Button onClick={()=>setCount1(count1+1)}>Count + 1</Button>
        <Button onClick={()=>setCount2(count2+10)}>Count + 10</Button>
        {count2}

        <button>One</button>

    </div>
  )
}
