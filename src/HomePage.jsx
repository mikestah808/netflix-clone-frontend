import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './context/user'
import Button from '@mui/material/Button'
import GenreForm from './GenreForm'
import Genres from './Genres'


function HomePage() {
  const { user } = useContext(UserContext)
  const [showGenreForm, setShowGenreForm] = useState(false)
  const [genres, setGenres] = useState([]);


  useEffect(() => {
    fetch("/genres")
    .then((resp) => resp.json())
    .then((data) => setGenres(data))
  }, [])


  function createGenreForm(){
    setShowGenreForm((showGenreForm) => !showGenreForm)
  }


  // function onCreateMovie(newMovie){
  //   const addNewMovie = [...user.movies, newMovie]
  //   console.log(addNewMovie)
  // }


  if(user){
    return (
      <>
      <Genres />
      <br /> 
      <Button onClick={createGenreForm} variant='outlined'>Add Genre</Button>
      { showGenreForm ? <GenreForm genres={genres} setGenres={setGenres} /> : null }
      {/* <MovieList genres={genres}/> */}
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