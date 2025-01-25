import React from 'react'
import Header from './components/Header'
import { Outlet } from "react-router";
import Register from './pages/Register';
import Login from './pages/Login';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Home from './pages/Home';

function App() {
  
 
  return (
  <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/" element={<Home/>} />
  </Routes>
  )
}

export default App
