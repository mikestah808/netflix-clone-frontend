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
    <div className="flex flex-col justify-center items-center">
    <button className='text-red-600 font-bold' onClick={createMovieForm}>ADD MOVIE</button>
    { showMovieForm ? <MovieForm genres={genres}/> : null }
    <div>{renderMovies}</div>
    </div>
  )
}

export default MovieList