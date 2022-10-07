import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'
import MovieCard from './MovieCard'
import MovieForm from './MovieForm'
import GenreForm from './GenreForm'
// import GenreSelect from './GenreSelect'

function MovieList({ genres }) {
  const { user } = useContext(UserContext)
  const [showMovieForm, setShowMovieForm] = useState(false)
  const [showGenreForm, setShowGenreForm] = useState(false)

  function createMovieForm(){
    setShowMovieForm((showMovieForm) => !showMovieForm)
  }

  function createGenreForm(){
    setShowGenreForm((showGenreForm) => !showGenreForm)
  }


    const renderMovies = user.movies.map((movie) => {
      return <MovieCard key={movie.id} movie={movie} />
  })



  return (
    <>
    {/* <GenreSelect /> */}
    <br/>
    <Button onClick={createMovieForm}>Add Movie</Button>
    <Button onClick={createGenreForm}>Add Genre</Button>
    { showGenreForm ? <GenreForm genres={genres}/> : null }
    { showMovieForm ? <MovieForm genres={genres}/> : null }
    <div>{renderMovies}</div>
    </>
  )
}

export default MovieList