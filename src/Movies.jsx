import React, { useContext } from 'react'
import { UserContext } from './context/user'
import Movie from './Movie'

function Movies() {
  const { user } = useContext(UserContext)



    const renderMovies = user.movies ? user.movies.map((movie) => {
      return <Movie key={movie.id} movie={movie}/>
  }) : null



  return (
    <>
    <div>{renderMovies}</div>
    </>
  )
}

export default Movies