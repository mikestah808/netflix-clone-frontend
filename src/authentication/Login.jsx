import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user"
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



function Login() {
    const navigate = useNavigate();
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
            navigate("/");
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
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
        <TextField type="text" id="email" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" />
        <Button type='submit' variant="outlined">Login</Button>
      </Box>
    );

  // return (
  //   <div>
  //       <form onSubmit={handleSubmit}>
  //           <label>Email: </label>
  //           <TextField id="outlined-basic" label="Email" variant="outlined" />
  //           <input 
  //               type="text"
  //               id="email"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //           /> <br />
  //           <label>Password: </label>
  //           <input 
  //               type="text"
  //               id="password"
  //               value={password}
  //               onChange={(e)=> setPassword(e.target.value)}
  //           />
  //           <br />
  //           <Button color="inherit" type='submit'>Login</Button>
  //       </form>
  //       <ul>
  //           {errors}
  //       </ul>
  //   </div>
  // )
}


export default Login;