import React, { useState } from 'react';


function GenreSelect({ genres, handleChange, selectedGenre }) {
  

  const showGenres = genres.map((genre) => {
    return <option value={genre.id} key={genre.id}>{genre.name.charAt(0).toUpperCase() + genre.name.slice(1)}</option>
  })

  console.log("selected genre", selectedGenre)


  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <select
        label="Genre"
        onChange={handleChange}
        value={selectedGenre.id}
      >
        {showGenres}
      </select>
    </form>
  );
}

export default GenreSelect;