import React from 'react'
import Dashboard from './Dashboard';
import Login from './Login';

export default function JSXExample7() {
    const page = "Dashboard";

    switch(page)
    {
        case "Dashboard":
            return <Dashboard/>

        case "Login":
            return <Login/>
    }
}
