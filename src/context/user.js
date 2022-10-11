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

  const updateMovie = (updatedMovie) => {
    const editMovies = user.movies.map((movie) => movie.id === updatedMovie.id ? updatedMovie : movie)
    setUser({...user, movies: editMovies})
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
      <UserContext.Provider value={{user,login, logout, signup, addMovie, deleteMovie, updateMovie}}>{children}</UserContext.Provider>
    );
}


export { UserContext, UserProvider }