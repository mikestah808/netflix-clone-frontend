import React, { useState, useContext } from 'react'
import { Button } from '@mui/material';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import { useParams } from 'react-router-dom';
import { UserContext } from './context/user'

function SelectedGenrePage() {
   const [showMovieForm, setShowMovieForm] = useState(false)
   const { user } = useContext(UserContext)

   console.log("user", user)


   // Get the userId param from the URL.
   const { id } = useParams();




  function createMovieForm(){
    setShowMovieForm((showMovieForm) => !showMovieForm)
  }




  return (
    <>
    <Button variant="contained" size="small" align="center" onClick={createMovieForm}>Add Movie</Button>
    { showMovieForm ? <MovieForm /> : null }
    <MovieList />
    </>
  )
}

export default SelectedGenrePage