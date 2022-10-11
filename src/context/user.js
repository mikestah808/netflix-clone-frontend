import React, { useState, useEffect } from 'react'

//Create context 
const UserContext = React.createContext();

//Create a provider component 
function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
    .then((resp) => resp.json())
    .then((data) => {
      setUser(data)
    })
  },[])


  const addMovie = (newMovie) => {
    const newMovies = [...user.movies, newMovie]
      setUser({...user, movies: newMovies})
  }

  const deleteMovie = (deletedMovieId) => {
    const filterMovies = user.movies.filter((movie) => movie.id !== deletedMovieId)
    setUser({...user, movies: filterMovies})
  }


  const login = (user) => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }


  const signup = (user) => {
    setUser(user)
  }


    return (
      <UserContext.Provider value={{user,login, logout, signup, addMovie, deleteMovie}}>{children}</UserContext.Provider>
    );
}


export { UserContext, UserProvider }