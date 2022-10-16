import React, { useState, useContext } from 'react'
import { UserContext } from "../context/user"
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




function Login() {
    // const navigate = useNavigate();
    const {login} = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")



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
            console.log("you have successfuly logged in")
          } else {
            setEmail("")
            setPassword("")
            console.log("invalid email or password")
            // const errorsLis = user.error.login.map(e => <li>{e}</li>)
            // setErrors(errorsLis)
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
        <TextField type="text" id="email" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" />
        <br />
        <Button type='submit' variant="outlined">Login</Button>
      </Box>
      </>
    );


}


export default Login;