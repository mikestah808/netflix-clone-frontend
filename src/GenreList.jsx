import React, { useContext } from 'react'
import { UserContext } from './context/user'

function GenreList() {
    const { user } = useContext(UserContext)

    const genreList = [...new Set(user.genres)].map((genre) => <li key={genre.id}>{genre.name}</li>)

    const uniqueGenres = [...new Set(user.genres)]

    console.log("unique genres", uniqueGenres)





  return (
    <div>{genreList}</div>
  )
}

export default GenreList