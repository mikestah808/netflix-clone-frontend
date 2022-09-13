import React from 'react';
import Login from './authentication/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {






  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login/> }></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
