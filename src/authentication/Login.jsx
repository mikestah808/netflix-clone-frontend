import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
    <h2>Welcome to MovieWatch!</h2>
    <div className="container"> 
    <div className="app-wrapper">
      <div>
        <h2 className="title">Account Login</h2>
      </div>
      <form className="form-wrapper">
        <div className="username">
            <label className="label">Username</label>
            <input 
            className="input" 
            type="text" 
            />
        </div>
        <div className="password">
            <label className="label">Password</label>
            <input 
            className="input" 
            type="password"
            />
        </div>
          <input className="submit" type="submit" value="Login" />
      </form>
      <br/>
      <div>Don't have an account? Sign up</div>
      <Button color="inherit" to="/signup" component={ Link }>here</Button>
    </div>
  </div>
  </>
  )
}

export default Login