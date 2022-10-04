import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import MovieForm from './MovieForm';

function SelectedGenrePage() {
   const [showMovieForm, setShowMovieForm] = useState(false)


  // Get the userId param from the URL.
  const { id } = useParams();





  function createMovieForm(){
    setShowMovieForm((showMovieForm) => !showMovieForm)
  }




  return (
    <>
    <div>GenreDetail</div>
    <Button variant="contained" size="small" align="center" onClick={createMovieForm}>Add Movie</Button>
    { showMovieForm ? <MovieForm /> : null }
    </>
  )
}

export default SelectedGenrePage