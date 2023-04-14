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
      <div className='flex md:flex md:flex-grow flex-row justify-center'>
      { showGenreForm ? <GenreForm genres={genres} addGenre={addGenre}/> : null }
      <Genres genres={genres}/>
      <button className='text-red-600 font-bold items-center' onClick={createGenreForm} variant='outlined'>ADD GENRE</button>
      </div>
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