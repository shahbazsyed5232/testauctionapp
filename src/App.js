import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AuctionList from './pages/AuctionList';
import AuctionDetails from './pages/AuctionDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './styles.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <Navbar />
      <div className="container text-center mt-3">
        <button 
          className="btn btn-outline-primary mb-3" 
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
        </button>
      </div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auctions' element={<AuctionList />} />
        <Route path='/auctions/:id' element={<AuctionDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
