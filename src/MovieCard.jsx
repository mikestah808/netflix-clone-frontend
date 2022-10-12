import React, { useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { UserContext } from './context/user'
import GenreSelect from './GenreSelect';



import FormControlUnstyled, {
  useFormControlUnstyledContext,
} from '@mui/base/FormControlUnstyled';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import clsx from 'clsx';


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




function MovieCard({ movie, genres }) {
  const { deleteMovie, updateMovie } = useContext(UserContext)
  const {id, title, description, image_url, release_date} = movie
  const [edit, setEdit] = useState(false)

  //movie state
  const [editTitle, setEditTitle] = useState(title)
  const [editDescription, setEditDescription] = useState(description)
  const [editImage, setEditImage] = useState(image_url)
  const [editReleaseDate, setEditReleaseDate] = useState(release_date)
  const [selectedGenre, setSelectedGenre] = useState({});



  function handleTitle(event) {
    setEditTitle(event.target.value);
  }

  function handleDescription(event){
    setEditDescription(event.target.value);
  }

  function handleImage(event){
    setEditImage(event.target.value)
  }

  function handleReleaseDate(event){
    setEditReleaseDate(event.target.value)
  }



    
  function handleChange(event){ 
    const findGenre = genres.find((genre) => genre.id === event.target.value)
    setSelectedGenre(findGenre)
  };



  function handleEditClick(){
      setEdit((edit) => !edit)
      //  fill in form inputs with key/pair values with object returned from HTTP GET request

      // fetch(`movies/${id}`)
      // .then((resp) => resp.json())
      // .then((selectedMovie) => console.log(selectedMovie));
  }


  function handleEditSubmit(e){

    const formData = {
      title: editTitle,
      genre_id: selectedGenre.id,
      description: editDescription,
      image_url: editImage,
      release_date: editReleaseDate
    };



    e.preventDefault();
    fetch(`/movies/${movie.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((updatedMovie) => updateMovie(updatedMovie));

      setEditTitle("");
      setEditDescription("");
      setEditImage("")
      setEditReleaseDate(0)

  }



    function handleDeleteClick() {
      fetch(`/movies/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(() => {
          deleteMovie(id)
        })
    }

  return (
    <Card sx={{ maxWidth: 350 }}>
        <h3>
          {title}
        </h3>
        <p>
          Release Date: 
          {release_date}
          </p>
      <CardMedia
        component="img"
        height="500"
        width="100%"
        image={image_url}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Description: 
          {description}
        </Typography>
        <Button onClick={handleEditClick}>Edit</Button>
        <Button onClick={handleDeleteClick}>Delete</Button>
      </CardContent>


      { edit ? (
       <form onSubmit={handleEditSubmit}>
       <GenreSelect genres={genres} selectedGenre={selectedGenre}  handleChange={handleChange}/>
       <Label>Title:</Label>
       <Input type="text" onChange={handleTitle} value={editTitle}/>
       <HelperText />
       <Label>Description:</Label>
       <Input type="text" onChange={handleDescription} value={editDescription}/>
       <HelperText />
       <Label>Image:</Label>
       <Input type="text" onChange={handleImage} value={editImage}/>
       <HelperText />
       <Label>Release Date:</Label>
       <Input type="text" onChange={handleReleaseDate} value={editReleaseDate}/>
       <HelperText />
     <br />
     <Button variant="contained" type="submit">Edit Movie</Button>
     </form>
    ) : null }
      

    </Card>
  );
}

export default MovieCard