import * as React from 'react';

function Genre({ genre }) {


  return (
      <div>
        <div className='text-white font-bold'>{genre.name.charAt(0).toUpperCase() + genre.name.slice(1)}</div>
      </div>
  );
}

export default Genre;