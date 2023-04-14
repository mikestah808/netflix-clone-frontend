import React from 'react'
import Genre from './Genre'

function Genres({ genres }) {

  const renderGenres = genres.length > 0 ? genres.map((genre) => {
    return <Genre key={genre.id} genre={genre} /> 
}) : null




  return (
    <div className="grid grid-rows-1 grid-flow-col gap-2">
        {renderGenres}
    </div>
  )
}

export default Genres