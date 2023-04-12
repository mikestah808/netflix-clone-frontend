import React, { useState, useContext } from 'react'
import { UserContext } from "../context/user"
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




function Login() {
    const {login} = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            email: email,
            password: password
          })
        })
        .then((res) => res.json())
        .then(user => {
          if (!user.error) {
            login(user)
          } else {
            setEmail("")
            setPassword("")
            setError("Invalid Email or Password")
          }
        })
    }

    return (
      <>
      <h1>Login Here!</h1>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <br />
        <TextField type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
        <br />
        <TextField type="password" id="email" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" />
        <br />
        <Button type='submit' variant="outlined">Login</Button>
      </Box>
      <h4>
        {error}
      </h4>
      </>
    );


}


export default Login;

{/* <div class="w-full max-w-xs">
<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Username
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      Password
    </label>
    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
    <p class="text-red-500 text-xs italic">Please choose a password.</p>
  </div>
  <div class="flex items-center justify-between">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      Sign In
    </button>
    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
      Forgot Password?
    </a>
  </div>
</form>
<p class="text-center text-gray-500 text-xs">
  &copy;2020 Acme Corp. All rights reserved.
</p>
</div> */}