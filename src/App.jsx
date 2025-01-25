import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login'
import HomePage from './Component/Pages/HomePage';
import SideBar from './Component/SideBar';
import Testing from './testing';

function App() {
  

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      {/* <Route path="/home" element={<SideBar />} /> */}
    </Routes>
  </Router>

  
  )
}

export default App
