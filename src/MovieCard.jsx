import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';



function MovieCard({ movie }) {
    const {title, description, image_url, release_date} = movie

  return (
    <Card sx={{ maxWidth: 345 }}>
        <h3>{title}</h3>
        <p>Release Date: {release_date}</p>
      <CardMedia
        component="img"
        height="500"
        width="100%"
        image={image_url}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Description: {description}
        </Typography>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </CardContent>
    </Card>
  );
}

export default MovieCard