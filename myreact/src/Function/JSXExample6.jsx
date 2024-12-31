import React from 'react'
import Dashboard from './Dashboard';
import Login from './Login';

export default function JSXExample6() {
    const status = true;

    if(status)
        {
            return <Dashboard/>
        }
        else
        {
            return <Login/>
        } 
}
