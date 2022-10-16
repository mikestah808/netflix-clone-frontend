import React, { useState, useContext } from 'react'
import { UserContext } from "../context/user"
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Signup() {
    const {signup} = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [errorsList, setErrorsList] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup',{
            method: 'POST', 
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
            } else {
                setFirstName("")
                setLastName("")
                setEmail("")
                setPassword("")
                const errorsLis = user.errors.map(e => <h4>{e}</h4>)
                setErrorsList(errorsLis)
            }
        })
    }

    
  return (
        <>
        <h1>Create an Account!</h1>
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
        <TextField type="text" id="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} label="First Name" variant="outlined" />
        <br />
        <TextField type="text" id="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} label="Last Name" variant="outlined" />
        <br />
        <TextField type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
        <br />
        <TextField type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" />
        <br />
        <Button type='submit' variant="outlined">Login</Button>
      </Box>
        <p>
            {errorsList}
        </p>
      </>
        // {
            /* <form onSubmit={handleSubmit}>
        <label>First Name: </label>
            <input 
                type="text"
                id="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            /> <br />
            <label>Last Name: </label>
            <input 
                type="text"
                id="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            /> <br />
            <label>Email: </label>
            <input 
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /> <br />
            <label>Password: </label>
            <input 
                type="text"
                id="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            /> <br />
            <input type="submit"/>
        </form> */
    // }
  )
}

export default Signup