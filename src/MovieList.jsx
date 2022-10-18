import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'
import MovieCard from './MovieCard'
import MovieForm from './MovieForm'


function MovieList() {
  const { user, genres } = useContext(UserContext)
  const [showMovieForm, setShowMovieForm] = useState(false)

  function createMovieForm(){
    setShowMovieForm((showMovieForm) => !showMovieForm)
  }


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