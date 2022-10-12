import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'
import MovieCard from './MovieCard'
import MovieForm from './MovieForm'
import GenreForm from './GenreForm'
import Genres from './Genres'
// import GenreSelect from './GenreSelect'

function MovieList() {
  const { user, genres } = useContext(UserContext)
  const [showMovieForm, setShowMovieForm] = useState(false)
  const [showGenreForm, setShowGenreForm] = useState(false)

  function createMovieForm(){
    setShowMovieForm((showMovieForm) => !showMovieForm)
  }

  // function createGenreForm(){
  //   setShowGenreForm((showGenreForm) => !showGenreForm)
  // }

  // console.log("genres", genres)

    const renderMovies = user.movies.map((movie) => {
      return <MovieCard genres={genres} key={movie.id} movie={movie} />
  })



  return (
    <>
    <Button onClick={createMovieForm}>Add Movie</Button>
    { showMovieForm ? <MovieForm genres={genres}/> : null }
    <div>{renderMovies}</div>
    </>
  )
}

export default MovieList