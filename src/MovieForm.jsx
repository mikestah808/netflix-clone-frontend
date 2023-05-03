import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'
import GenreSelect from './GenreSelect';
import GenreForm from './GenreForm';

function MovieForm({ genres }) {
  const { addMovie } = useContext(UserContext)

  //movie state
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [releaseDate, setReleaseDate] = useState("")
  const [selectedGenre, setSelectedGenre] = useState({});
  const [showGenreForm, setShowGenreForm] = useState(false)




  function createGenreForm(){
    setShowGenreForm((showGenreForm) => !showGenreForm)
  }


  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleDescription(event){
    setDescription(event.target.value);
  }

  function handleImage(event){
    setImage(event.target.value)
  }

  function handleReleaseDate(event){
    setReleaseDate(event.target.value)
  }


  function handleChange(event){ 
    // debugger;
    const findGenre = genres.find((genre) => genre.id === parseInt(event.target.value))
    setSelectedGenre(findGenre)
    // console.log(findGenre.name)
  };


  function handleMovieSubmit(e){
    e.preventDefault();

    const formData = {
      title: title,
      genre_id: selectedGenre.id,
      description: description,
      image_url: image,
      release_date: releaseDate
    };
    
    if(formData.title !== "" && formData.description !== "" && formData.image_url !== "" && formData.release_date !== 0){
      fetch('/movies', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newMovie => addMovie(newMovie));

    } else {
      //catch error from the backend
      //create state to store error 
      //render error at the bottom of the form
      alert("you forgot something!")
    }

    setTitle("");
    setDescription("")
    setImage("");
    setReleaseDate("")
  }


  return (
    <>
      <p className='text-red-600'>Need another genre? Click below!</p>
    <div className="flex flex-col justify-center items-center">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleMovieSubmit}>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Genre
        </label>
        <GenreSelect
          genres={genres}
          handleChange={handleChange} 
          selectedGenre={selectedGenre}
       />
      </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Title
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Title" value={title} onChange={handleTitle}/>
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Description
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Description" value={description} onChange={handleDescription}/>
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Image
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Image" onChange={handleImage} value={image}/>
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Release Date 
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Release Date" onChange={handleReleaseDate} value={releaseDate}/>
  </div>
  <div className="flex items-center justify-between">
    <button className="bg-black text-red-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Submit
    </button>
    {/* <p className="text-red-500 text-xs italic">{error}</p> */}
  </div>
</form>
</div>
    </>
  );
}

export default MovieForm;