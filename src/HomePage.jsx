import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'
import Button from '@mui/material/Button'
import GenreForm from './GenreForm'
import Genres from './Genres'
import Login from './authentication/Login'

function HomePage() {
  const { user, genres, addGenre } = useContext(UserContext)
  const [showGenreForm, setShowGenreForm] = useState(false)  
 
  
  function createGenreForm(){
    setShowGenreForm((showGenreForm) => !showGenreForm)
  }


  if(user.first_name){
    return (
      <>
      <br />
      <Button onClick={createGenreForm} variant='outlined'>Add Genre</Button>
      { showGenreForm ? <GenreForm genres={genres} addGenre={addGenre}/> : null }
      <Genres genres={genres}/>
      <br />
      </>
    )
  } else {
    return (
      <>
      {/* <h3>Welcome to Movie Keeper!</h3> */}
      <Login /> 
      </>
    )
  }
}

export default HomePage