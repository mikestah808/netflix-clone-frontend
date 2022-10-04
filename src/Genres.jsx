import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { UserContext } from './context/user'
import Genre from './Genre'

function Genres() {
  const { user } = useContext(UserContext)
  const [genres, setGenres] = useState([])


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
      {renderGenres}
    </div>
  )
}

export default Genres