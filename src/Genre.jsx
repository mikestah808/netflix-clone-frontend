import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Genre({ genre }) {


  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button className='btn-group' size="small">{genre.name}</Button>
      </div>
    </Box>
  );
}

export default Genre