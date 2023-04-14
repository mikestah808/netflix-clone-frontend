import React, { useContext } from 'react'
import { UserContext } from './context/user'

function GenreList() {
    const { user } = useContext(UserContext)
    

    //return an array of genre objects that are unique by id 
    let uniqueObjArray = [...new Map(user.genres.map((genre) => [genre["id"], genre])).values()];

    //map through array of genres and return an li of the genres name
    const genreList = uniqueObjArray.map((genre) => <li genre={genre} key={genre.id} >{genre.name}</li> )



  return (
    <div>
    <h2>{genreList}</h2>
    </div>
  )
}

export default GenreList