import React from 'react'
import Genre from './Genre'

function Genres({ genres }) {

  console.log(genres)


  // const renderGenres = genres.map((genre) => {
  //   return <Genre key={genre.id} genre={genre} />
  // })

  const renderGenres = genres.length > 0 ? genres.map((genre) => {
    return <Genre key={genre.id} genre={genre} /> 
}) : null




  return (
    <div>
      {renderGenres}
    </div>
  )
}

export default Genres