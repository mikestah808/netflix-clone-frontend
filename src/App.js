import React from 'react';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';

function App() {






  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Login/> }></Route>
        <Route path="/signup" element={ <Signup/> }></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
