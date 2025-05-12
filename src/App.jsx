import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Writing from './Writing';
import About from './About';
import Work from './Work';
import { Route, Routes } from 'react-router-dom';
import Holding from './Holding';

function App() {
  alert("Still under production")

  return (
    <div>
      <div className='nav-origin'> <Navbar/></div>
      <Routes>
        <Route path="/" element={<Holding />} /> 
        <Route path="/about" element={<About />} /> 
        {/* <Route path="/writing" element={<Writing />} />  */}
        <Route path="/work" element={<Work />} /> 
        <Route path="/Holding" element={<Holding />} /> 
        <Route path="/home" element={<Home />} /> 
      </Routes>
      <div className="footer">
      <p>&copy; 2025. by LarryTech</p>
      </div>
      </div>
  );
}

export default App;