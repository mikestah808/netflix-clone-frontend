import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import NavBar from './Navbar'
import { UserProvider } from "./context/user"
import Signup from './authentication/Signup'
import Login from './authentication/Login'

function App(props) {
  return (
    <div className='App'>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/signup" element={ <Signup /> } />
        </Routes>
      </UserProvider>
    </div>
  )
}

export default App;
