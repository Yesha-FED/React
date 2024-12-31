/* eslint-disable no-unused-vars */
import React from 'react'
import Dashboard from './Dashboard';
import Login from './Login';

export default function JSXExample2() {
    const loggedIn = true;
  return (
    <div>
        {loggedIn ? <Dashboard/> : <Login/>}
    </div>
  )
}
