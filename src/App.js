import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import NavBar from './Navbar'
import { UserProvider } from "./context/user"
import Signup from './authentication/Signup'
import Login from './authentication/Login'
import SelectedGenrePage from './SelectedGenrePage'
import MovieList from './MovieList'

function App(props) {
  const [genres, setGenres] = useState([]);


  useEffect(() => {
    fetch("/genres")
    .then((resp) => resp.json())
    .then((data) => setGenres(data))
  }, [])


  return (
    <div className='App'>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <HomePage genres={genres} setGenres={setGenres}/> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/signup" element={ <Signup /> } />
          <Route path="/genres/:id" element={ <SelectedGenrePage /> } />
          <Route path="/movies" element={ <MovieList genres={genres}/> } />
        </Routes>
      </UserProvider>
    </div>
  )
}

export default App;
