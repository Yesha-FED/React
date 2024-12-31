/* eslint-disable no-unused-vars */
import React, { createContext } from 'react'
import UseExample3 from './UseExample3';
import UseExample2 from './UseExample2';

// createContext to use in tree component 
// eslint-disable-next-line react-refresh/only-export-components
export const mycontext = createContext();
export default function UseExample1() {
    let mymessage = "Hello welcome to React";
  return (
    <div>
        <h1>UseExample 1</h1>

        <UseExample2/>

        <mycontext.Provider value={mymessage}>
            <UseExample3/>
        </mycontext.Provider>
    </div>
  )
}
