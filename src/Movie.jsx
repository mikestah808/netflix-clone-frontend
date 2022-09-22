import React from 'react'

function Movie({ movie }) {
  const {title, description, image_url, release_date, like} = movie


  return (
    <>
    <h2>Title: {title}</h2>
    <p>Description: {description}</p>
    <img src={image_url}/>
    <p>Year Released: {release_date}</p>
    </>
  )
}

export default Movie