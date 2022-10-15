import React, { useContext } from 'react'
import { UserContext } from './context/user'

function GenreList() {
    const { user } = useContext(UserContext)

    let uniqueObjArray = [...new Map(user.genres.map((genre) => [genre["id"], genre])).values()];

    const genreList = uniqueObjArray.map((genre) => <li key={genre.id}>{genre.name}</li>)






  return (
    <div>{genreList}</div>
  )
}

export default GenreList