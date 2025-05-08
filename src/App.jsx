import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home'; // Assuming you have a Home component
import Writing from './Writing';
import About from './About';
import Work from './Work'; // Make sure you have this component and import it
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Holding from './Holding';

function App() {
  const [count, setCount] = useState(0);
  alert("Still under production")

  return (
      <Routes>
        <Route path="/" element={<Holding />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/writing" element={<Writing />} /> 
        <Route path="/work" element={<Work />} /> 
        <Route path="/home" element={<Home />} /> 
      </Routes>
  );
}

export default App;