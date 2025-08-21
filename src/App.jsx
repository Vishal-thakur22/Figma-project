import React from 'react'
import { Routes,Route } from 'react-router';

//components
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
    
 
  )
};

export default App
