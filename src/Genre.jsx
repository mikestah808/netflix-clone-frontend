import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Genre({ genre }) {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button component={ Link } to={`genres/${genre.id}`} className='btn-group' size="small">{genre.name}</Button>
      </div>
    </Box>
  );
}

export default Genre