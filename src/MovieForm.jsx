import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'
import FormControlUnstyled, {
  useFormControlUnstyledContext,
} from '@mui/base/FormControlUnstyled';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { Button } from '@mui/material';
import GenreSelect from './GenreSelect';
import GenreForm from './GenreForm';

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const Input = styled(InputUnstyled)(
  ({ theme }) => `
  
  .${inputUnstyledClasses.input} {
    width: 320px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 8px;
    padding: 12px 12px;

    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }

    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  }
`,
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlUnstyledContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
      {children}
      {required ? ' *' : ''}
    </p>
  );
})`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props) => {
  const formControlContext = useFormControlUnstyledContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

function MovieForm({ genres }) {
  const { addMovie } = useContext(UserContext)

  console.log("genres", genres)


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

  console.log("selected genre", selectedGenre.id)


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
    const findGenre = genres.find((genre) => genre.id === event.target.value)
    setSelectedGenre(findGenre)
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
    //what do we do once this data is submitted? 
    //send the state value of submittedData as a POST request to the correct path
    
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
      alert("you forgot something!")
    }

    setTitle("");
    setDescription("")
    setImage("");
    setReleaseDate("")
  }


  return (
    <>
    <p>Need another genre? Click below!</p>
       <Button onClick={createGenreForm}>Add Genre</Button>
       { showGenreForm ? <GenreForm /> : null }
    <form onSubmit={handleMovieSubmit}>
       <GenreSelect
          genres={genres}
          handleChange={handleChange} 
          selectedGenre={selectedGenre}
       />
      <Label>Title:</Label>
      <Input type="text" onChange={handleTitle} value={title}/>
      <HelperText />
      <Label>Description:</Label>
      <Input type="text" onChange={handleDescription} value={description}/>
      <HelperText />
      {/* add select dropdown here  */}
      <Label>Image:</Label>
      <Input type="text" onChange={handleImage} value={image}/>
      <HelperText />
      <Label>Release Date:</Label>
      <Input type="text" onChange={handleReleaseDate} value={releaseDate}/>
      <HelperText />
    <br />
    <Button variant="contained" type="submit">Submit</Button>
    </form>
    </>
  );
}

export default MovieForm;