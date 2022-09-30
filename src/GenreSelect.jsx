import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function GenreSelect({ genres, handleChange, selectedGenre }) {
 

  const showGenres = genres.map((genre) => {
    return <MenuItem value={genre.id} key={genre.id}>{genre.name}</MenuItem>
  })


  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Genre</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label="Genre"
        onChange={handleChange}
        value={selectedGenre.name}
      >
        {showGenres}
      </Select>
    </FormControl>
  );
}

export default GenreSelect;