import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'
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
      <div>
        <Genres genres={genres}/>
      <div className="flex flex-col justify-center items-center">
      <button className='text-red-600 font-bold items-center' onClick={createGenreForm} variant='outlined'>ADD GENRE</button>
      { showGenreForm ? <GenreForm genres={genres} addGenre={addGenre}/> : null }
      </div>
      </div>
    )
  } else {
    return (
      <div>
        <Login /> 
      </div>
    )
  }
}

export default HomePage