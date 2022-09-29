import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './context/user'
// import GenreForm from './GenreForm'
import Movies from './Movies'
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

  // function onCreateMovie(newMovie){
  //   const addNewMovie=[...movies, newMovie]
  //   setMovies(addNewMovie);
  // }



  if(user){
    return (
      <>
      <br />
      <Genres /> 
      {/* <Button onClick={createGenreForm} variant="outlined">Add Genre</Button> */}
      <Button onClick={createMovieForm} variant='outlined'>Add Movie</Button>
      {/* { showGenreForm ? <GenreForm /> : null} */}
      { showMovieForm ? <MovieForm genres={genres} setGenres={setGenres}/> : null }

      <h3>All Movies</h3>
      <Movies/>
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