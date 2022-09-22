import React, { useContext } from 'react'
import { UserContext } from './context/user'
import Movie from './Movie'

function Movies() {
  const { user } = useContext(UserContext)


  console.log("movies", user.movies)

    const renderMovies = user.movies.map((movie) => {
    return <Movie key={movie.id} movie={movie}/>
})




  return (
    <>
    {/* <p>movies</p> */}
    <div>{renderMovies}</div>
    </>
  )
}

export default Movies