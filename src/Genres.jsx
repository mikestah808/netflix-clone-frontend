import React from 'react'
import Genre from './Genre'

function Genres({ genres }) {


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