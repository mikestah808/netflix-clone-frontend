import React from 'react'

function Login() {
  return (
    <>
    <h2>MOVIE KEEPER</h2>
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
    </div>
  </div>
  </>
  )
}

export default Login