import React from 'react'

import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signin from './Signin';
import ResetPW from './ResetPW';
import PlayVideo from './PlayVideo';
export default function Main() {
    
    return (
        <div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='/Signin' element={<Signin />} />
                <Route path='/ResetPW' element={<ResetPW />} />
                <Route path='/Playvideo/:id' element={<PlayVideo />} />
            </Routes>


        </div>
    )
}