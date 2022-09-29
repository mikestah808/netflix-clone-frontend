import React, { useContext } from 'react';
import { UserContext } from './context/user';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function NavBar() {
  const {user, logout} = useContext(UserContext)


  function handleLogout() {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(() => {
      logout()
    })
  }
    if(user.id){
      return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <h3>Welcome, {user.first_name}!</h3>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Movie Watch
              </Typography>
                <Button color="inherit" to="/" component={ Link }>Home</Button>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
    } else {
      return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Movie Watch
              </Typography>
                <Button color="inherit" to="/" component={ Link }>Home</Button>
                <Button color="inherit" to="/signup" component={ Link }>Sign Up</Button>
                <Button color="inherit" to="/login" component={ Link }>Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
    } 
  }


export default NavBar;
