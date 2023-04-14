import React, { useState, useContext } from 'react';
import { UserContext } from './context/user';

function GenreForm() {
  const { addGenre } = useContext(UserContext)
  const [name, setName] = useState("")
  const [error, setError] = useState("")



  function handleName(event) {
    setName(event.target.value);
  }




    function handleGenreSubmit(e){
        e.preventDefault()

        const formData = {
            name: name
        }

          fetch('/genres', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((resp) => resp.json())
        .then(data => {
          if(!data.errors){
            // console.log(data.errors)
            addGenre(data)
            setName("")
          } else {
            setError(data.errors)
          }
        })
    }



  return (
    <div className="flex flex-col justify-center items-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleGenreSubmit}>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name" value={name} onChange={handleName}/>
          <div className="flex flex-col justify-center items-center">
            <button className="bg-black text-red-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
            <p className="text-red-500 text-xs italic">{error}</p>
        </div>
      </form>
    </div>
  );
}

export default GenreForm