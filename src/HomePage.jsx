import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './context/user'
// import GenreForm from './GenreForm'
import MovieList from './MovieList'
import Button from '@mui/material/Button';
import MovieForm from './MovieForm';
import Genres from './Genres'


function HomePage() {
  const { user } = useContext(UserContext)
  const [showMovieForm, setShowMovieForm] = useState(false)
  const [genres, setGenres] = useState([]);

  // const [showGenreForm, setShowGenreForm] = useState(false)

  useEffect(() => {
    fetch("/genres")
    .then((resp) => resp.json())
    .then((data) => setGenres(data))
  }, [])


  // function createGenreForm(){
  //   setShowGenreForm((showGenreForm) => !showGenreForm)
  // }



  function createMovieForm(){
    setShowMovieForm((showMovieForm) => !showMovieForm)
  }

  function onCreateMovie(newMovie){
    const addNewMovie=[...user.movies, newMovie]
    console.log(addNewMovie)
    // setMovies(addNewMovie);
  }

  // function onDeleteMovie(deletedMovieId){
  //   const filterMovies = workouts.filter((workout) => workout.id !== deletedWorkoutId)  
  //   setWorkouts(filterWorkouts)
  // }



  if(user){
    return (
      <>
      <Genres />
      <br /> 
      <Button onClick={createMovieForm} variant='outlined'>Add Movie</Button>
      { showMovieForm ? <MovieForm genres={genres} setGenres={setGenres}/> : null }
      <MovieList genres={genres}/>
      </>
    )
  } else {
    return (
      <>
      <h3>Welcome to Movie Watch!</h3>
      </>
    )
  }
}

export default HomePage