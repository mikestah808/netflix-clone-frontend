import React, { useContext } from 'react'
import { UserContext } from './context/user'

function GenreList() {
    const { user } = useContext(UserContext)

    const genreList = user.genres.map((genre) => <li>{genre.name}</li>)


  return (
    <div>{genreList}</div>
  )
}

export default GenreList