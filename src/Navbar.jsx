import React, { useContext } from 'react';
import { UserContext } from './context/user';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function NavBar() {
  const {user, logout} = useContext(UserContext)

  function handleLogout() {
    fetch("/logout")
    .then(() => {
      logout()
    })
  }

  if(user){
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <h3>Hello {user.first_name}</h3>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MovieWatch
            </Typography>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  } else {
    return (
      <NavLink to="/login">
        <Button>Login</Button>
      </NavLink>
    )
  }
}

export default NavBar;
