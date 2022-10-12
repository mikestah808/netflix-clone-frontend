import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './context/user'
import Button from '@mui/material/Button'
import GenreForm from './GenreForm'
import Genres from './Genres'


function HomePage() {
  const { user, genres, addGenre } = useContext(UserContext)
  const [showGenreForm, setShowGenreForm] = useState(false)




  function createGenreForm(){
    setShowGenreForm((showGenreForm) => !showGenreForm)
  }


  if(user){
    return (
      <>
      <Genres genres={genres}/>
      <br/>
      <br /> 
      <Button onClick={createGenreForm} variant='outlined'>Add Genre</Button>
      { showGenreForm ? <GenreForm genres={genres} addGenre={addGenre}/> : null }
      </>
    )
  } else {
    return (
      <>
      <h3>Welcome to Movie Watch!</h3>
      </>
    )
  }
}

export default HomePage