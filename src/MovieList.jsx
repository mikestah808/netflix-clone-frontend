import React, { useContext } from 'react'
import { UserContext } from './context/user'
import MovieCard from './MovieCard'

function MovieList() {
  const { user } = useContext(UserContext)



    const renderMovies = user.movies ? user.movies.map((movie) => {
      return <MovieCard key={movie.id} movie={movie}/>
  }) : null



  return (
    <>
    <div>{renderMovies}</div>
    </>
  )
}

export default MovieList