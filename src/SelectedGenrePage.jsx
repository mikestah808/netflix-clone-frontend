import React, { useState } from 'react'
import { Button } from '@mui/material';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function SelectedGenrePage() {
   const [showMovieForm, setShowMovieForm] = useState(false)


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