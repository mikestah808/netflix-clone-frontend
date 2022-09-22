import React, { useContext } from 'react';
import { UserContext } from './context/user';
import { NavLink, Link } from 'react-router-dom';
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

  if(user){
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <h3>Welcome, {user.first_name}!</h3>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Movie Vault
            </Typography>
            <NavLink to="/login">
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </NavLink>
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
              MovieWatch
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}


// return (
//   <NavLink to="/login">
//     <Button>Login</Button>
//   </NavLink>
// )
export default NavBar;
