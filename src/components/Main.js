import React from 'react'

import {  Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

export default function Main() {
    return (
        <div>
        
        <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/>

        </Routes>
      
          
        </div>
)
}