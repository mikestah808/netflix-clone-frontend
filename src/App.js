import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import NavBar from './Navbar'
import { UserProvider } from "./context/user"
import Signup from './authentication/Signup'
import MovieList from './MovieList'
import GenreList from './GenreList'

function App() {


  return (
    <div>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/genres" element={ <GenreList /> } />
          <Route exact path="/signup" element={ <Signup /> } />
          <Route exact path="/movies" element={ <MovieList /> } />
        </Routes>
      </UserProvider>
    </div>
  )
}

export default App;
