// import React, { useContext, useState } from 'react'
import React, { useState } from 'react'
import { useEffect } from 'react'
// import { UserContext } from './context/user'
import Genre from './Genre'

function Genres() {
  // state for ALL genres
  const [genres, setGenres] = useState([])
  // const { user } = useContext(UserContext)

  useEffect(() => {
    fetch("/genres")
    .then((resp) => resp.json())
    .then((data) => setGenres(data))
  }, [])




  const renderGenres = genres.map((genre) => {
    return <Genre key={genre.id} genre={genre} />
})




  return (
    <div>
      <p>list of genres</p>
      <p>{renderGenres}</p>
    </div>
  )
}

export default Genres