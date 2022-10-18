import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


//Create context 
const UserContext = React.createContext();

//Create a provider component 
function UserProvider({ children }) {
  let navigate = useNavigate();

  const initialUser ={
    genres: [],
    movies: []
  }

  const [user, setUser] = useState(initialUser)  
  const [genres, setGenres] = useState([]);

  // on initial application load, the application loads directly to the HomePage component
  // what i want instead is the application to load to the Login Page first 


  useEffect(() => {
    if(!user){
      navigate("/login")
    } else {
      fetch("/me")
        .then((resp) => resp.json())
        .then((data) => {
      setUser(data)
    })
    }
  },[])


  useEffect(() => {
    fetch("/genres")
    .then((resp) => resp.json())
    .then((data) => setGenres(data))
  }, [])


  const addGenre = (newGenre) => {
     const newGenres = [...genres, newGenre]
     setGenres(newGenres)
  }


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
    navigate("/")
  }

  const logout = () => {
    //originally, i set the users state to NULL, but by setting the users state back to an initialUser, which contains a key of genres and movies, it seems to have navigated to the path of "/login" AND IT PERSISTS
    setUser(initialUser)
    navigate("/");
  }


  const signup = (user) => {
    setUser(user)
    navigate("/home")
  }


    return (
      <UserContext.Provider value={{user, genres, login, logout, signup, addMovie, deleteMovie, updateMovie, addGenre}}>{children}</UserContext.Provider>
    );
}


export { UserContext, UserProvider }